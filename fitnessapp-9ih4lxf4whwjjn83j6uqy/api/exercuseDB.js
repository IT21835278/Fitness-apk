import axios  from 'axios';
import {rapidApiKey} from '../constants/index'

const baseUrl = 'https://exercisedb.p.rapidapi.com'

const apiCall = async (url,params) =>{
    try{
        const options ={
            method:'GET',
            url,
            params,
            headers: {
                'x-rapidapi-key': rapidApiKey,
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
            }
        }
        const responce = await axios.request(options)
        return responce.data

    }catch(err){
        console.log('Error: ',err.message);
    }
}

export const fetchExerciseByBodyPart = async(bodyPart)=>{
    let data = await apiCall(baseUrl+`/exercises/bodyPart/${bodyPart}`)
    return data
}