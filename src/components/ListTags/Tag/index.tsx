import { List, Segment } from "semantic-ui-react"
import Link from "next/link"

const Tag = ({tag}) => {
    return (
        <List.Item>
            <Link href={`/s/${tag.title}`}>
                <div>
                    <Segment size="small">
                        {tag.title}
                    </Segment>
                </div>
            </Link>
        </List.Item>
    )
}

export default Tag