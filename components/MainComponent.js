import React, { Component } from "react";
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Directory from './DirectoryComponent';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { View, Platform } from 'react-native';
import CampsiteInfo from "./CampsiteInfoComponent";

const DirectoryNavigator = createStackNavigator(
  {
    //ROUTES CONFIG OBJECT
    //SETUP WHAT COMPONENTS AVAILABLE FOR STACK
    //SCREEN GIVES DIRECTORY COMPONENT CONVENIENCE FUNCTIONS (SEE DOC)
    Directory: { screen: Directory },
    CampsiteInfo: { screen: CampsiteInfo }
  },
  {
    initialRouteName: "Directory", //THIS IS THE DEFAULT SCREEN
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#5637DD"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const HomeNavigator = createStackNavigator (
  {
    Home: { screen: Home },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#5637DD"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const AboutNavigator = createStackNavigator (
  {
    About: { screen: About },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#5637DD"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const ContactNavigator = createStackNavigator (
  {
    Contact: { screen: Contact },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#5637DD"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeNavigator },
    Directory: { screen: DirectoryNavigator },
    About: { screen: AboutNavigator },
    Contact: { screen: ContactNavigator }
  },
  {
    drawerBackgroundColor: '#cec8ff'
  }
);

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight //TO ACCOUNT FOR DIFFERENCES BTWN ANDROID AND IOS
        }}>
        <MainNavigator />
      </View>
    );
  }
}

export default Main;
