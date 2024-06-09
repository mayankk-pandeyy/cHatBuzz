import './App.css';
import { Route} from 'react-router-dom/cjs/react-router-dom.min';

import Home from './components/Home';
import Chat from './components/Chat';


function App() {
  return (
    <div>
        <Route path="/" component={Home} exact/>
        <Route path="/chats" component={Chat}/>
    </div>
  );
}

export default App;
