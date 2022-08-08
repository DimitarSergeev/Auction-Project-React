// import './App.css';
import { Route, Routes } from 'react-router-dom'

import { AuthContext } from './contexts/AuthContext'
import { useLocalStorage } from './hooks/userLocalStorage'

import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Register } from './components/Register/Register'
import { Login } from './components/Login/Login'
import { Create } from './components/create/Create'
import { Logout } from './components/Logout'
import { Home } from './components/home/Home'
import { Auction} from './components/auction/Auction'


function App() {
  const [userInfo, setUserInfo] = useLocalStorage('userInfo', {});

  const userLogin = (authData) => {
    setUserInfo(authData);
  };

  const userLogout = () => {
    setUserInfo({});
    console.log(userInfo);
  };

  return (
    <AuthContext.Provider value={{ userInfo, userLogin, userLogout }}>

      <div className="App">
        <Header />
        <main className='main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth/register' element={<Register />} />
            <Route path='/auth/login' element={<Login />} />
            <Route path='/offer/create' element={<Create />} />
            <Route path='/auth/logout' element={<Logout />} />
            <Route path='/auction' element={<Auction />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
