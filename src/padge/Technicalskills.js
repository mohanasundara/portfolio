import React from 'react';
import Image from './images/myskill.jpg'
import './Tech.css'

function Technicalskills() {
  return (
    <div>
 
<img src={Image} class="rounded float-end img-fluid" alt="..."></img>

<table class="table tt">
  <thead>
    <tr>
      <th scope="col">Front-end development</th>
      
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Reactjs</td>
    </tr>
    <tr>  
      <td>Html5</td> 
      
    </tr>

    <tr>
      <td > CSS3</td>
    </tr>
    <tr>
      <td > Javascript ES6</td>
    </tr>
    <tr>
      <td > Bootstrap v5.0</td>
    </tr>
    <tr>
      <td >Git and GitHub</td>
    </tr>
    <tr>
      <td > Photoshop</td>
    </tr>
     
  </tbody>
</table>



<table class="table tt">
  <thead>
    <tr>
      <th scope="col">Back-end development</th>
      
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Node.js</td>
    </tr>
    <tr>  
      <td>Express.js</td> 
      
    </tr>

    <tr>
      <td >
MongoDB </td>
    </tr>
    <tr>
      <td >  RESTful API </td>
    </tr>
     
    <tr>
      <td >
Postman</td>
    </tr>
    <tr>
      <td > 
AWS</td>
    </tr>
     
  </tbody>
</table>




    </div>
  )
}

export default Technicalskills