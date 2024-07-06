import { View, Text,TouchableOpacity, ScrollView } from 'react-native'
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
    <View className="flex flex-1 mt-16 bg-white rounded-t-[40px]">
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

      <ScrollView className="mx-4 space-y-2 mt-3 " showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:60}}>
        <Text style={{fontSize:hp(2)}} className="text-red-700 font-bold tracking-wide">
          Equipment : <Text className="text-neutral-600">{item?.equipment}</Text>
        </Text>

        <Text style={{fontSize:hp(2)}} className="text-red-700 font-bold tracking-wide">
          Target Muscles : <Text className="text-neutral-600">{item?.target}</Text>
        </Text>

        <Text style={{fontSize:hp(2)}} className="text-red-700 font-bold tracking-wide">
          Secodary Muscles : <Text className="text-neutral-600">{item?.secondaryMuscles}</Text>
        </Text>

        <Text style={{fontSize:hp(3.5)}} className="text-red-700 font-bold tracking-wide">
          Instruction : 
        </Text>
              {
                item.instructions.split(',').map((instruction,index)=>{
                  return(
                    <Text key={instruction} className="text-neutral-600">
                    {instruction}
                  </Text>
                  )

                })
              }

      </ScrollView>

    </View>
  )
}