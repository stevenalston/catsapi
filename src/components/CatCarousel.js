import React from 'react';
import { connect } from 'react-redux';
import CatDetailBox from 'components/CatDetailBox';
import InfiniteScroll from 'react-infinite-scroll-component';

const CatCarousel = (props) => {
  // create the gallery setup
  return (
    <div>Carousel</div>
  );
}

function mapStateToProps(state) {
  return { cats: state.cats };
}

export default connect(mapStateToProps)(CatCarousel);