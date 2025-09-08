import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { Event } from '../../components/Event';
import { Button, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function App() {

    const list = ["Banana", "Maça", "Uva", "Arroz", "Feijão 'Mas não é feijão'"]

    return (
        <View style={styles.container}>
            <View style={styles.titulo_container}>
                <Text style={styles.text_titul}>Lista de Compras</Text>
            </View>
            <View style={styles.contener_person}>
                <View style={styles.contener_input}>
                    <TextInput style={styles.input} placeholder='Digite algo' placeholderTextColor={"white"}/>
                    <TouchableOpacity style={styles.button} activeOpacity={0.5}>
                        <Text style={styles.buttonText}><AntDesign name="pluscircleo" size={24} color="white" /></Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.contener_resultado}>
                    {
                        
                    }
                    <Event name='Maça'/>
                    <Event name='Banana'/>
                    <Event name='Melância'/>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}