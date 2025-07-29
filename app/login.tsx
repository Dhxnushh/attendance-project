import { Image } from 'expo-image';
import { Platform, StyleSheet, TextInput, TouchableOpacity, View, Alert, Dimensions,Text } from 'react-native';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import { Link, Redirect, router } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as LocalAuthentication from 'expo-local-authentication';

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
  const [registerNumber, setRegisterNumber] = useState('');
  const [password, setPassword] = useState('');
  const [biometricStatus, setBiometricStatus] = useState('pending');
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  }, []);

   const handleBiometricAuth = async () => {
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics) {
      return Alert.alert('Biometric not set up', 'No fingerprints or face ID found.');
    }
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Login with Biometrics',
      fallbackLabel: 'Enter Password',
      cancelLabel: 'Cancel',
    });

    if (result.success && registerNumber!==''){
      Alert.alert('Access Granted ✅');
      router.push({pathname: '/home',params: { registerNumber }});
      setBiometricStatus('verified');
      setRegisterNumber("");
      setPassword("");
    } else {
      Alert.alert('Authentication Failed Enter Reg-no ❌');
        }
  };

  const handleLogin = () => {
    if (password!=='' && registerNumber!==''){
      Alert.alert('Access Granted ✅');
      router.push({pathname: '/home',params: { registerNumber }});
      setBiometricStatus('verified');
      setRegisterNumber("");
      setPassword("");
    } else {
      Alert.alert('Authentication Failed Enter Reg-no & pw❌');
        }
  };

  return (
    <View className="flex-1 bg-emerald-400 border-12 border-black">
      <View className='flex-col top-0'>
        
      <View className='flex col items-center justify-start opacity-70 bg-black border-4 border-black h-[85%] top-[45%] bottom-0 rounded-[20] p-6'>
        <Text className='text-[#50C878] p-2 text-4xl font-extrabold'>SignIn</Text>
        
        <View className='flex-row justify-center items-center w-[95%] my-8 bg-transparent rounded-lg border-b-4'>
          <FontAwesome name="user" size={24} color="#50C878" />
          <TextInput onChangeText={(text)=>setRegisterNumber(text)} value={registerNumber} placeholder='Register Number' className='w-[95%] my-1'></TextInput>
        </View>
        
        <View className='flex-row justify-center items-center w-[95%] my-8 bg-transparent rounded-lg border-b-4'>
          <Entypo name="lock" size={24} color="#50C878" />
          <TextInput onChangeText={(text)=>setPassword(text)} value={password} placeholder='Password' className='w-[95%] my-1'></TextInput>
        </View>
        <View> 
        </View>
        <TouchableOpacity className='flex-row justify-center items-center w-[95%] m-8 bg-transparent p-2 rounded-lg border-4' onPress={handleBiometricAuth}>
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


