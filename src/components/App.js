import React, { useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCatImages, fetch_cat_breeds } from 'actions';
import { Navbar, Nav } from 'react-bootstrap';
import CatGallery from 'components/CatGallery/CatGallery';
import CatCarousel from 'components/CatCarousel/CatCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "styles/styles.css";
import { fetchCatBreeds } from '../actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatBreeds());
    dispatch(fetchCatImages())
  }, []);

  const renderHeader = () => {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <Link to="/">Cats API</Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Link className='nav-link' to="/">Carousel</Link>
            <Link className='nav-link' to="/gallery">Gallery</Link>
          </Nav>
        </Navbar>
      </>
    )
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        {renderHeader()}
        <Route path='/' exact component={CatCarousel} />
        <Route path='/gallery' exact component={CatGallery} />
      </BrowserRouter>
    </div>
  );
}
