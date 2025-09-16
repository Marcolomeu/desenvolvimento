import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { Event } from '../../components/Event';
import { Button, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';


export default function App() {
    const [list, setlist] = useState<string[]>([])
    const [listName, setListName] = useState('')

    function handleAdd(){
        setlist(prevState => [...prevState, listName])
        setListName('')
    }

    return (
        <View style={styles.container}>
            <View style={styles.titulo_container}>
                <Text style={styles.text_titul}>Lista de Compras</Text>
            </View>
            <View style={styles.contener_person}>
                <View style={styles.contener_input}>
                    <TextInput style={styles.input} placeholder='Digite o Produto' placeholderTextColor={"white"} onChangeText={e => setListName(e)} onPress={handleApp} 
                    value={listName}/>
                    <TouchableOpacity style={styles.button} activeOpacity={0.5}>
                        <Text style={styles.buttonText}><AntDesign name="pluscircleo" size={24} color="white" /></Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}