import NotFound from '../NotFound';
import Masonry from 'react-masonry-css'
import styles from './style.module.css'
import CardImageWithUser from './CardImageWithUser';
import CardImage from './CardImage';
import { useEffect, useState } from 'react';

type ListImagesProps = {
    listImage: Array<any>,
    isUser?: boolean,
    callbackScrollCenter?: Function
}

const breakpointColumnsObj = {
    default: 3,
    700: 2,
    500: 1
};

const ListImages = ({listImage, isUser, callbackScrollCenter}: ListImagesProps) => {
    const [isLoading, setLoading] = useState(true)
    useEffect(()=>{
        if(isLoading){
            callbackScrollCenter(()=>{setLoading(false)})
        }
    }, [isLoading])

    useEffect(()=>{
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
        
    })

    const handleScroll = (ev) => {
        const innerHeight = window.innerHeight,
            scrollTop = ev.target.documentElement.scrollTop,
            windowHeight = ev.target.documentElement.scrollHeight
        
        if(windowHeight - (scrollTop + innerHeight) < 1000 && !isLoading){
            setLoading(true)
        }
    }
    return (
        <div>
            {(listImage)?
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className={styles.myMasonryGrid}
                    columnClassName={styles.myMasonryGridColumn}>
                    {(isUser)? listImage.map((item, ind)=>{
                        return <CardImageWithUser key={ind} item={item}/>
                    }): listImage.map((item, ind)=>{return <CardImage key={ind} item={item}/>})}
                </Masonry >
            :<NotFound/>}
        </div>
    )
}

export default ListImages