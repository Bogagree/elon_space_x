
const initialState: initialStateType = {
    isLogged: false,
}

export const authReducer = (state = initialState, action: AuthActionType): initialStateType => {
    switch (action.type) {
        case 'AUTH/SET-IS-LOGGED-IN':
            return {...state, ...action.payload};
        default:
            return state
    }
};

//Actions
export const setIsLogged = (isLogged: boolean) => ({type: 'AUTH/SET-IS-LOGGED-IN', payload: {isLogged}} as const);

// Types

export type AuthActionType = ReturnType<typeof setIsLogged>

export type initialStateType = {
    isLogged: boolean
}