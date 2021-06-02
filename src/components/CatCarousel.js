import React, { useRef } from 'react';
import { connect } from 'react-redux';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const CatCarousel = (props) => {
  const breedInfoRef = useRef(null);

  let flag = false

  const displayInfo = (cat) => {
    flag = true
    renderBreedInfo(cat, flag)
  }

  const renderBreedInfo = (cat, flag) => {
    console.log('cat: ', cat)
    console.log('flag: ', flag)
    if (!flag) {
      return null;
    } else {
    console.log('inside else')
    return (
      <ul ref={breedInfoRef} className="cat-info-box">
        <li className="text-primary">
          Breed: {cat.name}
        </li>
        <li className="text-primary">
          Weight: {cat.weight.imperial} LBS.
        </li>
        <li className="text-primary">
          Hyperallergenic:{cat.hypoallergenic === 0 ? 'No' : 'Yes'}
        </li>
      </ul>
    )
    }
  }

  // create the gallery Slides
  const renderSlides = () => props.cats.map(cat => {
    console.log(cat);
    return (
      <div onClick={() => displayInfo(cat)} key={cat.image.id}>
        <img src={cat.image.url} />
        {renderBreedInfo(cat, flag)}
      </div>
    )
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