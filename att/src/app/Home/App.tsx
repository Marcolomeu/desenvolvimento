import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { Itens } from '../../components/Event';   // ajuste o caminho se necessário
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';

export default function App() {
  const [list, setList] = useState<string[]>([]);
  const [listName, setListName] = useState('');

  function handleAdd() {
    if (!listName.trim()) return; // evita item vazio
    setList(prev => [...prev, listName.trim()]);
    setListName('');
  }

  function handleRemove(name: string) {
    setList(prev => prev.filter(item => item !== name));
  }

  return (
    <View style={styles.container}>
      <View style={styles.titulo_container}>
        <Text style={styles.text_titul}>Lista de Compras</Text>
      </View>

      <View style={styles.contener_person}>
        <View style={styles.contener_input}>
          <TextInput
            style={styles.input}
            placeholder="Digite o Produto"
            placeholderTextColor="white"
            onChangeText={setListName}
            value={listName}
          />
          <TouchableOpacity style={styles.button} onPress={handleAdd}>
            <AntDesign name="pluscircleo" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.area}>
          {list.map(item => (
            <Itens key={item} name={item} onPress={() => handleRemove(item)} />
          ))}
        </ScrollView>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
