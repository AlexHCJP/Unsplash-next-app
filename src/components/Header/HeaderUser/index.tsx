import { Image, Header } from "semantic-ui-react"
import ListTags from "../../ListTags"

const HeaderUser = ({user}) => {
    
    return (
        <Header textAlign="center" as="h5">
            <Header.Content>
                <Image src={user.profile_image.large} size="small" circular/>
            </Header.Content>
            
            <Header.Content >
                <Header textAlign="left" as="h4" >
                <div style={{paddingLeft:"15px"}}>
                    <h2>{user.name}</h2>
                    <p>{user.bio}</p>
                    <p>{user.location}</p>
                    <ListTags tags={user.tags.custom}/>
                </div>
                </Header>
            </Header.Content>
        </Header>
    )
}

export default HeaderUser