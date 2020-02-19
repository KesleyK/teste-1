import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  box-shadow: rgba(0,0,0,.5) 0 2px 10px;
  flex-direction: column;
  padding: 10px 20px 40px 20px;
  background-color: #eee;
`;

export const FormHeading = styled.h3`
  color: #1ca5af;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const FormInput = styled.input`
  width: 400px;
  padding: 3px 5px 3px 5px;
  font-size: larger;
  margin: 10px;
  border-radius: 8px;
  border: none;
  border-bottom: 3px solid transparent;
  transition: all .3s;

  :focus {
    border-bottom: 3px solid #1ca5af;
    background-color: #e9e9e9;
    outline: none;
  }
`;

export const FormBtn = styled.button`
  width: 50%;
  margin-top: 20px;
  padding: 5px 0 5px 0;
  color: #eee;
  font-size: 18px;
  background-color: #1ca5af;
  align-self: center;
  border: 1px solid #1088a7;

  :hover {
    cursor: pointer;
  }
`;
