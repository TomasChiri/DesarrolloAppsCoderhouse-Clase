import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

export default function App() {
  const [ textItem, setTextItem] = useState("");
  const [ itemList, setItemList] = useState([]);

  const onHandleChangeItem = (t) => {
    setTextItem(t);
  }

  const addItem = () => {
    setItemList(currentItems => [
      ...currentItems,
      {id: Math.random().toString(), value:textItem}
    ]);
    setTextItem("");
  }

  const renderItem = ({item}) => (
    <View style={styles.items}>
      <Text>{item.value}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text>Shopping List</Text>
      <View style={styles.itemContainer}>
        <TextInput 
          value={textItem} 
          placeholder="Add your item" 
          style={styles.inputItem}
          onChangeText={onHandleChangeItem}
        />
        <Button title="ADD" onPress={addItem}/>
      </View>
      <View>
        <FlatList 
          data={itemList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:30, 
    marginTop: 50,
  },
  itemContainer: {
    marginTop: 30,
    flexDirection: "row", 
    justifyContent: "center", 
    alignItems: "center"
  },
  inputItem:{
    borderBottomColor: "black", 
    borderBottomWidth: 1, 
    width: 200
  },
  items:{
    justifyContent:"center",
    alignItems: "center",
    marginTop: 50,
    height: 30
  },
  textoItem:{
    marginBottom:20,
    fontSize: 15,
    width: "80%"
  }
});

{/* <View>
{itemList.map((item) => (
  <View style={styles.items}>
    <Text>{item.value}</Text>
  </View>
))}
</View> */}