import { Image } from 'expo-image';
import { Platform, StyleSheet, TextInput, TouchableOpacity, View, Alert, Dimensions,Text } from 'react-native';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import { Link, router } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as LocalAuthentication from 'expo-local-authentication';


export default function RegisterScreen() {
  const [registerNumber, setRegisterNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [biometricStatus, setBiometricStatus] = useState(false); // pending, added, failed
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  }, []);

  const handleBiometricRegister = async () => {
    // Simulate biometric registration
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Login with Biometrics',
      fallbackLabel: 'Enter Password',
      cancelLabel: 'Cancel',
    });
  
    if (result.success) {
      //Alert.alert('Access Granted ✅');
      setBiometricStatus(true);
    } else {
      Alert.alert('Authentication Failed ❌');
    }
  };

  const handleRegister = () => {
    if (!registerNumber || !password || !confirmPassword || !biometricStatus) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
    
    router.push({ pathname: '/home', params: { registerNumber } });
    setBiometricStatus(false);
    setConfirmPassword("");
    setRegisterNumber("");
    setPassword("");
    Alert.alert("Success", "Registration successful!");
  };

  return (
    <View className="flex-1 bg-emerald-400 border-12 border-black">
      <View className='flex-col top-0'>
        
      <View className='flex col items-center justify-start opacity-70 bg-black border-4 border-black h-[100%] top-[28%] bottom-0 rounded-[20] p-6'>
        <Text className='text-[#50C878] p-2 text-4xl font-extrabold'>SignUp</Text>
        
        <View className='flex-row justify-center items-center w-[95%] my-8 bg-transparent rounded-lg border-b-4'>
          <FontAwesome name="user" size={24} color="#50C878" />
          <TextInput onChangeText={(text)=>{setRegisterNumber(text)}} value={registerNumber} placeholder='Register Number' className='w-[95%] my-1'></TextInput>
        </View>
        
        <View className='flex-row justify-center items-center w-[95%] my-8 bg-transparent rounded-lg border-b-4'>
          <Entypo name="lock" size={24} color="#50C878" />
          <TextInput onChangeText={(text)=>{setPassword(text)}} value={password} placeholder='Password' className='w-[95%] my-1'></TextInput>
        </View>
        <View className='flex-row justify-center items-center w-[95%] my-8 bg-transparent rounded-lg border-b-4'>
          <Entypo name="lock" size={24} color="#50C878" />
          <TextInput onChangeText={(text)=>{setConfirmPassword(text)}} value={confirmPassword} placeholder='Confirm Password' className='w-[95%] my-1'></TextInput>
        </View>
        <View> 
        </View>
        {!biometricStatus ? (
          <TouchableOpacity className='flex-row justify-center items-center w-[95%] m-8 bg-transparent p-2 rounded-lg border-4' onPress={handleBiometricRegister}>
          <Ionicons name="finger-print" size={24} color="#50C878" />
          <Text className='text-center px-2 text-black font-bold'>Add Biometric</Text>
        </TouchableOpacity>
        ) : (
          <TouchableOpacity className='flex-row justify-center items-center w-[95%] m-8 bg-transparent p-2 rounded-lg border-4' onPress={handleBiometricRegister}>
            <Ionicons name="finger-print" size={24} color="#50C878" />
            <Text className='text-center px-2 text-black font-bold'>Biometric Added</Text>
          </TouchableOpacity>
        )}
        
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
