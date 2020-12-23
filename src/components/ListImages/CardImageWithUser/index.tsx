import { Image } from 'semantic-ui-react'
import Link from 'next/link'
import styles from './style.module.css'

const hiddenThumb = (e, is)=>{
    e.currentTarget.children[1].hidden = is
    
}

const CardImageWithUser = ({item}) => {
    return (
        <div>
            <Link href={`/photo/${item.id}`}>
                <div className={styles.blockImage} 
                    onMouseEnter={(e)=>{hiddenThumb(e, false)}}
                    onMouseLeave={(e)=>{hiddenThumb(e, true)}}>

                    <Image src={item.urls.regular} className={styles.image} />
                    <div hidden>
                        <div className={styles.thumb}>
                            <div>
                                <Link href={`/user/${item.user.username}`}>
                                    <div>
                                        <Image src={item.user.profile_image.small} circular/>
                                        <div>
                                            <strong>{item.user.name}</strong>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
        
    )
}
export default CardImageWithUser