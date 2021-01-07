import unsplash from '../index'

const Collection = async (collectionId) => {
    const data = await unsplash.collections.get({collectionId})
    return data
}
const CollectionPhoto = async (collectionId, perPage = 20, page = 1) => {
    const data = await unsplash.collections.getPhotos({collectionId, perPage, page})
    return data
}
const CollectionsUser = async (username) => {
    const data = await unsplash.users.getCollections({username})
    return data
}

export {
    Collection,
    CollectionsUser,
    CollectionPhoto
}