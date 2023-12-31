import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import { Body1, Body2 } from '../shared';

const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1
  }
`;

export const Wrapper = styled.div`
  ${tw`
  md:grid
  grid-cols-1
  gap-x-20
  mt-5
  hidden
  md:mt-14
  md:grid-cols-2
  md:my-10
  md:pl-14
`}
`;

export const FaqContainer = styled.div`
  ${tw`
  pt-10
  md:p-2
  `}
`;

export const AnswerContainer = styled.div`
  ${tw`
  relative
  rounded-xl
  md:max-w-[560px]
  md:rounded-xl
  lg:rounded-3xl
  p-4
  mt-4
  bg-[#202020]
  `}
`;

export const Arrow = styled.span`
  ${tw`
    inline-flex
    text-btn-yellow
    md:text-4xl
  `}
`;

export const Answer = styled.div`
  ${tw`
  p-3 
  mt-4 
  border-solid 
  border-2 
  border-yellow-300 
  rounded-lg
  md:rounded-xl
  md:mt-16 
  md:p-4  
  lg:ml-20 
  `}
  transition: opacity 1s ease-in-out;
  opacity: 0;
  &.animate {
    animation: ${fade} 1s both cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

export const BotContainer = styled.div`
  ${tw`
  flex 
  flex-row 
  justify-end
  items-center 
  md:bottom-12
  md:absolute
  `}
`;

export const BotImg = styled.img`
  ${tw`
  absolute
  -bottom-4
  -left-14
  object-contain
  md:h-[300px] 
  lg:h-[350px]
  md:block
  hidden 
  `}
`;

export const BotMessage = styled.div`
  ${tw`
  md:w-[60%]
  py-3
  px-2
  md:pr-6
  md:py-0
  `}
`;

export const Head = styled.div`
  ${tw`
    flex
    flex-col
    gap-3
  `}
`;

export const List = styled(Body2)`
  color: ${(props) => (props.active ? 'rgba(234, 234, 234, 1)' : 'rgba(163, 163, 163, 1)')};

  ${tw`
    py-4
    md:py-[24.33px]
    leading-4
    cursor-pointer
    border-solid
    border-b border-color-tertiary
    hover:text-white
    `}
`;

export const Container = styled.div`
  ${tw`
    md:hidden
    w-full
    max-w-full
    overflow-hidden
  `}
`;

export const QuestionContainer = styled.div`
  ${tw`
    flex
    flex-col
    my-10
  `}
  &:last-child {
    border-bottom: 1px solid var(--text-color-primary);
  }
`;

export const QuestionTextContainer = styled.div`
  border-top: 1px solid var(--text-color-primary);
  ${tw`
    flex
    justify-between
    items-center
    py-3
    gap-y-2
    cursor-pointer
  `}
  &:hover {
    .question {
      ${tw`
        text-color-secondary
      `}
    }
  }
  & > .active {
    ${tw`
      text-color-secondary
    `}
  }
`;

export const Question = styled(Body1)`
  user-select: none;
  color: ${(props) => (props.open ? 'var(--text-color-primary)' : 'var(--text-color-tertiary)')};
  ${tw`
    flex
    border-2
    border-color-primary
    text-color-tertiary
    cursor-pointer
  `}
`;

export const PlusIcon = styled.p`
  user-select: none;
  ${tw`
    flex
    justify-end
    cursor-pointer
    text-4xl
    text-color-tertiary
    duration-100
  `}
  /* transition: 1s linear ease-in-out; */
  &.open {
    transform: rotate(45deg);
    transition: 3s linear ease-in-out;
  }
`;

export const MinusIcon = styled(PlusIcon)`
  transform: rotate(45deg);
  transition: all 0.2s linear;
`;

const scaleUp = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-25%);
  }
`;

const scaleDown = keyframes`
  0% {
    transform: translateY(-25%);
  }
  100% {
    transform: translateY(0%);
  }
`;

export const AnswerMob = styled(Body2)`
  flex: auto;
  user-select: none;
  animation: ${(isOpen) => (isOpen ? scaleDown : scaleUp)} 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)
    forwards;
  ${tw`
    text-color-secondary
    col-span-12
    duration-200
    pb-3
  `}
`;
