import { createContext, useState, useEffect, useContext } from "react";
import { account } from "../appwriteconfiguration";
import { useNavigate } from "react-router-dom";
import { ID} from 'appwrite';
import "../components/Core/CSS/Loading.css"

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        getUserOnLoad()
    }, [])

    const getUserOnLoad = async () => {
        try{
            let accountDetails = await account.get();
            setUser(accountDetails)
        }catch(error){

        }
        setLoading(false)
    }

    const handleUserLogin = async (e, credentials) => {
        e.preventDefault()
        console.log('Credentials:', credentials)

        try{
            let response = await account.createEmailSession(credentials.email, credentials.password)
            let accountDetails = await account.get();
            alert("Account is successfully logged in to our system. Give it a moment as it's trying to connect you to the page. Have a nice Speak.")
            setUser(accountDetails)
            navigate('/message')
        }catch(error){
            console.error(error)
        }
    }

    const handleUserLogout = async () => {
        const response = await account.deleteSession('current');
        alert("Logging out.")
        setUser(null)
    }

    const handleUserRegister = async (e, credentials) => {
        e.preventDefault()
        console.log('Handle Register triggered!', credentials)

        if(credentials.password1 !== credentials.password2){
            alert('Passwords did not match!')
            return
        }

        try{

            let response = await account.create(ID.unique(), credentials.email, credentials.password1, credentials.name);
            console.log('User registered!', response)

            await account.createEmailSession(credentials.email, credentials.password1)
            let accountDetails = await account.get();
            alert("Account registered. Please give us a moment while it's processing your data to the database.")
            setUser(accountDetails)
            navigate('/message')
        }catch(error){
            console.error(error)
        }
    }

    const contextData = {
        user,
        handleUserLogin,
        handleUserLogout,
        handleUserRegister
    }

    return(
        <AuthContext.Provider value={contextData}>
            {loading ? <div className={"loading-screen"}>
                <p id={"loading-login"}>Loading...</p>
                <div className={"loading-wheel"}>
                    {/* Leave this empty */}
                </div>
            </div> : children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=> {return useContext(AuthContext)}

export default AuthContext;