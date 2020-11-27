import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {CardHeader, mapStateToProps} from "./CardHeader";

configure({adapter: new Adapter()});

describe('<CardHeader />', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardHeader />);
  });

  it('should have edit button when only view checkbox not checked', () => {
    wrapper.setProps({onlyView: false});
    expect(wrapper.find('FaEdit')).toHaveLength(1);
  });

  it('should not have edit button when only view checkbox checked', () => {
    wrapper.setProps({onlyView: true});
    expect(wrapper.find('FaEdit')).toHaveLength(0);
  });

  it('should have save button when edited', () => {
    wrapper.setProps({isEdit: true});
    expect(wrapper.find('FaSave')).toHaveLength(1);
  });

  it('should receive only view property from state', () => {
    const state = {cards: {onlyView: false}};
    expect(mapStateToProps(state).onlyView).toEqual(false);
  });

});
