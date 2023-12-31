/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Body2, Heading3, Heading2, Caption, Heading4, Button } from '../shared';
import content from '../../../config/content/Sessions';

const Py4 = styled.div`
  ${tw`py-4`}
`;

const SecondCardBottom = styled.div`
  ${tw`flex justify-between pt-4`}
`;

const CarouselContainer = styled.div`
  ${tw`grid grid-cols-5 py-12 w-full`}
`;

const AnimatedCarousel = styled.div`
  ${tw`w-full`}
  height: 549px;
  grid-column: span 5 / span 5;
  @media (min-width: 946px) {
    grid-column: span 3 / span 3;
  }
`;

const BaseCard = styled.div`
  ${tw`mx-auto relative`}
  width: 384px;
  height: 517px;
`;

const ChevronButtonLeft = styled.button`
  ${tw`z-50 absolute w-8 h-8  bg-yellow-500 p-2 rounded-full text-white`}
  left: -48.72px;
  top: 351px;
  background-color: #fff4967a;
  transition: all 0.1s linear;
  &:hover {
    ${tw`bg-btn-yellow text-black`}
  }
`;

const ChevronButtonRight = styled.button`
  ${tw`z-50 absolute w-8 h-8  bg-yellow-500 p-2 rounded-full text-white`}
  right: -49.02px;
  top: 351px;
  background-color: #fff4967a;
  transition: all 0.1s linear;
  &:hover {
    ${tw`bg-btn-yellow text-black`}
  }
`;

const CardClass = styled.div`
  ${tw`absolute p-3 duration-300 ease-linear bg-gray-900`}
  border: ${(props) => (props.focused ? '4px solid yellow' : '0px')};
  border-radius: ${(props) => handleRound(props.pos)};

  width: ${(props) => (props.pos === 'center' ? '384px' : '351.32px')};
  height: ${(props) => (props.pos === 'center' ? '517px' : '473px')};
  top: ${(props) => (props.pos === 'center' ? '0px' : '22px')};
  left: ${(props) => handleLeft(props.pos)};
  filter: ${(props) => (props.pos === 'center' ? 'blur(0px)' : 'blur(3.65957px)')};
  z-index: ${(props) => handleZindex(props.pos)};
`;

const FirstHalfCard = styled.div`
  ${tw`h-1/2`}
  overflow: hidden;
  border-radius: ${(props) => props.radius};
`;

const Img = styled.img`
  border-radius: ${(props) => props.radius};
  margin: 0 auto;
  object-fit: cover;
`;
const SecondHalfCard = styled.div`
  ${tw`h-1/2 text-white py-4 bg-gray-900 flex flex-col justify-between`}
`;

const CardBottom = styled.div`
  ${tw`flex justify-between`}
`;
const CardLabel = styled.div`
  ${tw` mt-auto`}
`;

const DownIndex = styled.div`
  ${tw`mx-auto justify-between py-6 flex`}
  width: ${(props) => props.cardcount}rem;
`;

const IndividualDownIndexSelected = styled.span`
  ${tw`h-2 w-2 rounded-full mx-auto bg-yellow-400`}
`;
const IndividualDownIndexUnselected = styled.span`
  ${tw`h-2 w-2 rounded-full mx-auto bg-gray-100`}
`;

const DataComponent = styled.div`
  ${tw`relative max-w-md   pr-3  flex flex-col justify-between`}
  grid-column: span 5/span 5;
  margin-right: auto;
  margin-left: auto;
  top: 22px;
  height: 517px;
  @media (min-width: 946px) {
    margin-right: auto;
    grid-column: span 2 / span 2;
    padding-right: 4rem;
  }
`;

const DataHead = styled.div`
  ${tw`
    flex
    flex-col
    gap-3
  `}
`;

const DataBody = styled(DataHead)`
  ${tw`
    gap-6
    `}
`;

const DescText = styled(Body2)`
  ${tw`
  leading-5
  md:leading-6
  `}
  transition : all 1s ease-in-out;
`;

const Heading = styled(Heading3)`
  transition: all 1s ease-in-out;
`;

const Name = styled(Body2)`
  transition: all 1s ease-in-out;
`;

function handleRound(pos) {
  if (pos === 'left' || pos === 'right') {
    return '1rem';
  }
  if (pos === 'center') {
    return '1.5rem';
  }
  return '0rem';
}
function handleLeft(pos) {
  if (pos === 'left') {
    return '-79.32px';
  }
  if (pos === 'right') {
    return '112px';
  }
  return '0px';
}
function handleZindex(pos) {
  if (pos === 'center') {
    return 30;
  }
  if (pos === 'back') {
    return 0;
  }
  return 10;
}

