import { Form, Field } from 'formik';
import styled from 'styled-components';
export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
`;

export const FormButton = styled.button`
  align-items: center;
  text-transform: capitalize;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  max-width: 120px;
  width: 100%;
  background-color: rgb(194, 139, 240);
  padding: 5px;
`;

export const FormInput = styled(Field)`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  font-size: 16px;
  height: auto;
  margin: 0;
  outline: 0;
  padding: 15px;
  width: 100%;
  background-color: #e8eeef;
  color: #8a97a0;
`;
