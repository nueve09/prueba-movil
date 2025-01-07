import { useDispatch } from "react-redux"
import { setLogOut } from "../store/slices/user/userSlice";

export const useLogout = () => {
    const dispatch = useDispatch();

    const logout = () => dispatch(setLogOut());

    return {
        logout
    }
}