let initState = {
    posts: [],
}

const rootReducer = (state = initState, action) => {
    
   if ( action.type === 'DELETE_POST'){
       let newPosts = state.posts.filter(post => {
           
           return post.city.id !== action.id
       });
       localStorage.setItem('state',  JSON.stringify(newPosts))
       newPosts = JSON.parse(localStorage.getItem('state'))
       return{
           posts: newPosts
       }
   }
   if ( action.type === 'ADD_POST'){

    const y = [action.content.list[0], action.content.city]
    console.log(y);
    
        let newPosts = [ 
            ...state.posts,
            action.content
        ]
        localStorage.setItem('state',  JSON.stringify(newPosts))
        
        return {
            ...state,
            posts:  newPosts
        }     
    }
    const x = JSON.parse(localStorage.getItem('state'))
    return {
        ...state,
        posts: x
    };
}

export default rootReducer;