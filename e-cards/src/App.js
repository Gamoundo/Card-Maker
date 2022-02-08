
import './App.css';
import { useState } from 'react';
import { useRoutes } from "react-router-dom"
import Register from './Register';
import Login from './Login';
import { useNavigate } from "react-router-dom";
import Home from './Home';
import Cards from './Cards';
import Navbar from './Navbar';
import Card from './Card';


function App() {

  let location = window.location
  const navigate = useNavigate();
  const [uname,setuname] =useState(
    ""
  )

  const [cardInfo, setCardInfo] = useState(
    {
        pic: "",
        recipient: "",
        sender: "",
        message: "",
        occasion: ""
    }

)

const register = () => {
  navigate('/register')
}

const login = () => {
  navigate('/login')
}

  const changename = (name) => {
    setuname(name)
}
const routes = useRoutes(
  [{ path: '/', element: <Home  name={uname} setCardInfo={setCardInfo}/> },
  { path: '/card', element: <Card  card={cardInfo}/> },
  { path: '/register', element: <Register  changename={changename}/> },
  { path: '/login', element: <Login /> },
  { path: '/cards', element: <Cards /> }
])
  return (
    

<div className="App">
      <h1>NJoy</h1>
        <div>
          {uname !== '' && <Navbar />}
        {(location.pathname === '/'  && uname === "") && <button onClick={register}> Signup?</button>}
        {(location.pathname === '/'  && uname === "") && <button onClick={login}> Login?</button>}
        </div>
      {routes}
      </div>
      
      // <Routes>
      //   <Route path='/' element={<App />} />
      //   <Route path='/login' element={<Login setName={changename}/>} />
      //   <Route path='/register' element={<Register setName={changename}/>} />
      // </Routes>
    
      
      
    
    
  );
}

export default App;
