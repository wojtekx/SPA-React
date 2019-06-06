import React, { useEffect, useState } from 'react';
import Template from './Template'

import Axios from 'axios';

const getData = async() => {
    try{
        return await Axios.get('https://randomuser.me/api/')
        .then(response => response.data)
        .then( data => data.results)
    } catch (error) {
        console.log(error)
    }
}

const Main =  () => {
   const [data, setData] = useState(null);

   useEffect(()=>{
    getData().then(setData)
   },[])
 return data ? <Template data={data} /> : "Loading...";
}
export default Main