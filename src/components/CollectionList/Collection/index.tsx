
import styles from './style.module.css';
import Link from 'next/link';

const Collection = ({collection}) => {
    return (
        <div className={styles.collectionContainer}>
            <Link href={`/collection/${collection.id}`}>
                <div className={styles.parentContainerImages}>
                    <div className={styles.containerImages}>
                        <div className={styles.mainImage}>
                            <img src={collection.preview_photos[0].urls.small} className={styles.image}/>
                        </div>
                        <div className={styles.secondaryImage}>
                            <div className={styles.secondaryImageBlock}>
                                <img src={collection.preview_photos[1].urls.small} className={styles.image}/>
                            </div>
                            <div className={styles.secondaryImageBlock}>
                                <img src={collection.preview_photos[2].urls.small} className={styles.image}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Collection