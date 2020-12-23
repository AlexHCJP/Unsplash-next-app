import { User } from "../../src/api/User";
import { NextPageContext } from "next";
import ListImages from "../../src/components/ListImages";

const UserComponent = ({photos}) => {
    console.log(photos)
    return (
        <div>
            <ListImages listImage={photos}/>
        </div>
    )
}

UserComponent.getInitialProps = async (ctx: NextPageContext) => {
    const data = await User(ctx.query.username);
    return data.response;
}

export default UserComponent