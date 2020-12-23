import { NextPageContext } from 'next'
import { Photo } from '../../src/api/Photo'
import { Image, Card } from 'semantic-ui-react'


function Id({image}) {
    console.log(image)
    return (
        <div>
            <Image src={image.urls.regular} size={(image.height >= image.width)?"medium":"big"}/>
        </div>
        
    )
}
//min-width: 500px; max-width: calc((100vh - 175px) * 1.5);
//min-width: 332px; max-width: calc((100vh - 175px) * 0.662338)
Id.getInitialProps = async (ctx: NextPageContext)=>{
    const data = await Photo(ctx.query.id)
    return {image: data.response};
}

export default Id