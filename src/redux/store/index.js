import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducers';
//import createSagaMiddleware from 'redux-saga';
//import  rootSaga  from '../sagas';
//const sagaMiddleware = createSagaMiddleware();


export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);


//sagaMiddleware.run(rootSaga)

//export default store;