import { useEffect } from 'react';
import logo from './logo.svg'; 
import Test from './Test'

/* Styled Component */
import { Title } from './StyledComponents';

/* Bootstrap component*/
import Bootstrap from './Bootstrap'; 

/* Tailwind component */
import Tailwind from './Tailwind';

/* ModuleSass => modüler stillendirme işlemleri */
import styles from './App.module.css';  



function App() {
  useEffect(()=>{
    if(process.env.NODE_ENV === 'production'){
      // analytic'i bilgilendir..
    }
  }, [])
  return (
    <div className={styles.App}>
       {/* StyledComponent Usage */}
       <Title>{process.env.NODE_ENV}</Title>
       <Title theme="darkRed">{process.env.NODE_ENV}</Title>

       <span>My Api URL : {process.env.REACT_APP_API_URL}</span>
       {process.env.NODE_ENV === 'production' && (
         <>
          <img src={logo} alt="logo" /> 
         </>
       )}

       <Test/>
       
       {/* Bootstrap Usage */}
       <Bootstrap/>

       {/* Tailwind Usage */}
       <Tailwind/>
    </div> 
  ); 
}

export default App;
