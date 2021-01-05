import { Image } from 'semantic-ui-react'
import Link from 'next/link'

const CardImage = ({item}) => {
    return (
        <div >
            <Link href={`/photo/${item.id}`}>
                <div>
                    <Image src={item.urls.regular} />
                </div>
            </Link>
        </div>
        
    )
}
export default CardImage