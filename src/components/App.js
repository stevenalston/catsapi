import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions'
import CatGallery from './CatGallery';
import 'styles/App.css';


const App = (props) => {
  useEffect(() => {
    props.fetchCats()
  }, [])

  return <CatGallery fetchCats={props.fetchCats} />
}

export default connect(null, actions)(App)