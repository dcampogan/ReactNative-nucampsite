import React, { Component } from "react";
import { FlatList, View } from "react-native"; //FlatList and ListItem work well together
import { Tile } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "./LoadingComponent";

const mapStateToProps = state => {
  return {
    campsites: state.campsites
  };
};

class Directory extends Component {
  static navigationOptions = {
    title: "Directory"
  };

  render() {
    const { navigate } = this.props.navigation;
    //RECEIVES NAVIGATE PROP AS CONVENIENCE FUNCTION FROM SCREEN ON MAIN COMPONENT
    const renderDirectoryItem = ({ item }) => {
      return (
        <Tile
          title={item.name}
          caption={item.description}
          featured
          onPress={() => navigate("CampsiteInfo", { campsiteId: item.id })}
          //CAMPSITEID IS PASSED TO CAMPSITEINFO COMPONENT WITH NAVIGATE PROP BECAUSE DIRECTORY COMPONENT SET UP AS SCREEN ON MAIN
          imageSrc={{ uri: baseUrl + item.image }}
        />
      );
    };

    if (this.props.campsites.isLoading) {
      return <Loading />;
    }
    if (this.props.campsites.errMess) {
      return (
        <View>
          <Text>{this.props.campsites.errMess}</Text>
        </View>
      );
    }

    return (
      <FlatList
        data={this.props.campsites.campsites} //DATA EXPECTS AN ARRAY
        renderItem={renderDirectoryItem}
        //HOW TO RENDER EACH ITEM - WILL USE A CALLBACK FUNCTION
        //RENDERITEM ALSO RECEIVES AS PARAMETER "ITEM" OBJECT FROM DATA BEING RENDERED
        keyExtractor={item => item.id.toString()} //SIMILAR TO KEY IN REACT
      />
    );
  }
}

export default connect(mapStateToProps)(Directory);
