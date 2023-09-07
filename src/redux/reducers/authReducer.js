import { CREATE_NEW_USER, RESET_PASSWORD, VERIFY_PASSWORD, FOREGT_PASSWORD, LOGIN_USER, GET_CURERNT_USER,EDIT_CURERNT_USER,CHANGE_PASSWORD } from '../type'

const inital = {
    createUser: [],
    loginUser: [],
    currentUser: [],
    editCurrentUser:[],
    forgetPassword: [],
    verifyPassword: [],
    resetPassword: [],
    changePassword: [],
    loading: true,
}
const authReducer = (state = inital, action) => {
    switch (action.type) {
        case CREATE_NEW_USER:
            return {
                ...state,
                createUser: action.payload,
            }
        case LOGIN_USER:
            return {
                ...state,
                loginUser: action.payload,
            }
        case GET_CURERNT_USER:
            return {
                ...state,
                currentUser: action.payload,
            }
            case EDIT_CURERNT_USER:
            return {
                ...state,
                editCurrentUser: action.payload,
            }
        case FOREGT_PASSWORD:
            return {
                ...state,
                forgetPassword: action.payload,
            }
        case VERIFY_PASSWORD:
            return {
                ...state,
                verifyPassword: action.payload,
            }
        case RESET_PASSWORD:
            return {
                ...state,
                resetPassword: action.payload,
            }
        case CHANGE_PASSWORD:
            return {
                ...state,
                changePassword: action.payload,
            }
        default:
            return state;
    }
}
export default authReducer