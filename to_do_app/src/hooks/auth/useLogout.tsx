import { useDispatch } from "react-redux"
import { resetTaskState } from "../../store/slices/task/taskSlice";
import { setLogOut } from "../../store/slices/user/userSlice";

export const useLogout = () => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(resetTaskState());
        dispatch(setLogOut())};

    return {
        logout
    }
}