import { Image } from 'expo-image';
import { Platform, StyleSheet, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useState } from 'react';
import { IoFingerPrint } from "react-icons/io5";
import { Link } from 'expo-router';
// ...existing code...
import { Dimensions } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
const { width, height } = Dimensions.get('window');


// ...SVG pattern background removed...



export default function LoginScreen() {
  const [registerNumber, setRegisterNumber] = useState('');
  const [password, setPassword] = useState('');
  const [biometricStatus, setBiometricStatus] = useState('pending'); // pending, verified, failed

  const handleBiometricAuth = () => {
    // Simulate biometric authentication
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
    Alert.alert("Success", "Login successful!");
  };

  return (
    <View className="flex-1 items-center justify-center min-h-[60vh]" style={{ backgroundColor: '#fef2f2' }}>
      <ThemedView className="w-full max-w-xs bg-transparent p-3 rounded-2xl shadow-xl border border-red-300 -mt-10 z-10">
        {/* Header */}
        <ThemedView className="items-center mb-4 bg-transparent p-2 rounded-xl">
          
            <Image
        source={require('@/assets/images/logo.png')}
        style={{ width: 75, height: 75 }}
      />
          
          <ThemedText className="text-red-800 text-lg font-black text-center mb-1 tracking-tight">Student Portal</ThemedText>
          <ThemedText className="text-red-600 text-center font-medium text-xs">University Attendance System</ThemedText>
        </ThemedView>

        {/* Register Number Input */}
        <ThemedView className="mb-2 bg-red-200 p-2 rounded-xl">
          <ThemedText className="text-red-800 font-bold mb-1 text-sm">Register Number</ThemedText>
          <TextInput
            className="bg-red-300 p-2 rounded-lg border-2 border-red-500 shadow-sm"
            placeholder="Register number"
            placeholderTextColor="#7f1d1d"
            value={registerNumber}
            onChangeText={setRegisterNumber}
            autoCapitalize="characters"
            style={styles.compactInput}
          />
        </ThemedView>

        {/* Password Input */}
        <ThemedView className="mb-2 bg-red-200 p-2 rounded-xl">
          <ThemedText className="text-red-800 font-bold mb-1 text-sm">Password</ThemedText>
          <TextInput
            className="bg-red-300 p-2 rounded-lg border-2 border-red-500 shadow-sm"
            placeholder="Password"
            placeholderTextColor="#7f1d1d"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.compactInput}
          />
        </ThemedView>

        {/* Biometric Verification */}
        <ThemedView className="mb-2 bg-red-200 p-2 rounded-xl">
          <ThemedText className="text-red-800 font-bold mb-1 text-sm">Biometric Authentication</ThemedText>
          <TouchableOpacity
            onPress={handleBiometricAuth}
            className={`bg-red-300 p-2 rounded-lg border-2 border-red-500 shadow-sm flex-row items-center justify-center ${biometricStatus === 'verified' ? 'opacity-80' : ''}`}
          >   
              <IoFingerPrint size={24} color="#dc2626" />
            <ThemedText className="text-red-800 text-sm font-bold">
              {biometricStatus === 'verified' ? 'Verified' : 'Tap to Verify'}
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>

        {/* Login Button */}
        <ThemedView className="bg-red-200 p-2 rounded-xl">
          <TouchableOpacity
            onPress={handleLogin}
            className={`p-2 rounded-lg items-center ${
              registerNumber && password && biometricStatus === 'verified'
                ? 'bg-red-600'
                : 'bg-red-400'
            }`}
            disabled={!registerNumber || !password || biometricStatus !== 'verified'}
          >
            <ThemedText className="text-white font-black text-base tracking-wide">
              Login
            </ThemedText>
          </TouchableOpacity>
          <Link href="/register" asChild>
            <ThemedText className='items-center text-center p-3 text-red-700 underline'>
              Don't have an account? Signup
            </ThemedText>
          </Link>
        </ThemedView>
      </ThemedView>
      {/* WavyHeader removed, pattern background is now used */}
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  input: {
    fontSize: 16,
    color: '#333',
  },
  modernInput: {
    fontSize: 18,
    color: '#dc2626',
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  compactInput: {
    fontSize: 14,
    color: '#dc2626',
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});
