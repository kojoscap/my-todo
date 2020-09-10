import React from 'react';
import TodoRow from './TodoRow';
import styled from 'styled-components';

const TodoList = ({ todoList, handleClickRemove }) => {
  return (
    <Container>
      {todoList.map((todo, index) => (
        <TodoRow
          todo={todo}
          key={index}
          index={index}
          handleClickRemove={handleClickRemove}
        ></TodoRow>
      ))}
    </Container>
  );
};

const Container = styled.div``;

export default TodoList;
