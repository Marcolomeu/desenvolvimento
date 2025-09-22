import { styles } from "./styles";
import {Text, TextInput, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
    name:string,
}

export function Event({name}:Props) {
    return (
        <View style={styles.contener}>
            <Text style={styles.buttonText}><AntDesign name="checkcircle" size={24} color="black" /></Text>
            <Text style={styles.textEvent}>{name}</Text>
        </View>
    );
}

export function Input({placeH, onChangeText, onPress, value}: Props) {
    return (
        <View style={styles.contener}>
            <TextInput style ={styles.input} placeholder= {placeH} placeholderTextColor={'#ada9a8'} onChanceText={onChangeText} value={value}>
            </TextInput>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.button}><AntDesign name="delete" size={24} color="black"/></Text>
            </TouchableOpacity>
        </View>
    )
}