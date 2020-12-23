import { AppProps } from 'next/app'
import MenuApp from '../src/components/Menu'
import 'semantic-ui-css/semantic.min.css'
import Footer from '../src/components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
        <MenuApp />
        <div style={{marginTop:"65px"}}>
          <Component {...pageProps}/>
        </div>
        
        <Footer/>
    </div>
  )
}

export default MyApp
