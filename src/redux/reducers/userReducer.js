import { CREATE_NEW_ADMIN_USER,GET_ALL_USERS,GET_SPECIFIC_USER,UPDATE_USER_ADMIN,DELETE_USER,GET_ERROR } from '../type'

const inital = {
    users: [],
    allusers: [],
    oneUser: [],
    deleteUsers: [],
    updateUsers: [],
    loading: true,
}
const usersReducer = (state = inital, action) => {
    switch (action.type) {
        case CREATE_NEW_ADMIN_USER:
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        case GET_ALL_USERS:
            return {
                ...state,
                allusers: action.payload,
                loading: false,
            }
        case GET_SPECIFIC_USER:
            return {
                oneUser: action.payload,
                loading: false,
            }
        
        case DELETE_USER:
            return {
                ...state,
                deleteUsers: action.payload,
                loading: false,
            }
        case UPDATE_USER_ADMIN:
            return {
                ...state,
                updateUsers: action.payload,
                loading: false,
            }
        case GET_ERROR:
            return {
                loading: true,
                users: action.payload,
            }
        default:
            return state;
    }
}
export default usersReducer