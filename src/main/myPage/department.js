import { styled } from '@stitches/react';
import Header from '../mainHeader';

import Content from '../common/content';
import { Row, Column } from '../common/flex';
import Margin from '../common/margin';
import Timetable from '../timetable';


const Information = styled('div', {
  fontSize: '23px',
  fontWeight: '700',
  margin: '0 0 15px 0',
  color: '#DD5DA0',
  width: '100%',
  textAlign: 'center'
});

const MyPage = () => {
  const Box = styled('div', {});
  
  return (
    <Box>
      <Header title="21기 디지털 컨텐츠과" />
      
      <Content title="시간표">
        <Information>2022학년도 1학년 2반</Information>
        <Timetable />
      </Content>

      <Content title="우리반 친구들">
      </Content>

      <Margin />
    </Box>
  )
}

export default MyPage;