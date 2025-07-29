import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText className="text-red-600 text-2xl font-bold" type="title">Welcome to Attendance App!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView className="bg-blue-100 p-4 m-2 rounded-lg" style={styles.stepContainer}>
        <ThemedText className="text-blue-800 text-lg font-semibold" type="subtitle">🎓 University Attendance System</ThemedText>
        <ThemedText className="text-gray-700">
          Secure attendance tracking with biometric authentication and QR code verification.
        </ThemedText>
      </ThemedView>
      <ThemedView className="bg-green-100 p-4 m-2 rounded-lg" style={styles.stepContainer}>
        <ThemedText className="text-green-800 text-lg font-semibold" type="subtitle">🔒 Security Features</ThemedText>
        <ThemedText className="text-gray-700">
          • Biometric authentication{'\n'}
          • Refreshing QR codes{'\n'}
          • Location verification{'\n'}
          • Anti-proxy protection
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
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
});
