import React, { Component } from 'react';
import { FlatList } from 'react-native'; //FlatList and ListItem work well together
import { ListItem } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';

class Directory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES
    };
  }
  static navigationOptions = {
    title: "Directory"
  };

  render() {
    const { navigate } = this.props.navigation;
    //RECEIVES NAVIGATE PROP AS CONVENIENCE FUNCTION FROM SCREEN ON MAIN COMPONENT
    const renderDirectoryItem = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          onPress={() => navigate("CampsiteInfo", { campsiteId: item.id })}
          //CAMPSITEID IS PASSED TO CAMPSITEINFO COMPONENT WITH NAVIGATE PROP BECAUSE DIRECTORY COMPONENT SET UP AS SCREEN ON MAIN
          leftAvatar={{ source: require("./images/react-lake.jpg") }} //REQUIRES AN OBJECT.  "REQUIRE" PROVIDED BY NODE JS
        />
      );
    };

    return (
      <FlatList
        data={this.state.campsites} //DATA EXPECTS AN ARRAY
        renderItem={renderDirectoryItem} 
        //HOW TO RENDER EACH ITEM - WILL USE A CALLBACK FUNCTION
        //RENDERITEM ALSO RECEIVES AS PARAMETER "ITEM" OBJECT FROM DATA BEING RENDERED
        keyExtractor={item => item.id.toString()} //SIMILAR TO KEY IN REACT
      />
    );
  }
}

export default Directory;