import React from 'react';

// Libraries
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  ${tw`
    h-screen
    fixed
    left-0
    top-0
    flex
    justify-center
    items-center
    inset-0 z-50
    outline-none
    focus:outline-none
    bg-no-repeat
    bg-center
    bg-cover
  `}
  min-width: 100vw;
`;

const scaleUp = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const scaleDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const BackgroundContainer = styled.div`
  ${tw`
      absolute
      bg-black
      opacity-30
      inset-0
      z-0
    `};
`;

const BodyContainer = styled.div`
  ${tw`
    p-5
    flex-auto
    justify-center
  `}

  transform: translateY(-100%);
  animation: ${(isOpen) => (isOpen ? scaleDown : scaleUp)} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)
    forwards;
`;

const ContentContainer = styled.div`
  ${tw`
    w-full
    max-w-lg
    p-5
    relative
    mx-auto
    my-auto
    rounded-xl
    shadow-lg
    bg-background-dark

    flex
    justify-between
  `}
`;

const Icon = styled(FontAwesomeIcon)`
  ${tw`
    absolute
    top-5
    right-5
    m-0
    text-white
  `}

  &:hover {
    cursor: pointer;
  }
`;

const Modal = ({ isOpen, close, children }) => (
  <>
    {isOpen && (
      <Container>
        <BackgroundContainer onClick={close} isOpen={isOpen} />
        <BodyContainer>
          <ContentContainer>
            <Icon icon={faTimes} onClick={close} />
            <div>{children}</div>
          </ContentContainer>
        </BodyContainer>
      </Container>
    )}
  </>
);

export default Modal;
