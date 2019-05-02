const defaultState = {
    user: {
        userName: 'User Name',
        password: 'abcdefgh'
    }
}

function user(state = defaultState, {type, payload}) {
    switch (type) {
        case 'LOAD_USER_NAME': {
            return {...state, 
                user:{
                    ...state.user,
                    userName: payload
                }}
        }
        case 'LOAD_USER_PASS': {
            return {...state,
                user: {
                    ...state.user,
                    password: payload
                }
            }
        }
        default: {
            return state;
        }
    }
}

export default user;
