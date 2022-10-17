import Navbar from '../components/Navbar'
import { AuthContextProvider } from '../stores/authContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      
      <AuthContextProvider> {/* take components inside as children and gives to AuthContextProvider*/}
        <Navbar/>
        <Component {...pageProps} />
      </AuthContextProvider>
    </div>
  )
}

export default MyApp