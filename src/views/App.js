import logo from './logo.svg';
import './App.scss';
// import MyComponent from './Examples/MyComponent';
import ListTodo from './Todos/ListTodo'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


let App = () => {
  return (
    <div className="App">
      <header className="App-header">


        <img src={logo} className="App-logo" alt="logo" />
        {/* <MyComponent></MyComponent> */}
        <p>Simple Todo App From DT_NINETEEN</p>
        <ListTodo></ListTodo>
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
  );
}

export default App;
