import unsplash from '../index'

const Photo = async (photoId) => {
    const data = await unsplash.photos.get({photoId})
    return data
}
const Photos = async (perPage = 20, page = 1) => {
    const data = await unsplash.photos.list({perPage, page})
    return data
}
const PhotosUser = async (username, perPage = 20, page = 1) => {
    const data = await unsplash.users.getPhotos({username, perPage, page})
    return data
}
const LikesUser = async (username, perPage = 20, page = 1) => {
    const data = await unsplash.users.getLikes({username, perPage, page})
    return data
}



export {
    Photo,
    Photos,
    PhotosUser,
    LikesUser
}