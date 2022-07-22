// import './App.css';
import { Route, Routes } from 'react-router-dom'

import {Header} from './components/Header/Header'
import { Footer} from './components/Footer/Footer'
import { Register} from './components/Register/Register'
import { Login} from './components/Login/Login'

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='main'>
       <Routes>
        <Route path='/auth/register' element={<Register/>} />
        <Route path='/auth/login' element={<Login/>} />
       </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
