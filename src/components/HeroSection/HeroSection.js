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
  HeroHeadingBase,
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
          <HeroInside className='w-52 sm:w-64 md:w-80 lg:w-96 gap-0'>
            <HACKimg className='hack_img w-60 sm:w-68 md:w-72 lg:w-96' src={HACK} alt="HACK"></HACKimg>
            <img className='nitr_img w-64 md:w-72 lg:w-96' src={NITR} alt="NITR"></img>
          {/* <HACKimg src={HACK} alt="HACK" ></HACKimg>
          <NITR src={NITR} alt="NITR" ></NITR> */}
          </HeroInside>
          {/* className='w-full lg:w-full md:w-96 w-64' */}
          <HeroHeading>
            <HeroHeadingBase>
            <img src={FIVE} className='w-16 md:w-20 lg:w-28' />
            </HeroHeadingBase>
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



{/* <div>
  <div>
    <h1>Hack</h1>
  </div>
  <div>
    <h1>NITR</h1>
  </div>
  <div>
    <h1>Tagline</h1>
  </div>
  <div>
    <h1>Five</h1>
  </div>
</div> */}