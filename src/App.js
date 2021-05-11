import './App.css'
import Header from './container/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductDetail from './container/ProductDetail'
import ProductList from './container/ProductList'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route>404 not Found</Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
