import { styled } from '@stitches/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MenuDiv = styled('div', {
  position: 'fixed',
  bottom: 0,
  left: 0,
  padding: '0 15px',

  width: 'calc(100vw - 30px)',
  height: '78px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  borderTop: '1.5px solid #e5e5e5',
  // boxShadow: '0px -2px 20px rgba(0, 0, 0, 0.1)',
  zIndex: 1,

  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(20px)',
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
  width: '30px',
  height: '27px',
  objectFit: 'contain',
  variants: {
    isFocused: {
      "1": {
        filter: 'grayScale(0%)'
      },
      "0": {
        filter: 'grayScale(100%)',
        scale: 1,
        '&:hover': {
          filter: 'grayScale(70%)',
          scale: 1.1
        },
        '&:active': {
          filter: 'grayScale(30%)',
          scale: 0.9,
          opacity: '0.5'
        }
      }
    }
  },
  defaultVariants: {
    isFocused: '0'
  }
});

let menuList = [
  { path: '/', icon: 'home', isFocused: 0 },
  { path: '/social', icon: 'social', isFocused: 0 },
  { path: '/chat', icon: 'chat', isFocused: 0 },
  { path: '/myPage', icon: 'myPage', isFocused: 0 },
  { path: '/other', icon: 'other', isFocused: 0 }
];

const setIconColor = (setMenu) => {
  const locate = window.location.pathname.split('/')[1];
  for(const i in menuList){
    const e = menuList[i];
    if(e.path === '/' + locate) e.isFocused = 1;
    else e.isFocused = 0;
  }
  let tmpMenu = [];
  for(const i in menuList){
    const e = menuList[i];
    tmpMenu.push(e);
  }
  setMenu(tmpMenu);
}

const MenuButton = (prop) => {
  const navigate = useNavigate();
  const { icon, isFocused, path, setMenu } = prop;
  return (
    <Button onClick={() => {
      navigate(String(path));
      setIconColor(setMenu);
    }}>
      <Icon src={`/icon/${icon}.svg`} alt="icon" isFocused={isFocused ?? 0} />
    </Button>
  )
}


const Footer = () => {
  let [menu, setMenu] = useState([]);

  useEffect(() => {
    setIconColor(setMenu);
  }, []);
  
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
              setMenu={setMenu}
            />
          )
        })
      }
    </MenuDiv>
  )
}

export default Footer;