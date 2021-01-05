import Tag from "./Tag"
import { List } from "semantic-ui-react"

const ListTags = ({tags}) => {
    return (
        <List horizontal>
            {tags.map((tag, ind)=>{
                return <Tag tag={tag} key={ind}/>
            })} 
        </List>
    )
}

export default ListTags