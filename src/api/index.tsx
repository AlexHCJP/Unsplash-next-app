import {createApi} from 'unsplash-js'
import config from './config.json'
import fetch from 'node-fetch'

export default createApi({
    accessKey: config.unsplashApi.accessKey,
    fetch
})