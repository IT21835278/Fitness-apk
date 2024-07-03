import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient'
import Animated,{FadeIn,FadeInDown,FadeInUp,FadeOut} from 'react-native-reanimated'
import { useRouter } from 'expo-router';


export default function index() {
    const router = useRouter()
    return (
        <View className="flex-1  flex justify-end">
            {/* <Text className="text-red-500">puka</Text> */}
            <StatusBar style="light" />
            <Image className="h-full w-full absolute" source={require('../assets/images/welcome.png')} />

            <LinearGradient 
                colors={['transparent', 'rgba(0, 0, 0, 1)']} 
                style={{ width: wp(100), height: hp(60) }} 
                start={{ x: 0.5, y: 0 }} 
                end={{ x: 0.5, y: 0.8 }} 
                className="flex justify-end pb-12 space-y-8"
                >
                <Animated.View entering={FadeInUp.delay(1000).springify()}  className='flex items-center'>
                    <Text style={{fontSize:hp(3)}} className="text-white font-bold tracking-wide">Enargy and precistanse</Text>
                    <Text style={{fontSize:hp(2)}} className="text-red-500 font-semibold tracking-wide">Qunqure the all thing</Text>
                    <Text style={{fontSize:hp(1)}} className="text-red-500 font-semibold tracking-wide">Malith Maduranga xxx.com</Text>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(2000).springify()}>
                    <TouchableOpacity 
                        onPress={()=>router.push('home')}
                       style={{height:hp(7),width:wp(80)}}
                       className="bg-rose-600 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
                       >
                        <Text className="text-white font-bold tracking-wide">
                            Get Started
                         </Text>

                       </TouchableOpacity>
                    
                </Animated.View>
            </LinearGradient>

        </View>
    )
}