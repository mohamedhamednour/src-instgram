import { createContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import jwt_decode from "jwt-decode";


const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {
  
  let [authTokens, setAuthTokens] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')): null)
    let [user, setUser] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')): null)
    let [loading, setLoading] = useState(true)

    const history = useHistory()

    let loginUser = async (e )=> {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:7000/instgram/token/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        })
        let data = await response.json()
        console.log(data)

        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            history.push('/')
        }else{
            alert('Something went wrong!')
        }
    }
    let logoutUser = () => {
      setAuthTokens(null)
      setUser(null)
      localStorage.removeItem('authTokens')
      history.push('/login')
  }
    let contextData = {
      user :user,
      loginUser:loginUser,
      logoutUser: logoutUser
      
  }

  
    return(
      <AuthContext.Provider value={contextData}>
          {children}
      </AuthContext.Provider>
    )
}