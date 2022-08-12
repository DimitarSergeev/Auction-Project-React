// import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { AuthContext } from './contexts/AuthContext'
import { OfferContext } from './contexts/OffertContext'

import { useLocalStorage } from './hooks/userLocalStorage'

import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Register } from './components/Register/Register'
import { Login } from './components/Login/Login'
import { Create } from './components/create/Create'
import { Logout } from './components/Logout'
import { Home } from './components/home/Home'
import { Auction } from './components/auction/Auction'
import { DetailsPage } from './components/details/DetailsPage'
import { EditItem } from './components/edit/EditItem'
import { NotFound } from './components/404'
import { Profile } from './components/profile/Profile'
import { PrivetRoute } from './components/PrivetRoute'

import * as auctionService from './services/auctionService'

function App() {
  const [userInfo, setUserInfo] = useLocalStorage('userInfo', {});
  const [offerts, setOfferts] = useState([])

  const navigate = useNavigate()
  useEffect(() => {

    auctionService.getAll()
      .then(result => {
        setOfferts(result)
      })
      .catch(() => {
        navigate('/404')
      })

  }, [navigate])

  const userLogin = (authData) => {
    setUserInfo(authData);
  };

  const userLogout = () => {
    setUserInfo({});
  };

  return (
    <AuthContext.Provider value={{ userInfo, userLogin, userLogout }}>

      <div className="App">
        <Header userInfo={userInfo}/>
        <OfferContext.Provider value={{offerts}} >
          <main className='main'>
            <Routes>
              <Route element={<PrivetRoute />}>
                
              <Route path='/auth/profile/:userId' element={<Profile userInfo={userInfo}/>}/>
              <Route path='/offer/create' element={<Create userId={userInfo.userId}/>} />
              <Route path='/edit/offer/:offerId' element={<EditItem userId={userInfo.userId}/>} />
              <Route path='/auth/logout' element={<Logout />} />

              </Route>

              <Route path='/404' element={<NotFound />} />
              <Route path='/offer/:offerId/details' element={<DetailsPage userId={userInfo.userId} offerts={offerts}/>} />
              <Route path='/auction' element={<Auction />} />
              <Route path='/' element={<Home />} />
              <Route path='/auth/register' element={<Register />} />
              <Route path='/auth/login' element={<Login />} />
            </Routes>
          </main>
        </OfferContext.Provider>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
