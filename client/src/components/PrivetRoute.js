
import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"

export const PrivetRoute = () => {

    const {userInfo} = useContext(AuthContext)

    if (!userInfo.token) {
        return <Navigate to='/auth/login' replace />
    }

return <Outlet />

}