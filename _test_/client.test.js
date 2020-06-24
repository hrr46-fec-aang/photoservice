/**
 * @jest-environment jsdom
 */
import { shallow, mount, render } from 'enzyme';
import App from '../client/app';
import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('My Test Suite', () => {
  it('My Test Case', () => {
    expect(true).toEqual(true);
  });
});

describe('<App />', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);

    expect(component).toMatchSnapshot();
  });

  it('should render correctly with no props', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });
});
