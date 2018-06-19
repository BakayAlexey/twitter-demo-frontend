import React from "react";
import styled from "styled-components";
import IconMagnifier from "./IconMagnifier.svg";

const Input = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 9px 42px 8px 11px;
  background-color: #f5f8fa;
  border: 1px solid #e6ecf0;
  border-radius: 16px;
  font-size: 12px;
  font-weight: normal;
  line-height: 14px;
  color: #687b8a;
  &:focus {
    outline: none;
    border: 1px solid #3b94d9;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;

  img {
    display: block;
  }
`;

const Form = styled.form`
  position: relative;
  width: 220px;
`;

function SearchForm() {
  return (
    <Form>
      <Input type="text" placeholder="Search Twitter" />
      <Button type="submit">
        <img src={IconMagnifier} alt="btn-search" />
      </Button>
    </Form>
  );
}

export default SearchForm;
