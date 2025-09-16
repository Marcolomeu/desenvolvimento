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