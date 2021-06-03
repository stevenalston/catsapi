import React from 'react';
import { connect } from 'react-redux';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import CatSlide from 'components/CatCarousel/CatSlide';
import '@brainhubeu/react-carousel/lib/style.css';

const CatCarousel = ({cats}) => {
  const renderCatSlides = () => {
    return cats.map(cat => <CatSlide key={cat.image.id} cat={cat} />)
  }

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
        {renderCatSlides()}
      </Carousel>
    </main>
    </>
  );
}

function mapStateToProps(state) {
  return { cats: state.cats}
}

export default connect(mapStateToProps)(CatCarousel)

