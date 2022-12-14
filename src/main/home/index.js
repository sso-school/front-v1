import { styled } from '@stitches/react';
import Header from '../mainHeader';

import Content from '../common/content';
import { Row } from '../common/flex';
import Margin from '../common/margin';
import Timetable from '../timetable';

const SchoolNotice = (prop) => {
  const { where, date, readOr } = prop;
  const content = prop.children;
  const Box = styled('div', {
    padding: '20px 25px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.08)',
    borderRadius: '15px',
    marginBottom: '20px',
  });

  const TitleBar = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    margin: '0 0 10px 0'
  });

  const Where = styled('div', {
    fontSize: '17px',
    fontWeight: '500'
  });

  const Date = styled('div', {
    fontSize: '12px',
    fontWeight: '500',
    color: '#7A7A7A',
    margin: '0 5px 0 10px',
    padding: '0 5px 0 0',
    borderRight: '2px solid #AAAAAA',
  });

  const ReadOr = styled('div', {
    fontSize: '12px',
    fontWeight: '500',
    
    variants: {
      read: {
        "1": {
          color: '#72A0F8'
        },
        "0": {
          color: '#DD5DA0'
        }
      }
    },
    defaultVariants: {
      read: '0'
    }
  });

  const Conts = styled('div', {
    color: '#7A7A7A',
    fontSize: '13px',
    fontWeight: '500',
    wordBreak: 'keep-all',
  });

  const Liner = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  });

  const SeeAll = styled('div', {
    width: '180px',
    fontSize: '13px',
    fontWeight: '500',
    color: '#AAAAAA',
    cursor: 'pointer',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'right',
    margin: '0 0 0 10px'
  });

  const SeeAllIcon = styled('img', {
    width: '10px',
    height: '10px',
    margin: '0 0 0 5px',
  });

  return (
    <Box>
      <TitleBar>
        <Where>{where}</Where>
        <Date>{date}</Date>
        <ReadOr read={readOr}>{Number(readOr) ? '??????' : '?????????'}</ReadOr>
      </TitleBar>
      <Liner>
        <Conts>{content}</Conts>
        <SeeAll>
          ?????????
          <SeeAllIcon src="/icon/seemore.svg" />
        </SeeAll>
      </Liner>
    </Box>
  )
}

const NewContent = () => {
  const Box = styled('div', {
    background: '#FAFAFA',
    width: 'calc(100% - 60px)',
    padding: '30px 30px',
    borderRadius: '15px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.08)',
  });
  const Icon = styled('img', {
    width: '20px',
    height: '20px',
    borderRadius: '200%',
  });
  const Whom = styled('div', {
    fontSize: '16px',
    fontWeight: '700',
    color: '#7A7A7A',
    margin: '0 0 0 10px',
  });
  const More = styled('img', {
    width: '20px',
    height: '15px',
    // margin: '0 0 0 10px',
  });
  const ContentText = styled('div', {
    fontSize: '16px',
    fontWeight: '500',
    color: '#7A7A7A',
    margin: '12px 0',
    
  });
  const BottomBar = styled(Row, {
    margin: '20px 0 0 0',
  });
  const ContentDate = styled('div', {
    fontSize: '16px',
    fontWeight: '500',
    color: '#7A7A7A',
  });

  const IconAndText = (props) => {
    const Icon = styled('img', {
      width: '13px',
      height: '13px',      
    });
    const Text = styled('div', {
      fontSize: '16px',
      fontWeight: '500',
      color: '#7A7A7A',
      margin: '0 13px 0 5px',
    });
    return (
      <Row alignItems="center" justifyContent="left">
        <Icon src={props.icon} />
        <Text>{props.text}</Text>
      </Row>
    )
  }

  return (
    <Box>
      <Row alignItems="center" justifyContent="space-between">
        <Row alignItems="center" justifyContent="left">
          <Icon src="/icon/ano.svg" />
          <Whom>??????</Whom>
        </Row>
        <Row alignItems="center" justifyContent="left">
          <More src="icon/more.svg" />
        </Row>
      </Row>
      <ContentText>????????? ?????? ???????????? ??? ???????????????</ContentText>
      <BottomBar alignItems="center" justifyContent="space-between">
        <Row alignItems="center" justifyContent="left">
          <IconAndText icon="/icon/comment.svg" text="10???" />
          <IconAndText icon="/icon/love.svg" text="10???" />
          <IconAndText icon="/icon/look.svg" text="10???" />
        </Row>
        <ContentDate>2022-11-26</ContentDate>
      </BottomBar>
    </Box>
  );
}

const Home = () => {
  const Box = styled('div', {});
  return (
    <Box>
      <Header title="???" />
      <Content title="?????? ??????" icon="notice">
        <SchoolNotice where="?????????" date="2021. 10. 10" readOr="1">
          11??? 14??? - ??????????????? ?????? ???2022 ??????????????????????????????, ???????????? ??????!
        </SchoolNotice>
        <SchoolNotice where="?????????" date="2021. 11. 27" readOr="0">
          ????????? ????????? ?????? ????????? ?????? ?????? ?????????, ????????? ??? ??? ?????? ???????????? '??????' ?????? ???????????????.
        </SchoolNotice>
      </Content>

      <Content title="?????????" icon="calendar">
        <Timetable />
      </Content>

      <Content title="?????? ????????? ???">
        <NewContent />
      </Content>

      <Margin />
    </Box>
  )
}

export default Home;