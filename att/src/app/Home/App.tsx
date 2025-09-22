import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { Event } from '../../components/Event';
import { Button, ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';


export default function App() {
    const [list, setlist] = useState<string[]>([])
    const [listName, setListName] = useState('')

    function handleAdd(){
        setlist(prevState => [...prevState, listName])
        setListName('')
    }
    function handRemove(name:string) {
        return setlist(prevState => prevState.filter(item => item !== name))
    }

    return (
        <View style={styles.container}>
            <View style={styles.titulo_container}>
                <Text style={styles.text_titul}>Lista de Compras</Text>
            </View>

            <View style={styles.contener_person}>
                <View style={styles.contener_input}>
                    <TextInput style={styles.input} placeholder='Digite o Produto' placeholderTextColor={"white"} onChangeText={e => setListName(e)} 
                    value={listName}/>
                    <TouchableOpacity style={styles.button} activeOpacity={0.5}>
                        <Text style={styles.buttonText}><AntDesign name="pluscircleo" size={24} color="white" onPress={handleAdd}/></Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <ScrollView style={styles.area}>
                        {
                            list.map(item => (
                                <Event
                                    key={item}
                                    name={item}
                                />
                            ))
                        }

                        {
                            list.map(item => (
                                <Itens 
                                    key = {item}
                                    name = {item}
                                    onPress={ () => handRemove(item)}
                                
                                />
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}