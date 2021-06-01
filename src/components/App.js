import React, { useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import * as actions from 'actions'
import CatGallery from 'components/CatGallery';
import CatCarousel from 'components/CatCarousel'
import 'styles/App.css';


const App = (props) => {
  useEffect(() => {
    props.fetchCats()
  }, [])

  const renderHeader = () => {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
          <Nav.Link>
              <Link to="/">Lazer Cats</Link>
            </Nav.Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Gallery</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/carousel">Carousel</Link>
            </Nav.Link>
          
          </Nav>
        </Navbar>
      </>
    )
  }

  return (
    <>
      {renderHeader()}
      <Route path="/carousel" component={CatCarousel} />
      <Route path="/" exact component={CatGallery} />
    </>
  )
}

export default connect(null, actions)(App)