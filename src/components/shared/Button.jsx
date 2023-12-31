import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import ButtonMeta from './Typography/ButtonMeta';
import ButtonMetaLarge from './Typography/ButtonMetaLarge';

const ButtonContainer = styled.button`
  background: ${(props) => (props.filled ? '#FFE91F' : 'transparent')};
  border-color: ${(props) => (props.border ? '#FFE91F77' : 'transparent')};
  border-width: ${(props) => (props.border ? '2px' : 0)};
  border-style: ${(props) => (props.border ? 'solid' : 'none')};
  cursor: pointer;
  :hover {
    background: ${(props) => (props.filled ? '#FFEF5A' : 'rgba(95, 95, 95, 0.5)')};
    color: ${(props) => (props.filled ? '#000' : '#FFEF5A')};
  }
  color: ${(props) => (props.filled ? '#000' : '#FFE91F')};
  ${tw`
    rounded-5xl
    px-6
    py-[10px]
    sm:px-9
    sm:py-4
  `}/* &>p {
    text-decoration: ${(props) => (props.filled ? 'none' : 'underline')};
  } */
`;

const Arrow = styled.span`
  margin-left: 3px;
  /* text-decoration: none ; */
`;

const Button = ({ text, small, filled, arrowed, link, method = undefined, border }) => {
  const textFinal = (
    <>
      {arrowed ? (
        <>
          {text}
          <Arrow>{'>'}</Arrow>
        </>
      ) : (
        <>{text}</>
      )}
    </>
  );
  return link ? (
    <Link to={link}>
      <ButtonContainer onClick={method} filled={filled} border={border}>
        {small ? (
          <ButtonMeta>{textFinal}</ButtonMeta>
        ) : (
          <ButtonMetaLarge>{textFinal}</ButtonMetaLarge>
        )}
      </ButtonContainer>
    </Link>
  ) : (
    <ButtonContainer onClick={method} filled={filled} border={border}>
      {small ? (
        <ButtonMeta>{textFinal}</ButtonMeta>
      ) : (
        <ButtonMetaLarge>{textFinal}</ButtonMetaLarge>
      )}
    </ButtonContainer>
  );
};

export default Button;
