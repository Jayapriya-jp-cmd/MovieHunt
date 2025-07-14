import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
// /import './index.css';/ 
import './App.css';
// import { Student } from './Components/Student.jsx'
// import { Arraysam } from './Components/Arraysam.jsx';
// import { UserCard } from './UserCard.jsx';
// import './Qrcode.css';
// import { Qrcode } from './Qrcode';
// import './Advise.css';
import App from './App.jsx';
import CartItem from './CartItem.jsx';
import RegForm from './RegForm.jsx';
import Advise from './Advise.jsx';
import Digital from './Digital.jsx';
import Scrolltop from './Components/Scrolltop.jsx';
// import './Digital.css';
function app(){
  const items=[
    {id:1, name: "h2"},
    {id:2, name: "h3"}
  ];
  
}
const handleclick=()=>{
  alert("button clicked");
};

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //  {/* <Student name="rajesh" age={23} ismarried={true} />
  //  <Student name="kamal" age={30} ismarried={true} />
  //  <childCom>
  //   <p> this is para 1</p>
  //   <p> this is para 2</p>
  //   <p> this is para 3</p>
  //  </childCom>
  //  <Arraysam color="green" /> */}
  //  {/* <UserCard/> */}
  //  {/* <Qrcode /> */}
  // {/* <CartItem/> */}
  //  {/* <RegForm/> */}
  //  {/* <Advise /> */}
  //  {/* <Digital/> */}
  //  <App/>

  // </StrictMode>,
  <BrowserRouter>
  <Scrolltop/>
  <App />
  </BrowserRouter>
)
