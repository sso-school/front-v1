import { styled } from '@stitches/react';

const Column = (prop) => {
  const { alignItems, justifyContent } = prop;
  const Clm = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: alignItems || 'center',
    justifyContent: justifyContent || 'center',
  });
  return (<Clm>{prop.children}</Clm>);
};

const Row = (prop) => {
  const { alignItems, justifyContent } = prop;
  // console.log(alignItems || 'center');
  const Clm = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: alignItems || 'center',
    justifyContent: justifyContent || 'center',
  });
  return (<Clm>{prop.children}</Clm>);
};

export { Column, Row };