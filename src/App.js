import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true} component={ProductListing}/>
          <Route path='/product/:productId'  component={ProductDetail}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
