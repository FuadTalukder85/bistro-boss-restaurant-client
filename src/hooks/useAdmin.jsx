import useAuth from "./useAuth";

const useAdmin = () => {
    const {user} = useAuth();
    const token = localStorage.getItem('access-token')
}

export default useAdmin;