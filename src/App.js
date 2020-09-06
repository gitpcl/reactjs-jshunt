import React from "react"; // removed , { Component } because it was not being used 
import Routes from "./routes";

import './styles.css'

import Header from './components/Header';
// import Main from "./pages/main"; removed because <Main /> was replaced by <Routes />

const App = () => (
  <div className="App">
      <Header />
      <Routes />
    </div>
);

export default App;
