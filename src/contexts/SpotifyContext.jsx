import { useState, createContext, useEffect ,useContext } from "react";
import { getUserData } from "@/components/data.service";

const SpotifyContext = createContext();


export const SpotifyProvider = ({children}) => {
const [user,setUser] = useState(null);
const [userId,setUserId] = useState(null)
 
useEffect(() =>{
 async function getUser() {
    const res =  await getUserData();
    console.log(res)
    setUser(res)
    setUserId(res.id)
 }
 
getUser();
},[])



return(
    <SpotifyContext.Provider value = {{user , userId}}>
        {children}
    </SpotifyContext.Provider>
);
};


export const SpotifyData = () => {
    const context = useContext(SpotifyContext);
    if(!context){
        throw new Error('must use with in SpotifyProvider');
    };
    return context;
};