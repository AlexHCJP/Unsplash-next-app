import { NextPageContext } from 'next'
import { Photo } from '../../src/api/Photo'
import { Image} from 'semantic-ui-react'
import styles from './style.module.css';
import CollectionList from '../../src/components/CollectionList';

function Id({image}) {
    return (
        <div>
            <div className={styles.center}>
                <Image src={image.urls.regular}
                    size={(image.height >= image.width)
                        ? "medium" 
                        : "big"}/>
            </div>
            
            <div className={styles.relatedCollection}>
                <div className={styles.textRelatedCollection}>
                    <strong>Related Collections</strong>
                </div>
                
                
                <CollectionList collections={image.related_collections.results}/>
            </div>
        </div>
        
    )
}
Id.getInitialProps = async (ctx: NextPageContext)=>{
    const data = await Photo(ctx.query.id)
    return {image: data.response};
}

export default Id