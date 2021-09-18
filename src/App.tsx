import React from "react";
import Home from "./Components/Home";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

function App() {
  return (
    <>
      <Home/>  
      <h1>{process.env.REACT_APP_API_KEY}</h1>
    </>
  );
}

export default App;
