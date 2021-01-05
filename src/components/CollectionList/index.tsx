import Collection from './Collection'

const CollectionList = ({collections}) => {
    return (
        <div className="collections">
            {(collections.map((val, ind)=>{
                return <Collection collection={val} key={ind}/>
            }))}    
        </div>
    )
}

export default CollectionList