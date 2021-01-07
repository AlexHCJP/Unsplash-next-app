import { User } from "../../src/api/User";
import { NextPageContext } from "next";
import ListImages from "../../src/components/ListImages";
import { PhotosUser } from "../../src/api/Photo";
import HeaderUser from "../../src/components/Header/HeaderUser";
import { Menu } from "semantic-ui-react";
import React from 'react'

interface UserComponentState {
    active: string,
    photos: any,
    user: any
}

class UserComponent extends React.Component<{}, UserComponentState> {
    constructor(props){
        super(props)
        this.state = {
            active: "Photos",
            photos: {
                page: 1,
                photos: [],
                total: 0
            },
            user: props.user
        }
        this.handleItemClick = this.handleItemClick.bind(this);
        this.fetchPhoto = this.fetchPhoto.bind(this);
    }

    static async getInitialProps(ctx: NextPageContext) {
        const user = await User(ctx.query.username);
        return {user: user.response};
    }

    async fetchPhoto(callback){
        const {user, photos} = this.state;
        if(photos.photos.length != photos.total || ! photos.total){
            const data = await PhotosUser(user.username, 30, photos.page).finally(callback);
            this.setState({ photos: { 
                photos: [...photos.photos, ...data.response.results], 
                page: photos.page + 1,
                total: data.response.total
            }})
        }
        
    }

    handleItemClick = (e, { name }) => {
        this.setState({active:name})
    }

    render () {
        const {user, photos, active} = this.state
        const menuItems = [
            {name: "Photos", content: <ListImages key={1} listImage={photos.photos} callbackScrollCenter={this.fetchPhoto}/>},
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