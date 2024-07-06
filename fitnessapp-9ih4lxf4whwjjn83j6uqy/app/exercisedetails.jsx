import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



export default function exerciseDetails() {
    const item= useLocalSearchParams()
    const router=useRouter()
    console.log('item:',item);
  return (
    <View className="flex flex-1 mt-12 bg-slate-300 rounded-t-[40px]">
      <View className="shadow-md bg-white rounded-t-[40px]">
        <Image
          source={{uri:item.gifUrl}}
          contentFit='cover'
          style={{width:wp(100) ,height:wp(100)}}
          className="rounded-t-[30px]"
        />
      </View>

      <TouchableOpacity 
        onPress={()=>router.back()}
        className="m-3 absolute rounded-md mt-2 right-0"
      >
        <MaterialIcons name="cancel" size={hp(5)} color="red"/>


      </TouchableOpacity>
    </View>
  )
}