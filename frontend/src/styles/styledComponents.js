import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  background: #F0F4F5;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px #59001c;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #59001c;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Button = styled.button`
  background-color: #59001c;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    background-color: #9ba0ab;
    color: #59001c;
  }
`;

export const TarefaItem = styled.li`
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  color: #59001c;
`;

export const LinkButton = styled(Button).attrs({ as: 'a' })`
  background-color: #390007;
  &:hover {
    background-color: #9ba0ab;
  }
`;