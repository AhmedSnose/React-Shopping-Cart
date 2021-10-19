import { Route , Switch ,Redirect  } from 'react-router-dom';
import React , {Suspense} from 'react';
import CartProvider from "./store/CartProvider";
// import Home from "./Pages/Home";
import LoadingSpinner from './UI/LoadingSpinner'

// import Product from "./Pages/Product";
// import ProductList from "./Pages/ProductList";
// import Register from "./Pages/Register";
// import Login from "./Pages/Login";
// import Cart from "./Pages/Cart";
// import CartItem from './components/CartItem';
// import NotFound from './Pages/NotFound';


const CartItem = React.lazy(()=> import('./components/CartItem'))
const ProductList = React.lazy(()=> import("./Pages/ProductList"))
const Login = React.lazy(()=> import("./Pages/Login"))
const Register = React.lazy(()=> import("./Pages/Register"))
const NotFound = React.lazy(()=> import('./Pages/NotFound'))
const Home = React.lazy(()=> import('./Pages/Home'))


const App = () => {
  return (
  <CartProvider> 
      <Suspense fallback={
        <div className='centered'>
          <LoadingSpinner />
          {console.log("Lazy")}
        </div>
      }>
        <Switch>

        <Route path="/" exact>
           <Redirect to="/Shopping" />
        </Route>

        <Route path="/Shopping" exact>
         <Home />
        </Route>

        <Route path="/product">
            <ProductList />
        </Route>

        <Route path="/register">
            <Register />
        </Route>

        <Route path="/login">
            <Login />
        </Route>

        <Route path="/Shopping/CartItem" >
           <CartItem />
        </Route>


        
      <Route path="*">
        <NotFound />
      </Route>

        </Switch>

    </Suspense>
  </CartProvider>
  
  );
};

export default App;