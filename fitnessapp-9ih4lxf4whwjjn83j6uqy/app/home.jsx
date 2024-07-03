import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlideShow from '../components/ImageSlideShow';



export default function Home() {
  return (
    <SafeAreaView className="flex-1 flex bg-slate-300 space-y-5" edges={['top']}>
        <StatusBar style='dark' />
        {/* punchine and avatar */}
        <View className="flex-row justify-between items-center mx-s">

            <View className="space-y-2">
                <Text style={{fontSize:hp(4)}} className="font-bold text-neutral-700 ml-5">READY TO</Text> 
                <Text style={{fontSize:hp(4)}} className="font-bold text-rose-600 ml-5">WORKOUT</Text>
            </View>

            <View className="flex justify-center items-center space-y-2">
                <Image 
                    source={require('../assets/images/avatar.jpg')}
                    style={{height:hp(7),width:hp(7)}}
                    className="rounded-full mr-5"

                />
                <View 
                    className="bg-slate-400 rounded-full flex justify-center items-center mr-5 border-[2px] border-red-600" 
                    style={{height:hp(5),width:hp(5)}}>
                <Ionicons name="notifications-sharp" size={30} color="red" />
                </View>
            </View>
        </View>

        {/* image side show */}
        <View>
            <ImageSlideShow/>

        </View>
    </SafeAreaView>
  )
}