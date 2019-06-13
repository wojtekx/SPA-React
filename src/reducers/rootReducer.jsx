
let initState ={
    posts:[]
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
   if ( action.type === 'ADD_POST' && state.posts !== null ){
     
        let newPosts = [
            ...state.posts,
            action.content
        ]
       const x = state.posts.map(e=> e.city.name == action.content.city.name ? true : false )
        if(x.includes(true)){
            alert('Takie miasto jest już na liście')
        }
        else{
            localStorage.setItem('state',  JSON.stringify(newPosts))
        
        return {
            ...state,
            posts:  newPosts
        } 
        }
            
    } else if (action.type === 'ADD_POST'){
        localStorage.setItem('state',  JSON.stringify([action.content]))
        
        return {
            posts:  action.content
        } 
    }
    const x = JSON.parse(localStorage.getItem('state'))
    return {
        ...state,
        posts: x
    };
}

export default rootReducer;