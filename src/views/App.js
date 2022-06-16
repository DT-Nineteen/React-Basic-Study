import logo from './logo.svg';
import './App.scss';
import MyComponent from './Examples/MyComponent';
import ListTodo from './Todos/ListTodo'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Color from './HOC/Color';
import User from './Users/User';
import DetailUser from './Users/DetailUser';

import Nav from './Nav/Nav.js'
import Home from './Nav/Home'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


let App = () => {
  return (
    <BrowserRouter>
      <div className="App">

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/job">
              <MyComponent />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/user" exact>
              <User />
            </Route>
            <Route path="/user/:id" >
              <DetailUser />
            </Route>
          </Switch>



          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {/* Same as */}
          <ToastContainer />


        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
