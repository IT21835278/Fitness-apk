import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { bodyParts } from '../constants/index';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useRouter } from 'expo-router';
import Animated,{FadeIn,FadeInDown,FadeInUp,FadeOut} from 'react-native-reanimated'


export default function BodyParts() {
    const router = useRouter()
  return (
    <View className="mx-4">
      <Text style={{fontSize:hp(3)}} className="font-semibold text-neutral-700 ">Exercises</Text>

      <FlatList 
        data={bodyParts}
        numColumns={2}
        keyExtractor={item=>item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:50, paddingTop:20}}
        columnWrapperStyle={{
            justifyContent:'space-between'
        }}
        renderItem={({item,index})=> <BodyPartCard index={index} item={item}/>}
    />

    </View>
  )
}

const BodyPartCard =({item,index})=>{
    return(
        <Animated.View entering={FadeInDown.duration(2000).delay(index*500).springify().damping(3)}>
            <TouchableOpacity
                onPress={()=>router.push({pathname:'/exercises',params:item})}
                style={{width:wp(44), height:wp(52)}}
                className="flex justify-end p-4 mb-4"
            >
                <Image 
                    source={item.image}
                    resizeMode='cove'
                    style={{width:wp(44),height:wp(52)}}
                    className="rounded-[35px] absolute"
            />
            <LinearGradient
                colors={['transparent','rgba(0,0,0,0.9)']}
                style={{width:wp(44),height:wp(15)}}
                start={{x:0.5, y:0}}
                end={{x:0.5, y:1}}
                className="absolute bottom-0 rounded-b-[35px]"
            />
            <Text
                style={{fontSize:hp(2.3)}}
                className="text-white font-semibold text-center tracking-wide"
            >{item?.name}</Text>
                
            </TouchableOpacity>
        </Animated.View>
    )

}