 import { Platform, StyleSheet, TextInput, TouchableOpacity, View, Alert,Button, Dimensions,Text,ScrollView } from 'react-native';
 import { useLocalSearchParams } from 'expo-router';
 import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useEffect, useState } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';


 export default function HomeScreen(){
    const [permission, requestPermission] = useCameraPermissions();
  const [scannedData, setScannedData] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

    const { registerNumber } = useLocalSearchParams();
    return(
        <View className='flex-1 bg-[#f2f2f2]  border-12 border-black'>
            <View className='flex-row items-center bg-green-800 h-[25%] rounded-3xl justify-center'>
                <Text className='text-4xl text-white font-bold'>{registerNumber}</Text>
            </View>
            <ScrollView>
                <View className='flex-col items-center justify-center'>
                <TouchableOpacity className='flex-row bg-white shadow-slate-200 justify-center bg-bei p-4 w-[85%] rounded-lg mt-4'>
                    <MaterialCommunityIcons name="qrcode-scan" size={24} color="black" />
                    <Text className='text-center px-2 text-2xl font-bold'>Scan QR</Text>
                </TouchableOpacity>          
            </View>
            <View>
                <Text className='text-start items-start text-2xl px-8 font-medium mt-4'>
                    Todays classes!
                </Text>
                <View className='flex-col items-center justify-center'>
                    <TouchableOpacity className='flex-row bg-white shadow-slate-200 justify-start bg-bei p-4 w-[85%] rounded-lg mt-4'>
                        <MaterialCommunityIcons name="book-open-page-variant" size={20} color="black" />
                        <Text className='text-center px-2 text-2xl font-small'>Arduino</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='flex-row bg-white shadow-slate-200 justify-start bg-bei p-4 w-[85%] rounded-lg mt-4'>
                        <MaterialCommunityIcons name="book-open-page-variant" size={20} color="black" />
                        <Text className='text-center px-2 text-2xl font-small'>Data communication</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='flex-row bg-white shadow-slate-200 justify-start bg-bei p-4 w-[85%] rounded-lg mt-4'>
                        <MaterialCommunityIcons name="book-open-page-variant" size={20} color="black" />
                        <Text className='text-center px-2 text-2xl font-small'>UI/UX</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='flex-row bg-white shadow-slate-200 justify-start bg-bei p-4 w-[85%] rounded-lg mt-4'>
                        <MaterialCommunityIcons name="book-open-page-variant" size={20} color="black" />
                        <Text className='text-center px-2 text-2xl font-small'>Image processing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='flex-row bg-white shadow-slate-200 justify-start bg-bei p-4 w-[85%] rounded-lg mt-4'>
                        <MaterialCommunityIcons name="book-open-page-variant" size={20} color="black" />
                        <Text className='text-center px-2 text-2xl font-small'>CBCS</Text>
                    </TouchableOpacity>
            </View>
            </View>
            <View>
                <Text className='text-start items-start text-2xl px-8 font-medium mt-4'>
                    Marked Present!
                </Text>
                <View className='flex-col items-center justify-center'>
                    
                    <TouchableOpacity className='flex-row bg-white shadow-slate-200 justify-start bg-bei p-4 w-[85%] rounded-lg mt-4'>
                        <MaterialCommunityIcons name="book-open-page-variant" size={20} color="black" />
                        <Text className='text-center px-2 text-2xl font-small'>Image processing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='flex-row bg-white shadow-slate-200 justify-start bg-bei p-4 w-[85%] rounded-lg mt-4'>
                        <MaterialCommunityIcons name="book-open-page-variant" size={20} color="black" />
                        <Text className='text-center px-2 text-2xl font-small'>CBCS</Text>
                    </TouchableOpacity>
            </View>
            </View>
            <View>
                <Text className='text-start items-start text-2xl px-8 font-medium mt-4'>
                    Marked absent!
                </Text>
                <View className='flex-col items-center justify-center'>
                    <TouchableOpacity className='flex-row bg-white shadow-slate-200 justify-start bg-bei p-4 w-[85%] rounded-lg mt-4'>
                        <MaterialCommunityIcons name="book-open-page-variant" size={20} color="black" />
                        <Text className='text-center px-2 text-2xl font-small'>Arduino</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='flex-row bg-white shadow-slate-200 justify-start bg-bei p-4 w-[85%] rounded-lg mt-4'>
                        <MaterialCommunityIcons name="book-open-page-variant" size={20} color="black" />
                        <Text className='text-center px-2 text-2xl font-small'>Data communication</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='flex-row bg-white shadow-slate-200 justify-start bg-bei p-4 w-[85%] rounded-lg mt-4'>
                        <MaterialCommunityIcons name="book-open-page-variant" size={20} color="black" />
                        <Text className='text-center px-2 text-2xl font-small'>UI/UX</Text>
                    </TouchableOpacity>
                    
            </View>
            </View>
            </ScrollView>
            
        </View>
    )
 }