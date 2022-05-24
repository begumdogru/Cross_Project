import { StatusBar } from 'expo-status-bar';
import { Component, useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity, ToastAndroid} from 'react-native';


export default class Project extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataSource: [],
      isLoading: true
    }
  }
  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users/'
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        this.setState({
          dataSource: responseJson,
          isLoading: false
        })
    })
    .catch((error) => {
      console.log(error)
    })

  }
  renderItem = ({item}) => {
    return(
      <TouchableOpacity style={{flex:1, flexDirection:'row', marginBottom:3}} onPress= {() => this.props.navigation.navigate('User',
      {
        itemId: item.id,
        itemName: item.name,
        itemUserName: item.username,
        itemEmail: item.email,

        itemAddress_Street: item.address.street,
        itemAddress_Suite: item.address.suite,
        itemAddress_City: item.address.city,
        itemAddress_Zipcode: item.address.zipcode,
        itemAddress_Geo_LAT: item.address.geo.lat,
        itemAddress_Geo_LNG: item.address.geo.lng,
        itemPhone: item.phone,
        itemWebsite: item.website,
        itemCompany_Name: item.company.name,
        itemCompany_catchPhrase: item.company.catchPhrase,
        itemCompany_Bs: item.company.bs

      })
      }>
        <View style={{flex: 1,flexDirection: 'row', marginBottom: 3}}>
        <View style={{flex: 1, justifyContent: 'center', marginLeft: 5}}>
          <Text style={{fontSize: 18, color: 'green', marginBottom: 15}}  >
            {item.id}
          </Text>
          <Text style={{fontSize: 18, color: 'green', marginBottom: 15}}  >
            {item.name}
          </Text>
        </View>
      </View>
      </TouchableOpacity>
      
    )
  }

  renderSeperator = () => {
    return (
      <View style={{ height: 1, width: '100%', backgroundColor: 'black'}}>

      </View>
    )
  }



  render() {
    return (
      this.state.isLoading
      ?
      <View style= {{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size= 'large' color='#330066' animating />
      </View>
      :
      <View style={styles.container}>
        <FlatList
          data ={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={({id}, index) => id}
          ItemSeparatorComponent= {this.renderSeperator}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F5FCFF'
  }
});