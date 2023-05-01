import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 30rem;
`;

export const StyledCard = styled.div`
  background: #555;
  border-radius: 1rem;
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
`;

interface ITodoListItemProps {
  isComplete: boolean;
}

export const TodoListItem = styled.label<ITodoListItemProps>`
  display: flex;
  padding: 0.5rem 0;
  align-items: center;
  font-size: 1.2rem;
  text-decoration: ${(props) => (props.isComplete ? "line-through" : "none")};
  text-decoration-color: #fff;
`;

export const Input = styled.input`
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 15px;
  color: #fff;
  padding: 20px 24px;
`;

export const Button = styled.button`
  padding: 8px;
  background-color: #0074b7;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
