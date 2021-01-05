import { NextPageContext } from "next"
import { Collection } from "../../src/api/Collection"
import ListImages from "../../src/components/ListImages"

function Id({responce}){
    console.log( responce)
    return (
        <div>
            <ListImages listImage={responce.results}/>
        </div>
    )
}

Id.getInitialProps = async(ctx: NextPageContext) => {
   const data = await Collection(ctx.query.id);
   return { responce: data.response}
}

export default Id