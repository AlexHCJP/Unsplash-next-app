import ListImages from '../src/components/ListImages';
import { Photos } from '../src/api/Photo';
import { useState } from 'react';

export default function Home() {

  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)

  const addImages = async (callback) => {
    const data = await Photos(30, page).finally(callback);
    console.log(data)
    setImages([...images, ...data.response.results])
    setPage(page + 1)
  }

  return (
    <div>
      
      <ListImages listImage={images} isUser callbackScrollCenter={addImages}/>
    </div>
  )
}