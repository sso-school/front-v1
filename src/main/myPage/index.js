import { styled } from '@stitches/react';
import Header from '../mainHeader';

import Content from '../common/content';
import { Row, Column } from '../common/flex';
import Margin from '../common/margin';

const MyNames = (prop) => {
  const { number, name, counter } = prop;
  const Box = styled('div', {
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    padding: '20px 20px 5px 20px',
    width: 'calc(100% - 40px)',
    backgroundColor: '#fff',
    margin: '20px 0 0 0',
  });
  const ProfileImg = styled('img', {
    width: '70px',
    height: '70px',
    borderRadius: '200%',
    // border: '1px solid #888888',
    objectFit: 'cover',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
  });
  const MovedCenter = styled('div', {
    position: 'relative',
    top: '-50px',
    display: 'flex',
    justifyContent: 'center'
  });
  const NoneMoved = styled('div', {
    position: 'relative',
    top: '-25px',
  });
  const StudentNumber = styled('div', {
    fontSize: '16px',
    fontWeight: '600',
    margin: '0 0 5px 0',
    color: '#7A7A7A',
  });
  const StudentName = styled('div', {
    fontSize: '23px',
    fontWeight: '700',
    margin: '0 0 20px 0',
  });
  const MyCountes = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
  });
  const MyCountesText = styled('div', {
    fontSize: '16px',
    fontWeight: '600',
    margin: '0 0 5px 0',
    color: '#7A7A7A',
  });
  const MyCountesNumber = styled('div', {
    fontSize: '23px',
    fontWeight: '700',
    color: '#DD5DA0',
  });
  console.log(Box);
  return (
    <Box>
      <MovedCenter>
        <ProfileImg src="/icon/myProfileImg.svg" />
      </MovedCenter>
      <NoneMoved>
        <Column>
          <StudentNumber>{number}</StudentNumber>
          <StudentName>{name}</StudentName>
        </Column>
        <Row>
          <MyCountes>
            <MyCountesText>게시글 수</MyCountesText>
            <MyCountesNumber>{counter[0]}</MyCountesNumber>
          </MyCountes>
          <MyCountes>
            <MyCountesText>댓글 수</MyCountesText>
            <MyCountesNumber>{counter[1]}</MyCountesNumber>
          </MyCountes>
          <MyCountes>
            <MyCountesText>뭐할까</MyCountesText>
            <MyCountesNumber>{counter[2]}</MyCountesNumber>
          </MyCountes>
        </Row>
      </NoneMoved>
    </Box>
  );
}

const MyInfoBtn = (prop) => {
  const { name } = prop;
  const Box = styled('div', {
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    padding: '20px 30px',
    width: 'calc(100% - 60px)',
    backgroundColor: '#fff',
    margin: '15px 0 0 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  });
  const Text = styled('div', {
    fontSize: '17px',
    fontWeight: '700',
  });
  const MoreBtn = styled('img', {
    width: '15px',
    height: '15px',
    objectFit: 'contain',
  })

  return (
    <Box>
      <Text>{name}</Text>
      <MoreBtn src="/icon/morepink.svg" />
    </Box>
  );
}

const MyInfomatin = () => {
  return (
    <Column>
      <MyNames number="1230" name="한지효" counter={[7, 30, 12]} />
      <MyInfoBtn name="21기 디지털컨텐츠과" />
      <MyInfoBtn name="수강 강좌 관리" />
      <Row>
        
      </Row>
    </Column>
  )
}

const MyPage = () => {
  const Box = styled('div', {});
  
  return (
    <Box>
      <Header title="마이페이지" />
      
      <Content title="내 정보">
        <MyInfomatin />
      </Content>

      <Content title="내가 좋아요 한 게시글">
      </Content>

      <Margin />
    </Box>
  )
}

export default MyPage;