import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setTodoList(JSON.parse(localStorage.getItem('todoList')) || []);
  }, []);

  const handleInputKeyPress = (event) => {
    const {
      target: { value },
    } = event;
    if (event.key === 'Enter') {
      setTodoList([...todoList, value]);
      localStorage.setItem('todoList', JSON.stringify(todoList));

      event.target.value = '';
    }
  };

  const handleClickRemove = (index) => {
    if (window.confirm('목록을 지우시겠습니까?')) {
      setTodoList([...todoList.slice(0, index), ...todoList.slice(index + 1)]);

      localStorage.setItem('todoList', JSON.stringify(todoList));
    }
  };

  return (
    <Container>
      <Input placeholder='오늘 할 일' onKeyPress={handleInputKeyPress}></Input>
      <TodoList
        todoList={todoList}
        handleClickRemove={handleClickRemove}
      ></TodoList>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 44px;
  text-align: center;
`;

const Input = styled.input`
  width: 80%;
  height: 33px;
  padding: 7px;
  outline: none;
  border: 1px solid silver;
  border-radius: 11px;
  background: transparent;
  font-size: 22px;
  color: white;
`;

export default Todo;
