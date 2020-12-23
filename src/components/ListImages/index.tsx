import NotFound from '../NotFound';
import Masonry from 'react-masonry-css'
import styles from './style.module.css'
import CardImageWithUser from './CardImageWithUser';
import CardImage from './CardImage';

type ListImagesProps = {
    listImage: Array<any>,
    isUser?: boolean
}
const breakpointColumnsObj = {
    default: 3,
    700: 2,
    500: 1
};
const ListImages = ({listImage, isUser}: ListImagesProps) => (
    <div>
        {(listImage)?
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={styles.myMasonryGrid}
                columnClassName={styles.myMasonryGridColumn}>
                {listImage.map((item, ind)=>{
                    return (isUser)?<CardImageWithUser key={ind} item={item}/>:<CardImage key={ind} item={item}/>
                })}
            </Masonry>
        :<NotFound/>}
        
    </div>
)
export default ListImages