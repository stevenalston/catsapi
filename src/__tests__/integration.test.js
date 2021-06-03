import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import CATS_API_KEY from 'keys';
import Root from 'Root';
import CatCarousel from 'components/CatCarousel/CatCarousel';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest(`https://api.thecatapi.com/v1/breeds?api_key${CATS_API_KEY}&attach_breed=1`, {
    status: 200,
    response: [{name: 'Fetch #1'}, {name: 'Fetch #2'}]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of cats and display them', (done) => {

  const wrapped = mount(
    <Root>
      <CatCarousel />
    </Root>
  )

  // find the 'fetchComments' button and click it
  // introduce a tiny pause so moxios can response
  // Expect to find a list of comments
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('.BrainhubCarouselItem').length).toEqual(2);

    done();
    wrapped.unmount();
  });

})