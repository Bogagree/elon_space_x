import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from 'redux';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {cmsReducer} from '../features/Pages/ElonMaskCMS/cms-reducer';
import {authReducer} from '../features/Auth/auth-reducer';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    cms: cmsReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware()))

export type AppRootStateType = ReturnType<typeof rootReducer>

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

// @ts-ignore
window.store = store;