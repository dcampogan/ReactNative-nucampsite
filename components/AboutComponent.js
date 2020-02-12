import React, { Component } from "react";
import { ScrollView, Text, FlatList } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "./LoadingComponent";

//receives the state as prop and returns the partners data from state received from export and connect
const mapStateToProps = state => {
  return {
    partners: state.partners
  };
};

const Mission = () => {
  return (
    <Card title="Our Mission">
      <Text>
        We present a curated database of the best campsites in the vast woods
        and backcountry of the World Wide Web Wilderness. We increase access to
        adventure for the public while promoting safe and respectful use of
        resources. The expert wilderness trekkers on our staff personally verify
        each campsite to make sure that they are up to our standards. We also
        present a platform for campers to share reviews on campsites they have
        visited with each other.
      </Text>
    </Card>
  );
};

class About extends Component {
  static navigationOptions = {
    title: "About Us"
  };

  render() {
    const renderPartner = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          leftAvatar={{ source: { uri: baseUrl + item.image } }}
        />
      );
    };

    if (this.props.partners.isLoading) {
      return (
        <ScrollView>
          <Mission />
          <Card title="Community Partners">
            <Loading />
          </Card>
        </ScrollView>
      );
    }
    
    if (this.props.partners.errMess) {
      return (
        <ScrollView>
          <Mission />
          <Card title="Community Partners">
            <Text>{this.props.partners.errMess}</Text>
          </Card>
        </ScrollView>
      );
    }

    return (
      <ScrollView>
        <Mission />
        <Card title="Community Partners">
          <FlatList
            data={this.props.partners.partners} // BUILT IN PROP, ITERATES THROUGH ARRAY LIKE MAP
            renderItem={renderPartner} // TELLS IT WHAT TO DO WITH THE LIST
            keyExtractor={item => item.id.toString()} // DOES SAME THING AS KEY IN REACT
          />
        </Card>
      </ScrollView>
    );
  }
}

//connect and mapstatetoprops ensures about component receives data as props from redux store
export default connect(mapStateToProps)(About);
