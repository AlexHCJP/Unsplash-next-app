import { User } from "../../src/api/User";
import { NextPageContext } from "next";
import ListImages from "../../src/components/ListImages";
import { PhotosUser } from "../../src/api/Photo";
import HeaderUser from "../../src/components/Header/HeaderUser";
import { Menu } from "semantic-ui-react";
import React from 'react'

interface UserComponentState {
    active: string,
    photos: Array<any>,
    user: Object
}

class UserComponent extends React.Component<{}, UserComponentState> {
    constructor(props){
        super(props)
        this.state = {
            active: "Photos",
            photos: props.photos,
            user: props.user
        }
        this.handleItemClick = this.handleItemClick.bind(this);
    }
    static async getInitialProps(ctx: NextPageContext) {
        const user = await User(ctx.query.username);
        const photos = await PhotosUser(ctx.query.username);
        return {user: user.response, photos: photos.response.results};
    }
    handleItemClick = (e, { name }) => {
        this.setState({active:name})
    }

    render () {
        const {user, photos, active} = this.state
        const menuItems = [
            {name: "Photos", content: <ListImages key={1} listImage={photos}/>},
            {name: "Likes", content: null},
            {name: "Collections", content: null}
        ]
        return (
            <div>
                <HeaderUser user={user}/>
                {/* <Menu tabular>
                    {menuItems.map((item)=>{
                        return <Menu.Item name={item.name} 
                            active={active === item.name} 
                            onClick={this.handleItemClick}/>
                    })}
                </Menu> */}
                {menuItems.map((item)=>{
                    return (item.name === active)? item.content: null 
                })}
            </div>
        )
    }
}

export default UserComponent