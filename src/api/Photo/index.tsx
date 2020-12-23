import unsplash from '../index'

const Photo = async (photoId) => {
    const data = await unsplash.photos.get({photoId})
    return data
}
const Photos = async (perPage, page = 1) => {
    const data = await unsplash.photos.list({perPage, page})
    return data
}
export {
    Photo,
    Photos
}