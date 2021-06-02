import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import CatGalleryImage from 'components/CatGalleryImage';
import InfiniteScroll from 'react-infinite-scroll-component';

const CatGallery = (props) => {
  // create the gallery setup
  return (
    <div className="hero is-fullheight is-bold is-info">
      <div className="hero-body">
        <div className="container">
          <InfiniteScroll
            dataLength={props.cats}
            next={() => props.fetchCats(5)}
            hasMore={true}
            loader={
              <img
                src="https://media1.tenor.com/images/387ccd0801bd1d8d6ba095b0a8b5d8fa/tenor.gif?itemid=12373978"
                alt="loading"
              />
            }
          >
            <div className="image-grid" style={{ marginTop: "30px" }}>
              {props.cats.map((cat) => (
                <CatGalleryImage cat={cat} />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { cats: state.cats };
}

// need initail state and actions to call fetchCats
export default connect(mapStateToProps, actions)(CatGallery);