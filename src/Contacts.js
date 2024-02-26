import React from 'react';
 import './Contacts.css'
 import Image from './padge/images/c4.webp'
 

function Contacts() {
  return (
    <div> 

<div class="card" >
  
  <div class="card-body">
    
    <div class="card">
  <div class="card-header  bg-success">
  Please Feel Free To Contact Me
  </div>
  <div class="card-body bg-secondary" >
    
     
{/* table contact */}


<table class="table">
  <thead>
    <tr>
      
      <th scope="col">Gmail</th>
      <th scope="col"><a href=''></a>mohanasundaramm400@gmail.com</th>
       
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Watsapp</th>
      <td>6383689002</td>
       
    </tr>
    <tr>
      <th scope="row">Linked in</th>
      <td><a href='https://www.linkedin.com/in/mohana-sundaram-a18960242/' className='linkk'>Click</a></td>
       
    </tr>
    
    <tr>
      <th scope="row">Github</th>
      <td><a href='https://github.com/mohanasundara/tbb'  className='linkk'>Click</a></td>
       
    </tr>


  </tbody>
</table>






  </div>
</div>
   
    <img src={Image} class="card-img-top" alt="..."></img>
  </div>
  
</div>
 
  

 
    </div>
  )
}

export default Contacts