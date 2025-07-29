 import { Platform, StyleSheet, TextInput, TouchableOpacity, View, Alert, Dimensions,Text } from 'react-native';
 import { useLocalSearchParams } from 'expo-router';

 export default function HomeScreen(){
    const { registerNumber } = useLocalSearchParams();
    return(
        <View className='flex-1 bg-emerald-400 border-12 border-black'>
            <Text>Logged in as: {registerNumber} </Text>
        </View>
    )
 }