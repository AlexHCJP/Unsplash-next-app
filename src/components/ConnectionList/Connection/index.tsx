import { SemanticICONS, SemanticCOLORS } from "semantic-ui-react"

export interface ConnectionProps {
    url: string,
    icon: SemanticICONS,
    color?:
        | SemanticCOLORS
        | 'facebook'
        | 'google plus'
        | 'vk'
        | 'twitter'
        | 'linkedin'
        | 'instagram'
        | 'youtube'
}

const Connection = ({color, icon, url}: ConnectionProps) => {
    return (
        <a href={url} className={`ui ${color} circular icon button`}>
            <i aria-hidden="true" className={`${icon} icon`}/>
        </a>
    )
}

export default Connection