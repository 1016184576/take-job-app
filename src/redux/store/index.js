import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import reducer from '../reducers';
//import createSagaMiddleware from 'redux-saga';
//import  rootSaga  from '../sagas';
//const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
};

const persistReducerNew = persistReducer(persistConfig, reducer); 



export const store = createStore(
  persistReducerNew,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store); 

//sagaMiddleware.run(rootSaga)

//export default store;