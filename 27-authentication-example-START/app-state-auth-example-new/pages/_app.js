import '@/styles/globals.css'

// you don't have the providers notification so we'll add them here
import AppNotification from '@/components/state/AppNotification'
import AuthProvider from '@/components/state/AuthProvider'

export default function App({ Component, pageProps }) {
  return <AppNotification>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </AppNotification>

}
