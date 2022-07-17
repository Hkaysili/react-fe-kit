import { useEffect } from 'react';
import logo from './logo.svg'; 

function App() {
  useEffect(()=>{
    if(process.env.NODE_ENV === 'production'){
      // analytic'i bilgilendir..
    }
  }, [])
  return (
    <div className="App">
       <h3>{process.env.NODE_ENV}</h3>
       <span>My Api URL : {process.env.REACT_APP_API_URL}</span>
       {process.env.NODE_ENV === 'production' && (
         <>
          <img src={logo} alt="logo" /> 
         </>
       )}
    </div>
  ); 
}

export default App;
