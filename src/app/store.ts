import {combineReducers, legacy_createStore as createStore} from 'redux';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {cmsReducer} from '../features/Pages/ElonMaskCMS/cms-reducer';

const rootReducer = combineReducers({
    cms: cmsReducer
})

export const store = createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector