import { styled } from '@stitches/react';
const Timetable = () => {
  const Box = styled('div', {
    background: '#fff',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.08)',
    borderRadius: '15px',
    width: 'calc(100% - 50px)',
    height: '100%',
    padding: '30px 25px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  });

  const TableRow = (props) => {
    const { date, time, isToday } = props;
    const Row = styled('div', {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'calc(200% / 7)',
    });
    const Date = styled('div', {
      fontSize: '20px',
      fontWeight: '600',
      margin: '0 0 5px 0',
    })
    const DateBar = styled('div', {
      height: '2.7px',
      width: '23px',
      background: isToday ? '#72A0F8' : '#AAAAAA',
      borderRadius: '10px',
      margin: '0 0 10px 0',
    });

    return (
      <Row>
        <Date>{date}</Date>
        <DateBar />
        {
          time.map((item, index) => {
            const Time = styled('div', {
              fontSize: '16px',
              fontWeight: isToday ? '700' : '500',
              color: '#7A7A7A',
              margin: '15px 0 0 0',
            });
            return <Time key={index}>{item}</Time>
          })
        }
      </Row>
    );
  }

  return (
    <Box>
      <TableRow date="월" isToday={false} time={["음악", "국어", "수학", "미술", "애니", "애니", "애니"]} />
      <TableRow date="화" isToday={true} time={["음악", "국어", "수학", "미술", "애니", "애니", "애니"]} />
      <TableRow date="수" isToday={false} time={["음악", "국어", "수학", "미술", "애니", "애니", "애니"]} />
      <TableRow date="목" isToday={false} time={["음악", "국어", "수학", "미술", "애니", "애니", "애니"]} />
      <TableRow date="금" isToday={false} time={["음악", "국어", "수학", "미술", "애니", "애니", "애니"]} />
    </Box>
  );
}
export default Timetable;