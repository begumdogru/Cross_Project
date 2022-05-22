import { StatusBar } from "expo-status-bar";
import {useState, useEffect} from "react";

import { StyleSheet, Text, View, FlatList, SafeAreaView, ActivityIndicator} from "react-native";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true)
//  console.log(data); 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
        {isLoading ? <ActivityIndicator/> : <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) =>{
            if(item.id < 21){
              return(  
                <Text>{item.id} : {item.title}</Text>
              )
            }
            else{
              setLoading(false)
            }
           
          }}
        />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "red",
  },
});

export default App;