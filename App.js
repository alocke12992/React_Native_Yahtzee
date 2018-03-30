import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  Button,
  Left,
  Right,
  Body
} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import {NativeRouter, Route, Switch} from 'react-router-native';
import Login from './components/Login';
import Register from './components/Register';
import Scores from './components/Scores';
import Yahtzee from './components/Yahtzee';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Ionicons name='md-menu' color='black' size={30} />
          </Left>
          <Body>
            <Title>Yahtzee</Title>
          </Body>
          <Right />
        </Header>
        <Content>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
