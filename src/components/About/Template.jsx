import React from "react";
import '../../css/Template.css';

const Template = data => {
  const firstStyle = {
    color: '#0cdb0c',
    borderTop: '2px solid #0cdb0c',
  }
  const capitalize = {
    textTransform: 'capitalize',
  }
  const option = e => {
    document.querySelectorAll('i').forEach(e=> e.style="color:white;borderTop: none;")
    const value = e.target.dataset.value
    const title = e.target.dataset.title
    e.target.style='color:#0cdb0c; border-top: 2px solid #0cdb0c;'
   
    document.querySelector('#element').innerHTML = `<div><b>${title}</b><p>${value}</p></div>`
    if(title ==="My name is:"){
      document.querySelector('#element p').style.textTransform = 'capitalize';
    }
  }
 
return(
    <div className="template">
      <section className="image">
        <img src={data.data[0].picture.large} alt="userImg"/>
      </section>
      <section id="element">
      <div><b>My name is:</b><p style={capitalize}>{data.data[0].name.first+" "+data.data[0].name.last}</p></div>
      </section>
      <section  className="description">
        <i className="fas fa-user-alt" style={firstStyle} onMouseEnter={option} data-value={data.data[0].name.first+" "+data.data[0].name.last} data-title="My name is:"></i>
        <i className="fas fa-birthday-cake"  onMouseEnter={option} data-value={data.data[0].dob.date.slice(0,10)} data-title="My birthday:"></i>
        <i className="fas fa-envelope-open-text" onMouseEnter={option} data-value={data.data[0].email} data-title='Email:'></i>
        <i className="fas fa-phone-volume" onMouseEnter={option} data-value={data.data[0].phone} data-title='Telephone:'> </i>
        <i className="fas fa-key" onMouseEnter={option} data-value={data.data[0].login.password} data-title='Password:'></i>
      </section> 
  </div>
  )
}
  
  


export default Template;