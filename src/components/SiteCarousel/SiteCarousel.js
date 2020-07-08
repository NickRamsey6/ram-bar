import React, { useState } from 'react';
import './SiteCarousel.css';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
  import about1 from '../../assets/images/about1.jpg';
  import about2 from '../../assets/images/about2.jpg';
  import about3 from '../../assets/images/about3.jpg';
  import about4 from '../../assets/images/about4.jpg';
  import about5 from '../../assets/images/about5.jpg';

  const items = [
      {
          src: about1,
          altText: 'Tom and Mary 1',
          caption: 'slide1'
      },
      {
        src: about2,
        altText: 'Tom and Mary 2',
        caption: 'slide2'
    },
    {
        src: about3,
        altText: 'Tom 1',
        caption: 'slide3'
    },
    {
        src: about4,
        altText: 'Ram Bar Sign',
        caption: 'slide4'
    },
    {
        src: about5,
        altText: 'Ram Bar Mat',
        caption: 'slide5'
    },
  ];

  const SiteCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} className={"carouselImage"} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
        <div>
            <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
      );
    }
    
    export default SiteCarousel;

