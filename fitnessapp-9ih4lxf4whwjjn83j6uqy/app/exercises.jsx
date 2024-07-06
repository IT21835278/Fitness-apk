import { View, Text, TouchableOpacity, Button, StatusBar, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {fetchExerciseByBodyPart} from '../api/exercuseDB'
import 'react-native-gesture-handler'; // Ensure this is at the top of your entry file
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExerciseList from '@/components/ExerciseList';
import {demoCardio} from '../constants/index'
import {ScrollView} from 'react-native-virtualized-view'


export default function Exercises() {
  const [exercises,setExercises]= useState(demoCardio)
  const router = useRouter();
  const item= useLocalSearchParams()
  // console.log('item:',item);

  useEffect(()=>{
    if(item) getExercises(item.name)
  },[item])

  const getExercises = async(bodypart)=>{
    // let data = await fetchExerciseByBodyPart(bodypart)
    // console.log('gotData: ',data);
    // setExercises(data)
  }

  return (
    <GestureHandlerRootView className="bg-slate-300 flex-1">
    <ScrollView>
      <StatusBar style='light'/>
      <Image 
        source={item.image}
        style={{width:wp(100),height:hp(45)}}
        className="rounded-b-[40px]"
      />
      <TouchableOpacity 
        onPress={()=>router.back()}
        className="mx-4 absolute rounded-s-full flex flex-row pr-1 rounded-md bg-rose-600 "
        style={{height:hp(5.5), width:hp(5.5), marginTop:hp(7)}}
      >
        <Ionicons name="chevron-back-sharp" size={hp(5)} color="white"/>
        {/* <Text className="text-white">Back</Text> */}

      </TouchableOpacity>

      {/* exersice */}
      <View className="ex-4 space-y-3 mt-4 items-center">
        <Text style={{fontSize:hp(3)}} className="font-semibold text-neutral-700">
          {item.name ? item.name.toLocaleUpperCase() : ''} EXERCISES
        </Text>
        <View className="mb-10">
          <ExerciseList data={exercises} />

        </View>
      </View>

    </ScrollView>
    </GestureHandlerRootView>
  )
}