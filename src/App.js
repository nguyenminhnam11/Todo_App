import { Provider } from 'react-redux';
import './App.css';
import Todo from './pages/Todo';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
