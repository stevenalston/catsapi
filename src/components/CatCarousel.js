import React, { useState } from 'react';
import { connect } from 'react-redux';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const CatCarousel = (props) => {
  
  // create the gallery setup
  const renderSlides = () => props.cats.map(cat => {
    return <img src={cat.url} key={cat.id} />
  })
  return (
    <>
    <main className='img-carousel'>      
      <Carousel
        plugins={[
          'centered', 
          'infinite',
          'arrows',
          {
            resolve: slidesToShowPlugin,
            options: {
            numberOfSlides: 3
            }
          },
        ]}
        breakpoints={{
          640: {
            plugins: [
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 1
              }
            },
          ]
          },
          900: {
            plugins: [
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 2
              }
            },
          ]
          }
        }}
      >
        {renderSlides()}
      </Carousel>
    </main>
    </>
  );
}

function mapStateToProps(state) {
  return { cats: state.cats };
}

export default connect(mapStateToProps)(CatCarousel);