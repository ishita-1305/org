import styled from 'styled-components';
import tw from 'twin.macro';
import { Heading3 } from '../shared';


export const SectionContainer = styled.div`
  ${tw`
    w-full
    h-auto
    min-h-screen
    overflow-x-hidden
    overflow-y-hidden
    flex
    flex-row
    items-start
    justify-center
  `}
`;

export const HeroBody = styled.div`
  ${tw`
    flex
    justify-center
    items-center
    text-white
    flex-col
    overflow-x-hidden
    overflow-y-hidden
    w-full
    `}
`;

export const HeroTitle = styled.div`
  ${tw`
    flex
    justify-center
    gap-3
    items-center
    flex-col
    pt-32
    // pl-64
    pb-20
    // pr-64
    px-12
    md:px-24
    
    `}
    
`;

export const HeroInside = styled.div`
  ${tw`
    flex
    justify-center
    items-center
    flex-row
    px-5
    gap-0
    `}
`;

export const HACKimg = styled.img`
  ${tw`
    flex
    justify-center
    items-center
    w-96
    flex-row
    px-5
    gap-3
    `}
`;


export const HeroHeading = styled.div`
  ${tw`
  flex
    // float-right
    // pt-0
    // pl-96
    // ml-80
    w-full
    pr-12
    sm:pr-28
    md:pr-16
    lg:pr-20
    xl:pr-48
    2xl:pr-72
    `}
`;
export const HeroHeadingBase = styled.div`
  ${tw`
    flex
    justify-end
    w-full
  `}
`;

export const SubTitle = styled.p`
  ${tw`
    tracking-[0.26em]
    text-lg
    text-center
    sm:tracking-wider
    sm:text-2xl
    font-Inter
    font-bold
    `}
`;

export const Tagline = styled.div`
  ${tw`
    text-center 
    text-lg 
    not-italic 
    font-semibold 
    leading-7
    

    `}
`;

export const TagHead = styled(Heading3)`
  font-weight: 590;
  ${tw`
    font-Inter
  `}
`;

export const TaglineText = styled.p`
  ${tw`
    mt-4
    text-center
    text-color-secondary
    font-Inter
    px-5
    text-sm
    sm:text-lg
    `}
`;

export const HeroButtons = styled.div`
  ${tw`
    flex
    sm:flex-row
    flex-row
    sm:gap-4
    md:gap-10
    lg:gap-16
    justify-center
    items-center
    mt-9
    sm:mt-16
    `}
`;



