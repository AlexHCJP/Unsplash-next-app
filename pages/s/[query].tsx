import ListImages from "../../src/components/ListImages"
import { useState } from "react"
import { SearchPhoto } from "../../src/api/Photo"
import Container from "../../src/components/Container"

function Query ({query}) {
    const [images, setImages] = useState([])
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)

    const addImages = async (callback) => {
        if(!total || images.length < total){
            const data = await SearchPhoto(query, 30, page).finally(callback);
            setImages([...images, ...data.response.results])
            setPage(page + 1)
            setTotal(data.response.total)
        }
        
    }

    return (
        <div>
            <Container>
                <h1>{query}</h1>
                <p>{total} photos</p>
            </Container>
            
            <ListImages listImage={images} isUser callbackScrollCenter={addImages}/>
        </div>
    )
}
Query.getInitialProps = (ctx) => {
    return { query : ctx.query.query}
}
export default Query