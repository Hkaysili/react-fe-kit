import { createElement } from 'react';
import './style.scss';   

function App() { 
  
  const todos = ['Todo1', 'Todo2', 'Todo3'];
  const person = {
    name: "Harun Veli",
    surname: "KAYSILI",
    title:"Senior",
    job: "Frontend Developer"
  }
 
  {/*  ******* JSX yerine kulllanım  --- createElement() ************ */}
  {/*
  const name = createElement('h1', null, 'Harun Veli KAYSILI')
  const ul = createElement('ul', null, todos.map(todo => createElement('li',null,todo)))
  const button = createElement('button', { 
    className:'infoBtn'
  }, 'Buton texti')

  return createElement('div',{
    className: 'test',
    id:"main"
  }, name, ul, button) 
  */}
  

  const infoAlert = () => {
    alert('info!')
  }
  const Button = (props) => {
    return <button>{props.text}</button>
  }

  return (
     <div id="main" className='test'>
      {/* ********  Örnek JS  kullanımı için { .... }  ************ */}
       <h1 style={{color:'#fff', backgroundColor:'darkred', textAlign:'center', padding:'4px 0'}} tabIndex="3">
        {`${person.name} ${person.surname} - ${person.title.toUpperCase()} ${person.job}`}
       </h1>  
       <ul> 
         {todos.map((todo, index) => (
           <li key={index}>{todo}</li>
         ))}
       </ul>
       <label htmlFor='search' tabIndex="2">Arama</label>
       <input type="text" id='search' tabIndex="1" />

       <button onClick={()=>window.location.reload()}>Sayfayı Yenile</button>
       <button onClick={() => infoAlert()} className="infoBtn">Info</button>
       <Button text="Info"/>
     </div> 
  ); 
}

export default App;
