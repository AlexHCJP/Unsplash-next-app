import unsplash from '../index'

const User = async (username) => {
    const data = await unsplash.users.get({username})
    return data
}
export {
    User
}