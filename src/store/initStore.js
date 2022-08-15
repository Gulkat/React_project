import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import { persistReducer, createMigrate, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middlewareList = [];
const middlewareEnhancer = applyMiddleware(...middlewareList);

const enhancersList = [];
if (window.__REDUX_DEVTOOLS_EXTENSION__) enhancersList.push(window.__REDUX_DEVTOOLS_EXTENSION__());
const composedEnhancers = compose(middlewareEnhancer, ...enhancersList);

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
    // migrate: createMigrate({
    //     0:(state) => {
    //         return {...state}
    //     },
    // }),

};

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedRootReducer, composedEnhancers);

export const persistor = persistStore(store);