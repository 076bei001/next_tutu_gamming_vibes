import {useState, createContext, useEffect} from 'react';
import netlifyIidentity from 'netlify-identity-widget';
const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    authReady: false
})

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(AuthContext)
    
    useEffect(() => {
        netlifyIidentity.on('login', () => {
            setUser(user)   // logs/sign user in
            netlifyIidentity.close()
            console.log('log event')
        })

        netlifyIidentity.on('logout', () => {
            setUser(null)   // logs user out
            console.log('logout event')
        })
        
        // init netlify identity connection
        netlifyIidentity.init()
        
        return () => {
            netlifyIidentity.off('login')
            netlifyIidentity.off('logout')
        }

        
    }, [])

    const login = () => {
        netlifyIidentity.open()
    }
    
    const logout = () => {
        netlifyIidentity.logout()
    }
    const context = {user, login, logout}


    return(
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext