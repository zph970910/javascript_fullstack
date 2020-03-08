import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import 'antd/dist/antd'
import Layout from './pages/Layout'

function App () {
  return (
    <Router>
      <Route path="/" component={Layout}></Route>
    </Router>
  )
}

export default App