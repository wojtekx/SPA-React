const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id
    }
}
const addPost = (content) => {
    return {
        type: 'ADD_POST',
        content
    }
}

export {deletePost, addPost}