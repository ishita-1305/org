import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import CarouselMob from './CarouselMob';
import { SectionLayout } from '../shared';
import { cards } from '../../../config';

export default function ResponsiveCarousel() {
  const [screenWidth, setScreenWidth] = useState(639);
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    });
  });

  if (screenWidth >= 640) {
    return (
      <SectionLayout id={cards.id}>
        <Carousel cards={cards.cardData} />
      </SectionLayout>
    );
  }
  return (
    <SectionLayout id={cards.id}>
      <CarouselMob cards={cards.cardData} focused={0} />
    </SectionLayout>
  );
}
