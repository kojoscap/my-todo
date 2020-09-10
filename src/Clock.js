import React from 'react';
import styled from 'styled-components';

class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  getDate = () => {
    this.setState({
      date: new Date(),
    });
  };

  componentDidMount() {
    this.onMinuteCall = setInterval(() => this.getDate(), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.onMinuteCall);
  }

  render() {
    const { date } = this.state;
    return (
      <Container>
        <CurDate>
          {date.getFullYear()}&nbsp;/&nbsp;
          {date.getMonth() + 1}&nbsp;/&nbsp;
          {date.getDate()}
        </CurDate>
        <CurDay>
          {date.getDay() === 0
            ? 'SunDay'
            : date.getDay() === 1
            ? 'MonDay'
            : date.getDay() === 2
            ? 'TuesDay'
            : date.getDay() === 3
            ? 'WednesDay'
            : date.getDay() === 4
            ? 'ThursDay'
            : date.getDay() === 5
            ? 'FriDay'
            : 'SaturDay'}
        </CurDay>
        <CurTime>
          {date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}
          &nbsp;:&nbsp;
          {date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}
        </CurTime>
      </Container>
    );
  }
}

const Container = styled.div`
  margin-top: 40px;
  font-size: 40px;
  text-align: center;
`;

const CurDate = styled.div`
  font-size: 24px;
`;

const CurDay = styled.div`
  font-style: italic;
`;

const CurTime = styled.div`
  font-size: 55px;
  font-weight: 600;
`;

export default Clock;
