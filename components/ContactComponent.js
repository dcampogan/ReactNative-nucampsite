import React, { Component } from "react";
import { ScrollView, Text } from "react-native";
import * as Animatable from "react-native-animatable";
import { Card, Button, Icon } from 'react-native-elements';
import * as MailComposer from 'expo-mail-composer';

class Contact extends Component {
  static navigationOptions = {
    title: "Contact Us"
  };

  sendMail() {
    MailComposer.composeAsync({
      recipients: ["campsites@nucamp.co"],
      subject: "Inquiry",
      body: "To whom it may concern:"
    });
  }

  render() {
    return (
      <ScrollView>
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
          <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
            <Text style={{ margin: 10 }}>
              {`1 Nucamp Way\nSeattle, WA 98081\nU.S.A`}
            </Text>
            <Text style={{ margin: 10 }}>
              {`Phone: 1-206-555-1234\nEmail: campsites@nucamp.co`}
            </Text>
            <Button
              title="Send Email"
              buttonStyle={{ backgroundColor: "#5637DD", margin: 40 }}
              icon={
                <Icon
                  name="envelope-o"
                  type="font-awesome"
                  color="#fff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              onPress={() => this.sendMail()}
            />
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Contact;
