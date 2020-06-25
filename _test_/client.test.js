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

describe('App Component', () => {
  let component;

  beforeAll(() => {
    component = mount(<App />);
  });

  afterAll(() => {
    component.unmount();
  });

  it('should render correctly with no props', () => {
    expect(component).toMatchSnapshot();
  });
});

describe('Photo Component', () => {
  let component;
  const mockPhoto = {
    thumbs: 14,
    url:
      'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/photo-1475483768296-6163e08872a1.jpg',
    user: {
      username: 'Humberto Wyman III',
      profile_pic_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/dorphern/128.jpg',
    },
    description: 'Nesciunt dolore minus laborum saepe nihil.',
    date: '2020-05-03T22:27:30.604Z',
  };

  beforeEach(() => {
    component = mount(<Photo photo={mockPhoto} />);
  });

  afterEach(() => {
    component.unmount();
  });

  it('should render correctly without failure', () => {
    expect(component).toBeDefined();
  });

  it('should match the test snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have photo passed in with props', () => {
    // console.log(component.props().photo);
    expect(component.props().photo.thumbs).toEqual(14);
  });
});

describe('LargePhoto Component', () => {
  let component;
  const mockCurrentPhoto = {
    _id: '5ef28b4aacd5b2dbe5ad7b34',
    id: '3',
    location: 'Schmitt Green',
    photos: [
      {
        user: {
          username: "Jakob O'Reilly",
          profile_pic_url:
            'https://s3.amazonaws.com/uifaces/faces/twitter/andrea211087/128.jpg',
        },
        thumbs: 17,
        _id: '5ef28b4aacd5b2dbe5ad7b35',
        url:
          'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/photo-1496947850313-7743325fa58c.jpg',
        description: 'Reprehenderit vero quae doloribus qui commodi.',
        date: '2020-03-09T05:52:14.128Z',
      },
    ],
  };

  beforeEach(() => {
    component = mount(<LargePhoto currentphoto={mockCurrentPhoto} />);
  });

  afterEach(() => {
    component.unmount();
  });

  it('should render correctly without failure', () => {
    expect(component).toBeDefined();
  });

  it('should match the test snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have only one photo passed in with props', () => {
    let mockphoto = component.props().currentphoto;
    expect(mockphoto.id).toEqual('3');
    expect(mockphoto.photos).toHaveLength(1);
  });
});
