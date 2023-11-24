import styled from 'styled-components';

export const ContactListElements = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 10px;
  padding: 15px;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background: rgba(95, 158, 160, 0.308);
  border-radius: 20px;
`;

export const DeleteContactBtn = styled.button`
  align-items: center;
  text-transform: capitalize;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  min-width: 60px;
  background-color: rgb(194, 139, 240);
  padding: 5px;
`;