function setcard(cards) {
  let arr = [];
  if (cards.length === 0) {
    return arr;
  }
  if (cards.length === 1) {
    arr.push('left');
    return arr;
  }
  if (cards.length === 2) {
    arr.push('left');
    arr.push('center');
    return arr;
  }
  if (cards.length === 3) {
    arr = ['left', 'center', 'right'];
    return arr;
  }
  arr = ['left', 'center', 'right'];
  for (let i = cards.length - 3; i >= 1; i -= 1) {
    arr.push('back');
  }
  return arr;
}

const Heading5 = styled(Heading3)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function Carousel({ cards }) {
  const [cardpos, setcardpos] = useState(setcard(cards));
  const [focused, setFocused] = useState(1);
  const [cardindex, setcardindex] = useState(
    cardpos.map((item) => {
      if (item === 'center') {
        return true;
      }
      return false;
    }),
  );
  function rLeft() {
    setcardpos([...cardpos.slice(1), cardpos[0]]);
    setcardindex([...cardindex.slice(1), cardindex[0]]);
    setCenter((center - 1 + cards.length) % cards.length);
    setFocused(focused > 0 ? focused - 1 : cards.length - 1);
  }
  function rRight() {
    setcardpos([cardpos[cardpos.length - 1], ...cardpos.slice(0, cardpos.length - 1)]);
    setcardindex([cardindex[cardindex.length - 1], ...cardindex.slice(0, cardindex.length - 1)]);
    setCenter((center + 1) % cards.length);
    setFocused(focused < cards.length - 1 ? focused + 1 : 0);
  }
  const [center, setCenter] = useState(1);

  return (
    <CarouselContainer>
      <AnimatedCarousel>
        <BaseCard>
          <ChevronButtonLeft onClick={() => rLeft()}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </ChevronButtonLeft>
          <ChevronButtonRight onClick={() => rRight()}>
            <FontAwesomeIcon icon={faChevronRight} />
          </ChevronButtonRight>

          {/* card  */}
          {cards.map((item) => (
            <CardClass pos={cardpos[item.id]} focused={item.id === focused} key={item.id}>
              <FirstHalfCard radius={cardpos[item.id - 1] !== 'center' ? '1.0rem' : '0.8rem'}>
                <Img
                  radius={cardpos[item.id - 1] !== 'center' ? '1.0rem' : '0.8rem'}
                  src={item.img}
                />
              </FirstHalfCard>
              <SecondHalfCard>
                <div>
                  <Heading5 semibold>{item.heading}</Heading5>
                  <Py4>
                    <Body2>
                      <span
                        className='font-semibold'
                        style={{ paddingBottom: '6px', display: 'inline-block' }}
                      >
                        {item.name}
                      </span>
                    </Body2>
                    <Body2>{item.designation}</Body2>
                  </Py4>
                </div>
                <CardBottom>
                  <Heading4>{item.date}</Heading4>
                  <CardLabel>
                    <Body2>{item.label}</Body2>
                  </CardLabel>
                </CardBottom>
              </SecondHalfCard>
            </CardClass>
          ))}
        </BaseCard>
        <div>
          <DownIndex cardcount={cardindex.length}>
            {cardindex.map((item, idx) => {
              if (item) return <IndividualDownIndexSelected key={idx} />;
              return <IndividualDownIndexUnselected key={idx} />;
            })}
          </DownIndex>
        </div>
      </AnimatedCarousel>
      <DataComponent>
        <DataHead>
          <Heading2 semibold>SESSIONS</Heading2>
          <Caption className='text-color-tertiary'>{content.caption}</Caption>
        </DataHead>

        <DataBody>
          <Heading>{cards[center].heading}</Heading>
          <Name>{cards[center].name}</Name>
        </DataBody>

        <DescText>{content.desc}</DescText>

        <SecondCardBottom>
          {Date.now() < Date.parse(cards[center].Date) ? (
            <Button small filled text='JOIN LIVE' link='https://workshop.hacknitr.com' />
          ) : (
            <Button small arrowed border text='GO TO YOUTUBE' link={cards[center].vidLink} />
          )}
        </SecondCardBottom>
      </DataComponent>
    </CarouselContainer>
  );
}
