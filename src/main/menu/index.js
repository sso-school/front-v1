import { styled } from '@stitches/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MenuDiv = styled('div', {
  position: 'fixed',
  bottom: 0,
  left: 0,
  padding: '0 10px',

  width: 'calc(100vw - 20px)',
  height: '75px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  boxShadow: '0px -2px 20px rgba(0, 0, 0, 0.15)',
  zIndex: 1
});

const Button = styled('button', {
  background: 'rgba(0, 0, 0 ,0)',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '-webkit-tap-highlight-color': 'transparent',

  '&:focus': {
    outline: 'none'
  }

});

const Icon = styled('img', {
  width: '25px',
  height: '25px',
  variants: {
    isFocused: {
      "1": {
        filter: 'grayScale(0%)'
      },
      "0": {
        filter: 'grayScale(100%)',
        // '&:hover': {
        //   filter: 'grayScale(60%)'
        // },
        '&:active': {
          filter: 'grayScale(0%)'
        }
      }
    }
  },
  defaultVariants: {
    isFocused: '0'
  }
});


const MenuButton = (prop) => {
  const navigate = useNavigate();
  const { icon, isFocused, path } = prop;
  return (
    <Button onClick={() => {
      navigate(String(path));
    }}>
      <Icon src={`/icon/${icon}.svg`} alt="icon" isFocused={isFocused ?? 0} />
    </Button>
  )
}

let menu = [
  { path: '/', icon: 'home', isFocused: 0 },
  { path: '/social', icon: 'social', isFocused: 0 },
  { path: '/chat', icon: 'chat', isFocused: 0 },
  { path: '/myPage', icon: 'myPage', isFocused: 0 },
  { path: '/other', icon: 'other', isFocused: 0 }
];

const setIconColor = () => {
  const locate = window.location.pathname.split('/')[1];
  for(const i in menu){
    const e = menu[i];
    if(e.path === '/' + locate) e.isFocused = 1;
  }
}

const Menu = () => {
  setIconColor();
  return (
    <MenuDiv className="menu">
      {
        menu.map((item, index) => {
          return (
            <MenuButton
              key={index}
              path={item.path}
              icon={item.icon}
              isFocused={item.isFocused}
              // states={[menu, setMenu]}
            />
          )
        })
      }
    </MenuDiv>
  )
}

export default Menu;