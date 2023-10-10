import React from 'react';

import {
  HeroBody,
  NITRimg,
  HACKimg,
  HeroTitle,
  HeroInside,
  SubTitle,
  Tagline,
  TaglineText,
  HeroButtons,
  HeroHeading,
  SectionContainer,
  TagHead,
} from './styles';
import NITR from "../../../images/NITREdited.png"
import HACK from "../../../images/HackDesign-crop.gif"
import FIVE from "../../../images/FIVE.png"
import RandomImage from './RandomImage';
// import "./HearSection.css"

import { hero } from '../../../config';
import { DevfolioBtn, DiscordBtn } from '../shared';
// const Responsive = styled.div`
//   @media only screen and (max-width: 1150px) {
//     width: 300px;
//     height: 70px;
//   }
// `

export default function Hero() {
  return (
  //   <SectionContainer id={hero.id}>
  //   <HeroBody>
  //     <HeroTitle>
  //       <HeroHeading src={hero.Hackimg.src} alt={hero.Hackimg.alt} />
  //       <SubTitle>{hero.titleLine.text}</SubTitle>
  //       <HeroHeading src={hero.NITRimg.src} alt={hero.NITRimg.alt} />
  //     </HeroTitle>

  //     <Tagline>
  //       <TagHead>{hero.tagline.taglinetext}</TagHead>
  //       <TaglineText>{hero.tagline.taglinedesc}</TaglineText>
  //     </Tagline>

  //     <HeroButtons>
  //       <DevfolioBtn />
  //       <DiscordBtn />
  //       <DiscordBtnMobile />
  //     </HeroButtons>
  //   </HeroBody>
  // </SectionContainer>
    <SectionContainer id={hero.id}>
      <HeroBody>
        <HeroTitle className="hero h-100">
          <HeroInside>
            <HACKimg className='hack_img ' src={HACK} alt="HACK"></HACKimg>
            <img className='nitr_img' src={NITR} alt="NITR"></img>
          {/* <HACKimg src={HACK} alt="HACK" ></HACKimg>
          <NITR src={NITR} alt="NITR" ></NITR> */}
          </HeroInside>
          
          <HeroHeading className='w-100 flex justify-end item-end' > 
            <img src={FIVE}></img>
          </HeroHeading>
          <Tagline>
          <TaglineText>{hero.tagline.taglinedesc}</TaglineText>
        </Tagline>
        <HeroButtons>
          <DevfolioBtn />
          <DiscordBtn />
        </HeroButtons>
        </HeroTitle>
      </HeroBody>
    </SectionContainer>
  );
}
