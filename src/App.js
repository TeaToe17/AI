import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom';
import './styles.scss'
import Home from './Components/Home';
import Signup from './Components/Signup';
import Signin from './Components/Signin';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/'  index element={<Signin/>} />
        <Route path='signup' element={<Signup/>}/>
        <Route path='signin' element={<Signin/>}/>
        <Route path='home' element={<Home/>}/>  
      </Routes>
    </div>
  );
}

export default App;
