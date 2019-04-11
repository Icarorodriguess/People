import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';


import PeopleList from '../components/PeopleList';

import axios from 'axios';

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peoples: [],
      loading: false,
      error: false,
    };
  }
  componentDidMount() {
    this.setState({loading: true});
     setTimeout(() => {
     axios
        .get("https://randomuser.me/api/?nat=br&results=15")
        .then(response => {
            const { results } = response.data;
            this.setState({
              peoples: results,
              loading: false,
            });
        }).catch(error => {
            this.setState({ 
              loading:false,
              error: true
               })
        });    
     },3500)
  }
  renderPage(){
    if(this.state.loading){
      return <ActivityIndicator size="large" color ='#00D0FF' /> 
      }
    if(this.state.error){
      return <Text style = {styles.error}>Opps!! Algo deu errado =(</Text>
     }
      return (
          <PeopleList 
              peoples ={this.state.peoples} 
               onPressItem={(pageParams) => {
                 this.props.navigation.navigate('PeopleDetail',pageParams);
              }}/>
                );
     }


  render() {
    return (
      <View style= {styles.container}>
        {this.renderPage()}
        {/*
          this.state.loading
            ? <ActivityIndicator size="large" color ='#00D0FF' />
            : this.state.error
            ? <Text style = {styles.error}>Opps!! Algo deu errado =(</Text>
            : <PeopleList 
          peoples ={this.state.peoples} 
          onPressItem={(pageParams) => {
            this.props.navigation.navigate('PeopleDetail',pageParams);
          }}/>
        */}
      </View>
        
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 18,
  }

})
