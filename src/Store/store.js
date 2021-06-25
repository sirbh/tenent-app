import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from './auth'
import modalReducer from './modal'
import productsReducer from './products'
import thunk from 'redux-thunk'
import modal from './modal'


const reducer = combineReducers({
    authenticate:authReducer,
    modal:modalReducer,
    products:productsReducer
})

const persistConfig = {
    key:'root',
    storage,
    blacklist:[modal]
}

const persistedReducer = persistReducer(persistConfig,reducer)


export default configureStore({
    reducer:persistedReducer,
    middleware:[thunk]
})