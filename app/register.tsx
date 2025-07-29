import { Image } from 'expo-image';
import { StyleSheet, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useState } from 'react';
import { IoFingerPrint } from "react-icons/io5";
import { Link } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

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
    <View className="flex-1 items-center justify-center min-h-[60vh] bg-red-100">
      <ThemedView className="w-full max-w-xs bg-red-200 p-3 rounded-2xl shadow-xl border border-red-300 -mt-10 z-10">
        {/* Header */}
        <ThemedView className="items-center mb-4 bg-red-200 p-2 rounded-xl">
          <Image
            source={require('@/assets/images/logo.png')}
            style={{ width: 75, height: 75 }}
          />
          <ThemedText className="text-red-800 text-lg font-black text-center mb-1 tracking-tight">Register</ThemedText>
          <ThemedText className="text-red-600 text-center font-medium text-xs">Create your account</ThemedText>
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

        {/* Confirm Password Input */}
        <ThemedView className="mb-2 bg-red-200 p-2 rounded-xl">
          <ThemedText className="text-red-800 font-bold mb-1 text-sm">Confirm Password</ThemedText>
          <TextInput
            className="bg-red-300 p-2 rounded-lg border-2 border-red-500 shadow-sm"
            placeholder="Confirm password"
            placeholderTextColor="#7f1d1d"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            style={styles.compactInput}
          />
        </ThemedView>

        {/* Biometric Registration */}
        <ThemedView className="mb-2 bg-red-200 p-2 rounded-xl">
          <ThemedText className="text-red-800 font-bold mb-1 text-sm">Add Biometrics</ThemedText>
          <TouchableOpacity
            onPress={handleBiometricRegister}
            className={`bg-red-300 p-2 rounded-lg border-2 border-red-500 shadow-sm flex-row items-center justify-center ${biometricStatus === 'added' ? 'opacity-80' : ''}`}
          >
            <IoFingerPrint size={24} color="#dc2626" />
            <ThemedText className="text-red-800 text-sm font-bold ml-2">
              {biometricStatus === 'added' ? 'Added' : 'Tap to Add'}
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>

        {/* Register Button */}
        <ThemedView className="bg-red-200 p-2 rounded-xl">
          <TouchableOpacity
            onPress={handleRegister}
            className={`p-2 rounded-lg items-center ${
              registerNumber && password && confirmPassword && biometricStatus === 'added'
                ? 'bg-red-600'
                : 'bg-red-400'
            }`}
            disabled={!registerNumber || !password || !confirmPassword || biometricStatus !== 'added'}
          >
            <ThemedText className="text-white font-black text-base tracking-wide">
              Register
            </ThemedText>
          </TouchableOpacity>
          <Link href="/login" asChild>
            <ThemedText className='items-center text-center p-3 text-red-700 underline'>
              Already have an account? Login
            </ThemedText>
          </Link>
        </ThemedView>
      </ThemedView>
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
