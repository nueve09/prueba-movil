import { useDispatch } from "react-redux"
import { setLogOut } from "../store/slices/user/userSlice";
import { resetTaskState } from "../store/slices/task/taskSlice";

export const useLogout = () => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(resetTaskState());
        dispatch(setLogOut())};

    return {
        logout
    }
}