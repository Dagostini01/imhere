import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export function Participant() {

    return (
        <View style={styles.container}>
            <Text></Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    );
}