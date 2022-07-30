import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from './ducks/reducers';
import Todo from './todo';

const store = createStore(reducer, applyMiddleware(logger));

const App = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
};

export default App;
