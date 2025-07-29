# University Student Attendance App 📱🎓

A secure mobile application for university student attendance tracking with biometric authentication and anti-proxy features.

## � Features

- **Biometric Authentication**: Secure login using fingerprint/face recognition
- **QR Code Attendance**: Dynamic QR codes that refresh to prevent proxy attendance
- **Local Hotspot Detection**: Ensures students are physically present on campus
- **Real-time Tracking**: Live attendance monitoring for students and faculty
- **Secure & Tamper-proof**: Multiple security layers to prevent attendance fraud
- **Cross-platform**: Works on both iOS and Android devices

## 🛡️ Anti-Proxy Security

- **Refreshing QR Codes**: QR codes automatically refresh at set intervals
- **Location Verification**: Validates student location using campus WiFi/hotspot
- **Biometric Verification**: Ensures the actual student is marking attendance
- **Time-limited Sessions**: Attendance windows with strict time constraints

## 📱 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Expo CLI
- Mobile device or emulator for testing

### Installation

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the development server

   ```bash
   npx expo start
   ```

3. Scan the QR code with Expo Go app or run on emulator

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## 🏗️ Project Structure

```
attendance-project/
├── app/                    # Main application screens
│   ├── (tabs)/            # Tab-based navigation
│   ├── _layout.tsx        # Root layout
│   └── +not-found.tsx     # 404 page
├── components/            # Reusable UI components
├── constants/             # App constants and configuration
├── hooks/                 # Custom React hooks
└── assets/               # Images, fonts, and static files
```

## 🔧 Tech Stack

- **Frontend**: React Native with Expo
- **Navigation**: Expo Router (file-based routing)
- **Biometrics**: Expo Local Authentication
- **QR Codes**: Dynamic generation and scanning
- **Location**: Expo Location Services
- **State Management**: React hooks and context

## 📋 Development Commands

```bash
# Start development server
npm start

# Run on Android
npm run android

# Run on iOS  
npm run ios

# Run on web
npm run web

# Lint code
npm run lint

# Reset project to blank template
npm run reset-project
```

## 🔐 Security Features

### Biometric Authentication
- Fingerprint recognition
- Face ID/Face recognition
- Fallback to PIN/password

### Location Verification
- Campus WiFi detection
- GPS coordinate validation
- Network-based location services

### QR Code Security
- Time-limited QR codes (30-60 seconds)
- Encrypted QR data
- Server-side validation
- Unique session tokens

## 📊 For University Administration

- Real-time attendance dashboards
- Student attendance reports
- Class-wise analytics
- Export functionality for academic records
- Integration with university management systems

## 🚀 Deployment

### For Testing
1. Build development version: `expo build`
2. Install Expo Go on test devices
3. Share QR code for testing

### For Production
1. Build standalone apps: `expo build:android` / `expo build:ios`
2. Submit to app stores
3. Configure production backend services

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation
