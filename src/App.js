import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import _ from 'lodash';
import { styled } from '@stitches/react';

import Main from './main';

import Home from './main/home';
import Chat from './main/chat';
import MyPage from './main/myPage';
import Department from './main/myPage/department';
import Social from './main/social';
import Other from './main/other';

const App = () => {
  const Box = styled('div', {
    height: '100vh',
    margin: '0 0 300px 0',
    overflow: 'hidden',
    overflowY: 'auto',
  });
  return (
    <Box className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="" element={<Home />} />
            <Route path="chat" element={<Chat />} />
            <Route path="myPage" element={<MyPage />} />
            <Route path="myPage/department" element={<Department />} />
            <Route path="social" element={<Social />} />
            <Route path="other" element={<Other />} />
          </Route>

          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
