import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store';
import Menu from './component/menu';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
       <Menu></Menu>
      </div>
    </Provider>
  );
}

export default App;
