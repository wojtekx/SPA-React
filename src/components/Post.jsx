import React , { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
  
    customReturn = () => {
        this.props.history.push('/');
    }

    render(){
        const icon = this.props.post.list[0].weather[0].icon
         
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center blue-text">
                    {this.props.post.city.name}
                    <img className="weather-icon" src={`http://openweathermap.org/img/w/${icon}.png`} alt="ikona"/>
                </h4>
               <div className="center desc">
                    <p>Temp: {Math.round(this.props.post.list[0].main.temp)}°C</p>
                    <p>humidity: {Math.round(this.props.post.list[0].main.humidity)} %</p>
                    <p>pressure: {Math.round(this.props.post.list[0].main.pressure)} Hpa</p>
                    <p>wind: {Math.round(this.props.post.list[0].wind.speed)} m/s</p>
               </div>
                <div className="center flex">
                    <button className="btn blue" onClick={this.customReturn}>
                        Return
                    </button>
                </div>
            </div>
        ) : 
            <div className="canter">Loading posts ...</div>
       
        return(
            <div className="container">
                <h4>{post} </h4>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
   let id = Number(ownProps.match.params.post_id);
   return{
       post: state.posts.find(post => post.city.id === id )
   }
}



export default connect(mapStateToProps)(Post)