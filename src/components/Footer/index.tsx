import ConnectionList from "../ConnectionList"
import { ConnectionProps } from "../ConnectionList/Connection"



const connectionList: ConnectionProps[] = [
    { icon: "github", color: "black", url: "https://vk.com/alexbangert"},
    { icon: "vk", color: "vk", url:"https://github.com/AlexHCJP"}
]

function Footer () {
    return (
        <div>
            <ConnectionList data={connectionList}/>
        </div>
    )
}

export default Footer