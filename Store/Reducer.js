export const initialState = {
    user : null,
    cookie_token : null,
    loginRef : null,
    profileData : null,
    searchDetails : null,
    name : null,
    verifiedProperties : null
}


export const actionTypes = {
    set_user : 'set_user',
    log_out : 'log_out',
    set_cookie_token : 'set_cookie_token',
    login_ref : 'login_ref',
    get_account_details : 'get_account_details',
    set_search_details : 'set_search_details',
    set_Verified_Properties : 'set_Verified_Properties'
}

const reducer = (state, action) =>{
    // console.log(action)
    switch (action.type) {
        case actionTypes.set_user :
            return {
                ...state, 
                user : action.user
            }
        case actionTypes.log_out :
            return {
                ...state, 
                cookie_token : null,
                profileData : null,
            }
        case actionTypes.set_cookie_token :
            return {
                ...state, 
                cookie_token : action.cookie_token
            }
        case actionTypes.login_ref :
            return {
                ...state, 
                loginRef : action.ref
            }
        case actionTypes.get_account_details :
            return {
                ...state, 
                profileData : action.profileData
            }
        case actionTypes.set_search_details :
            return {
                ...state, 
                searchDetails : action.searchDetails
            }
        default:
            return state
    }
} 

export default reducer