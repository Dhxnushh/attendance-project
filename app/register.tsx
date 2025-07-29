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

export default function RegisterScreen() {
  const [registerNumber, setRegisterNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [biometricStatus, setBiometricStatus] = useState('pending'); // pending, added, failed

  const handleBiometricRegister = () => {
    // Simulate biometric registration
    Alert.alert(
      "Biometric Registration",
      "Place your finger on the sensor or look at the camera to register",
      [
        { text: "Cancel", onPress: () => setBiometricStatus('failed') },
        { text: "Simulate Success", onPress: () => setBiometricStatus('added') }
      ]
    );
  };

  const handleRegister = () => {
    if (!registerNumber || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
    if (biometricStatus !== 'added') {
      Alert.alert("Error", "Please add your biometrics");
      return;
    }
    Alert.alert("Success", "Registration successful!");
  };

  return (
    <View className="flex-1 bg-emerald-400 border-12 border-black">
      <View className='flex-col top-0'>
        
      <View className='flex col items-center justify-start opacity-70 bg-black border-4 border-black h-[100%] top-[28%] bottom-0 rounded-[20] p-6'>
        <Text className='text-[#50C878] p-2 text-4xl font-extrabold'>SignUp</Text>
        
        <View className='flex-row justify-center items-center w-[95%] my-8 bg-transparent rounded-lg border-b-4'>
          <FontAwesome name="user" size={24} color="#50C878" />
          <TextInput placeholder='Register Number' className='w-[95%] my-1'></TextInput>
        </View>
        
        <View className='flex-row justify-center items-center w-[95%] my-8 bg-transparent rounded-lg border-b-4'>
          <Entypo name="lock" size={24} color="#50C878" />
          <TextInput placeholder='Password' className='w-[95%] my-1'></TextInput>
        </View>
        <View className='flex-row justify-center items-center w-[95%] my-8 bg-transparent rounded-lg border-b-4'>
          <Entypo name="lock" size={24} color="#50C878" />
          <TextInput placeholder='Confirm Password' className='w-[95%] my-1'></TextInput>
        </View>
        <View> 
        </View>
        <TouchableOpacity className='flex-row justify-center items-center w-[95%] m-8 bg-transparent p-2 rounded-lg border-4' onPress={handleRegister}>
          <Ionicons name="finger-print" size={24} color="#50C878" />
          <Text className='text-center px-2 text-black font-bold'>Add Biometric</Text>
        </TouchableOpacity>
        <TouchableOpacity className='w-[95%] flex-row justify-center items-center  bg-transparent p-2 rounded-lg border-4' onPress={handleRegister}>
          <MaterialIcons name="login" size={24} color="#50C878" />
          <Text className='text-center px-2 text-black font-bold'>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity className='w-[99%] p-2 ' onPress={() => router.push('/login')}>
          <Text className='text-center text-black font-bold'>Already have an account? <Text className='text-emerald-200'>Click here to SignIn</Text></Text>
        </TouchableOpacity>
      </View>
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  compactInput: {
    fontSize: 14,
    color: '#dc2626',
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});
