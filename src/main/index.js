import { styled } from '@stitches/react';
import { Outlet } from 'react-router-dom';

import Footer from './footer';

const Main = () => {
  const Main = styled('div', {
    padding: '0 30px',
    height: '100%',
    width: 'calc(100% - 60px)'
  });

  return (
    <>
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}

export default Main;