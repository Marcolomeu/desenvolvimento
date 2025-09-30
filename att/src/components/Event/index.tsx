import { styles } from "./styles";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

// Tipos
type PropEvent = {
  name: string;
};

type PropsInput = {
  name: string;
  placeH: string;
  onChangeText: (texto: string) => void;
  onPress: () => void;
  value: string;
};

type PropsItens = {
  name: string;
  onPress: () => void;
};

// Exibe um item com ícone de “check”
export function Event({ name }: PropEvent) {
  return (
    <View style={styles.contener}>
      <AntDesign name="checkcircle" size={24} color="black" />
      <Text style={styles.textEvent}>{name}</Text>
    </View>
  );
}

// Input reutilizável (opcional)
export function Input({ placeH, onChangeText, onPress, value }: PropsInput) {
  return (
    <View style={styles.contener}>
      <TextInput
        style={styles.input}
        placeholder={placeH}
        placeholderTextColor="#ada9a8"
        onChangeText={onChangeText}
        value={value}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <AntDesign name="delete" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

// Item da lista com botão de deletar
export function Itens({ name, onPress }: PropsItens) {
  return (
    <View style={styles.contener}>
      <Text style={styles.textEvent}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <AntDesign name="delete" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
