import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Exercises() {
  const router = useRouter();
  const item= useLocalSearchParams()
  console.log('item:',item);

  return (
    <SafeAreaView>
      <Text>Exercises</Text>
      <TouchableOpacity onPress={()=>router.back()}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}