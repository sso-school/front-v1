import { styled } from '@stitches/react';
const Content = (prop) => {
  const { title, icon } = prop;

  const Content = styled('div', {
    textAlign: 'left',
    margin: '0 0 40px 0',
  });

  const Title = styled('div', {
    fontSize: '20px',
    fontWeight: 'bold'
  });

  const Icon = styled('img', {
    width: '20px',
    height: '20px',
    margin: '0 0 0 11px',
    cursor: 'pointer',
    scale: 1,
    '&:hover': {
      opacity: '0.7',
      scale: 1.1,
    },
    '&:active': {
      opacity: '0.8',
      scale: 0.9
    }
  });

  const FlexRow = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    width: '100%',
    margin: '0 0 15px 0'
  });

  return (
    <Content>
      <FlexRow>
        <Title>{title}</Title>
        {
          icon && <Icon src={'/icon/' + icon + '.svg'} />
        }
      </FlexRow>
      {prop.children}
    </Content>
  );
}
export default Content;