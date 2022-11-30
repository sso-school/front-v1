import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './main';

import Home from './main/home';
import Chat from './main/chat';
import MyPage from './main/myPage';
import Social from './main/social';
import Other from './main/other';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="" element={<Home />} />
            <Route path="chat" element={<Chat />} />
            <Route path="myPage" element={<MyPage />} />
            <Route path="social" element={<Social />} />
            <Route path="other" element={<Other />} />
          </Route>

          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
