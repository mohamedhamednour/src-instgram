import { Route, Redirect } from 'react-router-dom'

import { useContext} from 'react'
import AuthContext from './Authcontext';


export const PrivateRoute = ({children, ...rest}) => {
    const {user} = useContext(AuthContext)

  
    return(
        <Route {...rest}>{!user ? <Redirect to="/login" /> :  children}</Route>
    )
}

 