import { Image } from 'expo-image';
import { Platform, StyleSheet, TextInput, TouchableOpacity, View, Alert, Dimensions,Text } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import { Link, router } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
  const [registerNumber, setRegisterNumber] = useState('');
  const [password, setPassword] = useState('');
  const [biometricStatus, setBiometricStatus] = useState('pending');

  const handleBiometricAuth = () => {
    Alert.alert(
      "Biometric Authentication",
      "Place your finger on the sensor or look at the camera",
      [
        { text: "Cancel", onPress: () => setBiometricStatus('failed') },
        { text: "Simulate Success", onPress: () => setBiometricStatus('verified') }
      ]
    );
  };

  const handleLogin = () => {
    if (!registerNumber || !password) {
      Alert.alert("Error", "Please enter register number and password");
      return;
    }
    if (biometricStatus !== 'verified') {
      Alert.alert("Error", "Please complete biometric verification");
      return;
    }
    Alert.alert("Success", "Login successful! Welcome to the attendance system.");
  };

  return (
    <View className="flex-1 bg-emerald-400 border-12 border-black">
      <View className='flex-col top-0'>
        
      <View className='flex col items-center justify-start opacity-70 bg-black border-4 border-black h-[85%] top-[45%] bottom-0 rounded-[20] p-6'>
        <Text className='text-[#50C878] p-2 text-4xl font-extrabold'>SignIn</Text>
        
        <View className='flex-row justify-center items-center w-[95%] my-8 bg-transparent rounded-lg border-b-4'>
          <FontAwesome name="user" size={24} color="#50C878" />
          <TextInput placeholder='Register Number' className='w-[95%] my-1'></TextInput>
        </View>
        
        <View className='flex-row justify-center items-center w-[95%] my-8 bg-transparent rounded-lg border-b-4'>
          <Entypo name="lock" size={24} color="#50C878" />
          <TextInput placeholder='Password' className='w-[95%] my-1'></TextInput>
        </View>
        <View> 
        </View>
        <TouchableOpacity className='flex-row justify-center items-center w-[95%] m-8 bg-transparent p-2 rounded-lg border-4' onPress={handleLogin}>
          <Ionicons name="finger-print" size={24} color="#50C878" />
          <Text className='text-center px-2 text-black font-bold'>Biometric Verification</Text>
        </TouchableOpacity>
        <TouchableOpacity className='w-[95%] flex-row justify-center items-center  bg-transparent p-2 rounded-lg border-4' onPress={handleLogin}>
          <MaterialIcons name="login" size={24} color="#50C878" />
          <Text className='text-center px-2 text-black font-bold'>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity className='w-[95%] p-2 ' onPress={() => router.push('/register')}>
          <Text className='text-center text-black font-bold'>Dont have an account? <Text className='text-emerald-200'>Click here to SignUp</Text></Text>
        </TouchableOpacity>
      </View>
      </View>
      
      
    </View>
  );
}


