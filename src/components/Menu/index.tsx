import { ReactElement } from 'react'
import { Menu, Icon, SemanticICONS } from 'semantic-ui-react'
import { useRouter } from 'next/router'
import { SemanticCOLORS } from 'semantic-ui-react/dist/commonjs/generic'

interface ListMenuItemProps {
    name: String | ReactElement,
    to: String,
    color: SemanticCOLORS
}
interface MenuItemProps {
    icon?: SemanticICONS
    name: String,
}
const list: Array<ListMenuItemProps> = [
    {name: <MenuItem icon="image" name="Home"/>, to: "/", color: 'red'},
    {name: "About", to: "/about", color: "blue"}
]
function MenuItem ({icon, name}: MenuItemProps){
    return (
        <div>
            <Icon name={icon}/>{name}
        </div>
    )
}
const MenuApp = () => {
    const router = useRouter()
    const handleClick = (href) => {
        router.push(href)
    }
    return (
            <Menu inverted fixed="top">
                {list.map((val, ind)=>{
                    return <Menu.Item key={ind}
                        active={router.pathname == val.to}
                        color={val.color}
                        onClick={ ()=>{
                                handleClick(val.to)
                            }}>
                            {val.name}
                    </Menu.Item>
                })}
            </Menu>
    )
    
}
export default MenuApp