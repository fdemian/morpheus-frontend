import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import persistState from 'redux-localstorage';
import rootReducer from './Reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const paths = ["session"];
const config = {'key': 'morpheus'};

//const isProduction = process.env.NODE_ENV === 'production';
//const devtools = !isProduction && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function storeCreator() {
  const middleWareTools = compose(
   applyMiddleware(sagaMiddleware),
   persistState(paths, config)/*,
   devtools*/
  );

  return createStore(rootReducer, middleWareTools);
}

const store = storeCreator();

sagaMiddleware.run(rootSaga, store.dispatch);

export default store;
