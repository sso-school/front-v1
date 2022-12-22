import { variance } from '@babel/types';
import { styled } from '@stitches/react';

const mainHeader = (prop) => {
  const { title } = prop;

  const MainHeader = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: '30px 0',
    fontSize: '28px',
    fontWeight: 'bold',
  });

  const Icon = styled('img', {
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    scale: 1,
    '&:hover': {
      opacity: '0.9',
      scale: 1.1,
    },
    '&:active': {
      opacity: '0.7',
      scale: 0.9,
    }
  });

  const Title = styled('div', {
  });

  return (
    <MainHeader>
      <Title>{title}</Title>
      <Icon src="/icon/bell.svg" />
    </MainHeader>
  )
}

export default mainHeader;

