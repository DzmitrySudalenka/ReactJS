import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Card, mapStateToProps} from "./Card";
import CardHeader from "./CardHeader/CardHeader";
import CardBody from "./CardBody";

configure({adapter: new Adapter()});

describe('<Card />', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />);
  });

  it('should render <CardHeader />', () => {
    expect(wrapper.find(CardHeader)).toHaveLength(1);
  });

  it('should render <CardBody />', () => {
    expect(wrapper.find(CardBody)).toHaveLength(1);
  });

  it('should cancel when only view checkbox checked', () => {
    wrapper.setProps({onlyView: true});
    wrapper.setState({isEdit: true});
    wrapper.instance().componentDidUpdate();
    expect(wrapper.state().isEdit).toBe(false);
  });

  it('should handle title value', () => {
    wrapper.instance().titleHandler({target: {value: 'test'}});
    expect(wrapper.state().title).toBe('test');
  });

  it('should handle text value', () => {
    wrapper.instance().textHandler({target: {value: 'test'}});
    expect(wrapper.state().text).toBe('test');
  });

  it('should handle edit button', () => {
    wrapper.instance().editHandler();
    expect(wrapper.state().isEdit).toBe(true);
    expect(wrapper.state().isChecked).toBe(false);
  });

  it('should handle check input', () => {
    wrapper.setState({isChecked: false});
    wrapper.setProps({cardToRemove: jest.fn()});
    wrapper.instance().checkHandler();
    expect(wrapper.state().isChecked).toBe(true);
  });

  it('should handle save button', () => {
    wrapper.setState({isEdit: true});
    wrapper.setProps({changeContent: jest.fn()});
    wrapper.instance().saveHandler();
    expect(wrapper.state().isEdit).toBe(false);
  });

  it('should handle cancel button', () => {
    wrapper.setState({isEdit: true});
    wrapper.setProps({title: 'test', text: 'test'});
    wrapper.instance().cancelHandler();
    expect(wrapper.state().isEdit).toBe(false);
    expect(wrapper.state().title).toBe('test');
    expect(wrapper.state().text).toBe('test');
  });

  it('should go to card page when not edited', () => {
    wrapper.setState({isEdit: false});
    const goCardPageFn = jest.fn();
    wrapper.setProps({goCardPage: goCardPageFn});
    wrapper.instance().goCardPage();
    expect(goCardPageFn).toHaveBeenCalled();
  });

  it('should not go to card page when edited', () => {
    wrapper.setState({isEdit: true});
    const goCardPageFn = jest.fn();
    wrapper.setProps({goCardPage: goCardPageFn});
    wrapper.instance().goCardPage();
    expect(goCardPageFn).not.toHaveBeenCalled();
  });

  it('should receive only view property from state', () => {
    const state = {cards: {onlyView: false}};
    expect(mapStateToProps(state).onlyView).toEqual(false);
  });

});
