import { Icon, Input } from "semantic-ui-react"
import { useState } from "react"
import { useRouter } from "next/router"

const Search = () => {
    const router = useRouter();
    const handleChange = (ev) => {
        setQuerySearch(ev.target.value)
    }
    const [querySearch, setQuerySearch] = useState(router.query.query)
    const handleSearch = () =>  {
        router.replace(`/s/${querySearch}`)
            .then(()=>{
                router.reload()
            })
    }
    return (
        <Input onChange={handleChange} placeholder='Search...' icon>
            <Icon name='search' 
                inverted circular link 
                onClick={handleSearch}/>
            <input value={querySearch} onChange={handleChange}/>
        </Input>
    )
}

export default Search