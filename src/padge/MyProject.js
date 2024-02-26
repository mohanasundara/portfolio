import React from 'react'
import Image from './images/myp.jpg'
function MyProject() {
  return (
    <div>
      <img src={Image} class="rounded float-end img-fluid" alt="..."></img>


      <table class="table tt">
  <thead>
    <tr>
      
      <th scope="col">My webapps</th>
      <th scope="col">
        <a href='www.tamilnadu-ebloodbank.com'>www.tamilnadu-ebloodbank.com</a>

      </th>
       
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>Project video</td>
      <td><a href='https://www.linkedin.com/feed/update/urn:li:activity:7164178990293864448/'>tamilnadu-ebloodbank</a></td>
      
    </tr>
    <tr>
      
      <td>Github</td>
      <td><a href='https://github.com/mohanasundara/tbb'>Project code</a></td>
       
    </tr>
     
  </tbody>
</table>

<div></div>

    </div>
  )
}

export default MyProject