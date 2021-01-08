import { AppProps } from 'next/app'
import MenuApp from '../src/components/Menu'
import 'semantic-ui-css/semantic.min.css'
import '../src/components/CollectionList/style.css'
import Footer from '../src/components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
        <Head>
          <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
          <title>Realization Unsplash API</title>
        </Head>
        <MenuApp />
        <div style={{marginTop:"65px"}}>
          <Component {...pageProps}/>
        </div>
        
        <Footer/>
    </div>
  )
}

export default MyApp
