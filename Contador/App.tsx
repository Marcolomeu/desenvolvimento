import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import {styles} from './styles'

export default function App() {
    const[count, setCount] = useState (0);
    const [counTen, setCountTen] = useState(10);
    const [countHund, setCountHund] = useState(100);

    function handleClick() {
        console.log("Botjão foi clicado"); 
        setCount(val => val+1);
        setCountTen(val => val+10);
        setCountHund(val => val+100);
}
    
return(
  <View style={styles.container}>
  <Text>Teste de netState</Text>
  <Button onPress={handleClick} title = 'Click aqui' />
  <Text>Contador 1: {count}</Text>
  <Text>Contador 10: {counTen}</Text>
  <Text>Contador 100: {countHund}</Text>
  </View>
);
}