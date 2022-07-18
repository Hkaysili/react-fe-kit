import './tailwind.css';
import './style.scss';   
import Button from './components/Button';  
import Tab from './components/Tab';
import { useState } from 'react';

function App() {   
  const [activeTab, setActiveTab] = useState(1) 
  return (
     <div id="main" className='test'>
       {/* ***** Tab  -  component kullanımı  ******* */}
       {/*-------------------------------------
      <div style={{padding:"10px"}}>
            <button onClick={()=>setActiveTab(2)}>
              Aktif Tabı Değiştir
            </button>
            <Tab activeTab={activeTab} onChange={tabIndex => console.log('tabIndex değişti', tabIndex)}>
              <Tab.Panel title="Profil">1.Tab</Tab.Panel>
              <Tab.Panel title="Hakkında">2.Tab</Tab.Panel>
              <Tab.Panel title="Ayarlar">3.Tab</Tab.Panel>
            </Tab>
        </div>
       */}

       
       {/* ***** Button - component kullanımı  ******* */}
       <div style={{padding:"5px"}}>
          <Button text="Open"/>
          <Button text="Success" variant="success"/>
          <Button text="Warning" variant="warning"/>
          <Button text="Error" variant="danger"/>
       </div>
     </div> 
  ); 
}

export default App;
