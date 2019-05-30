import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';
import { helloSaga } from '../sagas';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(createSagaMiddleware(helloSaga)))
);

export default store;