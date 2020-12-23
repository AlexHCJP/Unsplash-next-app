import ListImages from '../src/components/ListImages';
import { NextPageContext } from 'next'
import { Photos } from '../src/api/Photo';


export default function Home({images}) {
  return (
    <div>
      <ListImages listImage={images} isUser/>
    </div>
  )
}
Home.getInitialProps = async (ctx: NextPageContext) => {
  const data = await Photos(20);
  return {images: data.response.results};
}