import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"


//register api
export const registerAPI = async(users)=>{
   return await commonAPI('POST',`${BASE_URL}/user/register`,users,"")
}

//login api
export const loginAPI = async(users)=>{
   return await commonAPI('POST',`${BASE_URL}/user/login`,users,"")
}

//add contact
export const contactAPI = async(medias)=>{
   return await commonAPI('POST',`${BASE_URL}/contact/add`,medias,"")
}

//get contact
export const getmediaAPI =async()=>{
   return await commonAPI('GET',`${BASE_URL}/media/get`)

}