import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import CatDetailBox from 'components/CatDetailBox';
import InfiniteScroll from 'react-infinite-scroll-component';

const CatGallery = (props) => {
  console.log(props);
  // create the gallery setup
  return (
    <div className="hero is-fullheight is-bold is-info">
      <div className="hero-body">
        <div className="container">
          <div className="header content">
            <h2 className="subtitle is-6">Warner Media Code Challenge</h2>
            <h1 className="title is-1">Lazer Cats</h1>
          </div>
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
                <CatDetailBox cat={cat} />
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

export default connect(mapStateToProps, actions)(CatGallery);