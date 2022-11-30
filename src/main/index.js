import { Outlet } from 'react-router-dom';

import Menu from './menu';

const Main = () => {
  return (
    <div className='main'>
      <Outlet />
      <Menu />
    </div>
  )
}

export default Main;