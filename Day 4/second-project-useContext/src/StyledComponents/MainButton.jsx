import styled from "styled-components";

const MainButton = styled.button`
  background-color: ${({ variant }) =>
    variant === "outline" ? "#fff" : "#ffd000"};
  color: ${({ variant }) => (variant === "outline" ? "#ffd000" : "#fff")};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;

  &:hover {
    background-color: ${({ variant }) =>
      variant === "outline" ? "#ffd000" : "#fff"};
    color: ${({ variant }) => (variant === "outline" ? "#fff" : "#ffd000")};
  }
`;

const CustomButton = styled(MainButton)`
  background-color: ${({ variant }) =>
    variant === "outline" ? "#fff" : "#e43333"};
  color: ${({ variant }) => (variant === "outline" ? "#e43333" : "#fff")};
  &:hover {
    background-color: ${({ variant }) =>
      variant === "outline" ? "#e43333" : "#fff"};
    color: ${({ variant }) => (variant === "outline" ? "#fff" : "#e43333")};
  }
`;

export { MainButton, CustomButton };
