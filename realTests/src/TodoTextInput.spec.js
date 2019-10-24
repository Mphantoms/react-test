import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16';
import TodoTextInput from './TodoTextInput'

Enzyme.configure({adapter: new EnzymeAdapter()});


const noop = () => {
};


test('set text prop as value', () => {
  const text = 'text';
  const wrapper = shallow(
    <TodoTextInput text={text} onSave={noop}/>
  );

  expect(wrapper.find('input').prop('value')).toBe(text);
});

test('uses the placeholder prop', () => {
  const placeholder = 'placeholder';
  const wrapper = shallow(<TodoTextInput placeholder={placeholder} onSave={noop}/>);
  //todo 这里可以说下当内容被包裹了之后
  expect(wrapper.find('input').prop('placeholder')).toBe(placeholder);
});


test('applies right class name', () => {
  const wrapper = shallow(
    <TodoTextInput editing newTodo onSave={noop}/>
  );
  expect(wrapper.find('input').hasClass('edit')).toBe(true);
  expect(wrapper.find('input').hasClass('new-todo')).toBe(true);
});

test('fire onSave on enter', () => {
  const onSave = jest.fn();
  const value = 'value';
  const wrapper = shallow(
    <TodoTextInput onSave={onSave}/>
  );
  wrapper.find('input').simulate(
    'keydown',
    {
      target: {value}, which: 13
    }
  );

  expect(onSave).toHaveBeenCalledWith(value);
});

test('shall not fire onSave on key down', () => {
  const onSave = jest.fn();
  const wrapper = shallow(
    <TodoTextInput onSave={onSave}/>
  );
  wrapper.find('input').simulate(
    'keydown',
    {
      target: {value: ''}
    }
  );

  expect(onSave).not.toBeCalled()
});


test('clears value after save if new', () => {
  const value = 'value';
  const wrapper = shallow(
    <TodoTextInput newTodo={true} onSave={noop}/>
  );

  wrapper.find('input').simulate(
    'keydown',
    {
      target: {value}, which: 13
    }
  );
  expect(wrapper.find('input').prop('value')).toBe('')
});

test('updates the text on Change', () => {
  const value = 'value';
  const wrapper = shallow(
    <TodoTextInput onSave={noop}/>
  );

  wrapper.find('input').simulate('change', {
    target: {value}
  });

  expect(wrapper.find('input').prop('value')).toBe(value)
});


test('fires onSave on blur if not new', () => {
  const onSave = jest.fn();
  const value = 'value';
  const wrapper = shallow(<TodoTextInput onSave={onSave}/>)
  wrapper.find('input').simulate('blur', {target: {value}});
  expect(onSave).toHaveBeenCalledWith(value)
})

