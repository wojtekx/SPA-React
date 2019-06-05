import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../css/Home.css';
import { connect } from 'react-redux';
import { addPost, deletePost } from '../actions/postActions';
import axios from 'axios';


class Home extends Component {
    componentDidMount(){
        this.changeColor()
    }
    changeColor = () => {
        document.querySelectorAll('.card-content p').forEach(el => {
            let item = el.textContent;
            let convertItem = Number(item.slice(0,(item.length -3)))
            if(convertItem >= 25) el.style = "color:red"
            else if(convertItem >= 18) el.style = "color:orange"
            else el.style = "color:blue"
       })
    }
    state = {
        content:'',
        api: 'a5fbabc049476ee882170752effe1fbc'
    }
    addModal = () => {
        document.querySelector('form span').innerHTML="<div id='modal'>Nie ma takiego miasta</div>"
    }
    handleChange = (e) => {
        this.setState({content:e.target.value})
    } 
    handleSubmit = (e) => {
        e.preventDefault();
        document.querySelector('form span').innerHTML="";
        
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.content}&units=metric&appid=${this.state.api}`)
        .then ( res=> this.props.addPost(res.data) , error => this.addModal())
        this.setState({content:''})
        this.changeColor()
    }
    handleClick = (id) => {
        this.props.deletePost(id);
    }
       render(){
           const { posts } = this.props;
          
           const postList = posts.length ? (
               posts.map(post => {
                const icon = post.list[0].weather[0].icon
                   return (
                       <div className="post card home" key={post.city.id}>
                           <button className="btn red right" onClick={() => {this.handleClick(post.city.id)}}>
                                X
                            </button>
                            <Link to={`/${post.city.id}`}>
                           <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="post"/>
                           <div className="card-content flow-text flex">
                                <span className="card-title red-text center ">{post.city.name}</span>
                                <p className="center">{Math.round(post.list[0].main.temp)}°C </p> 
                            </div>
                            </Link>
                            
                        </div>
                   )
               } )
           ) : (
               <div>
                   No post yet
                </div>
           )
        return(
            <div className="container home">
                <h4 className="center">Weather App</h4>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="input">Wpisz nazwę miasta</label>
                    <span></span>
                    <div className="flex">
                        <input type="text" name="input" value={this.state.content} onChange={this.handleChange}/>
                        <button className="btn green">Dodaj</button>
                    </div>
                </form>
                {postList}
            </div>
        )
       }
}
const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        addPost: id => { dispatch( addPost(id) ) },
        deletePost: id => { dispatch( deletePost(id) ) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)