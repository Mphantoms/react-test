import React from 'react'
import Enzyme, {shallow, mount} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Controlled from './controlled'

Enzyme.configure({adapter: new EnzymeAdapter()});


test('submit form', () => {

  const onSubmit = jest.fn();
  const wrapper = shallow(<Controlled onSubmit={onSubmit}/>)
  const firstName = wrapper.find('#firstName');
  firstName.simulate('change', {
    target: {
      name: 'firstName',
      value: "kevin",
    }
  });
  const lastName = wrapper.find('#lastName')
  lastName.simulate('change', {
    target: {
      name: 'lastName',
      value: "wang",
    }
  });

  const form = wrapper.find('form');
  form.simulate('submit', {preventDefault:() => {}});

  expect(onSubmit).toHaveBeenCalledWith('kevin wang');
});


class Page {
  constructor(wrapper) {
    this.wrapper = wrapper;
  }

  fill(name, value) {
    const field = this.wrapper.find(`#${name}`);
    field.simulate('change', {
      target: {
        name,
        value
      }
    });
  }

  submit() {
    const form = this.wrapper.find('form');
    form.simulate('submit', {preventDefault:() => {}});
  }
}

test('submit form with pageObject', () => {

  const onSubmit = jest.fn();
  const wrapper = shallow(<Controlled onSubmit={onSubmit}/>)
  const page = new Page(wrapper);
  page.fill('firstName', 'kevin');
  page.fill('lastName', 'wang');
  page.submit();

  expect(onSubmit).toHaveBeenCalledWith('kevin wang');
});
