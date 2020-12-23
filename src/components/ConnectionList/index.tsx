import Connection from "./Connection"

const ConnectionList = ({data}) => {
    return (
        <div>
            {data.map((connect, ind) => {
                return (
                    <Connection color={connect.color}
                        key={ind}
                        icon={connect.icon}
                        url={connect.url}/>
                )
            })}
        </div>
    )
}

export default ConnectionList