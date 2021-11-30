import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import Note from './pages/Note/Note';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";



export default class App extends React.Component  {
    render(){
      return (
        <div>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/note" element={<Note />} />
        </Routes>
        </div>
      )
    }
  }