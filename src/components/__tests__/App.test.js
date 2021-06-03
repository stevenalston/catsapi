import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import { Navbar, Nav } from 'react-bootstrap';
import CatCarousel from 'components/CatCarousel/CatCarousel'

let testComponent;

beforeEach(() => {
  testComponent = mount(
    <Root>
      <App />
    </Root>
  );
})

it('shows a header nav', () => {

  expect(testComponent.find(Navbar).length).toEqual(1);
  expect(testComponent.find(Nav).length).toEqual(1);
});

it('shows a CatCarousel component', () => {
  

  expect(testComponent.find(CatCarousel).length).toEqual(1);
});