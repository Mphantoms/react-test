import React from 'react'
import TestUtils from 'react-dom/test-utils'
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {createRenderer} from 'react-test-renderer/shallow';
import Button from './button'

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('works', () => {
  expect(true).toBe(true);
});

test('renders with text', () => {
  const text = 'text';
  const button = shallow(<Button text={text}/>);

  console.log(button)
  expect(button.type()).toBe('button');
  expect(button.text()).toBe(text);
});

test('test onClick callback', () => {
  const onClick = jest.fn();
  const button = shallow(<Button onClick={onClick}/>);
  button.simulate('click');
  expect(onClick).toBeCalled();
});
