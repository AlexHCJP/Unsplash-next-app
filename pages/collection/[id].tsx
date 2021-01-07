import { NextPageContext } from "next"
import { Collection, CollectionPhoto } from "../../src/api/Collection"
import ListImages from "../../src/components/ListImages"
import { useState } from "react"
import { Image } from "semantic-ui-react"
import styles from './style.module.css'

function Id({col}){
    const [collection, setCollection] = useState(col)
    const [photos, setPhotos] = useState([])
    const [page, setPage] = useState(1)
    console.log(collection)
    const fetchPhoto = async (callback) => {
        if(photos.length != collection.total_photos || !collection.total_photos){
            const data = await CollectionPhoto(collection.id, 30, page).finally(callback)
            setPage(page + 1)
            setPhotos([...photos, ...data.response.results])
        }
    }

    return (
        <div>
            <h1>{collection.title}</h1>
            <ListImages listImage={photos} callbackScrollCenter={fetchPhoto}/>
        </div>
    )
}

Id.getInitialProps = async(ctx: NextPageContext) => {
    const data = await Collection(ctx.query.id);
    return { col: data.response}
}

export default Id