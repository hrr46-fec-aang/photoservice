/**
 * @jest-environment jsdom
 */
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import App from '../client/app';
import LargePhoto from '../client/largePhoto';
import Photo from '../client/photo';

describe('<App />', () => {
  let component;

  beforeEach(() => {
    component = mount(<App />);
  });

  afterEach(() => {
    component.unmount();
  });

  it('should render correctly with no props', () => {
    expect(component).toMatchSnapshot();
  });
});

// describe('<Photo />', () = {
//   it('should render correctly with a photo object passed in as propps',()=> {

//   })
// })
