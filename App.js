import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <TextInput placeholder="Add item" style={styles.inputItem}/>
        <Button title="Agregar" color="#841584"/>
      </View>
      <View style={styles.listaItems}>
        <Text style={styles.textoItem}>Item 1</Text>
        <Text style={styles.textoItem}>Item 2</Text>
        <Text style={styles.textoItem}>Item 3</Text>
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
    flexDirection: "row", 
    justifyContent: "center", 
    alignItems: "center"
  },
  inputItem:{
    borderBottomColor: "black", 
    borderBottomWidth: 1, 
    width: 200
  },
  listaItems:{
    justifyContent:"center",
    alignItems: "center"
  },
  textoItem:{
    marginBottom:20,
    fontSize: 15,
    width: "80%"
  }
});
