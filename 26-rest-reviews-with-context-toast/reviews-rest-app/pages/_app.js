import '../styles/globals.css'

// import my AppNotification
import AppNotification from '../components/context/AppNotification'

function MyApp({ Component, pageProps }) {
  // wrapped in our notification nothing different
  return  <AppNotification>
    <Component {...pageProps} />
  </AppNotification>

}

export default MyApp
