import { Comp1 } from './Comp1';
import { Comp2 } from './Comp2';
import Cal from './Cal';
import To from './To';
import { Routes,Route} from 'react-router-dom';
import './App.css';
import Demo from './Demo';
//import { Fetch } from './Fetch';
import { Com } from './Com';
import { Form } from './Form';

import { createContext,useState } from 'react';
import { Contest } from './Contest';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



const F= createContext()
function App() {

  const [data,setdata]=useState(1)

    const may=()=>{ 
        setdata(data+1)
    }
  

  return (
    <div className="App"> 
    
    
  
      

             <Demo/>
            
        <Routes>
             <Route path="/about" element ={ <Comp1/>} />
              <Route path="/con" element ={ <Comp2/>} />
              <Route path="/cal" element ={ <Cal/>} />
              <Route path="/todo" element ={ <To/>} />
              <Route path="/fetch" element ={ <Com/>} />
              <Route path="/form" element ={ <Form/>} />
      
       </Routes>
     
       <F.Provider value={{may,data}}>
         <Contest   />
       </F.Provider>
       <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>


 
       
    
     

      

 
       
  
   
   
 
    
   
     
    </div>
  );
}

export default App;
export { F} ;
