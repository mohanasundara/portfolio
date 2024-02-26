 
import './App.css';
import Navbar from './Navbar/Navbar';
import {BrowserRouter ,Routes,Route}  from 'react-router-dom'
import Home from './padge/Home';
import Technicalskills from './padge/Technicalskills';
import MyProject from './padge/MyProject';
import Contacts from './Contacts';
 
function App() { 
  
  
   
  return    <div  >
      
      
        <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/technicalskills' element={<Technicalskills/>}/>
          <Route path='/myProject' element={<MyProject/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
        </BrowserRouter>

        
        
    </div>
  
}

export default App;
