import { useContext, useEffect } from 'react'
import styles from '../styles/Guides.module.css'
import AuthContext from '../stores/authContext'

export default function Guides() {
const { user, authReady } = useContext(AuthContext)

  useEffect(() => {
    if (authReady){ // waits untill user is logged in to fetch request
      fetch('./netlify/functions/guides', {
        headers: {
          Autherization: 'Bearer' + user.token.access_token }
      }) // fetching data from functions
        .then(res => res.json())
        .then(data => console.log(data))
    }
  }, [user, authReady])

  return (
    <div className={styles.guides}>
      <h2>All Guides</h2>
    </div> 
  )
}