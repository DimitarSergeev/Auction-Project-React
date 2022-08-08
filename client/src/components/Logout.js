import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';
import * as authService from '../services/authService';

export const Logout = () => {
    const navigate = useNavigate();
    const { userInfo, userLogout } = useContext(AuthContext)

    useEffect(() => {
        try {
            authService.logout(userInfo.token)
            userLogout()
            navigate('/')
        } catch (error) {
            navigate('/')
        }
    })


    return null

}