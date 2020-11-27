import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CardBody from "./CardBody";

configure({adapter: new Adapter()});

describe('<CardBody />', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardBody />);
  });

  it('should have textarea when is edit', () => {
    wrapper.setProps({isEdit: true});
    expect(wrapper.find('textarea')).toHaveLength(1);
  });

});
