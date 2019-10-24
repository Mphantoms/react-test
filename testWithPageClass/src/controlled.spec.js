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
      value: "li",
    }
  });
  const lastName = wrapper.find('#lastName')
  lastName.simulate('change', {
    target: {
      name: 'lastName',
      value: "xiaoming",
    }
  });

  const form = wrapper.find('form');
  form.simulate('submit', {preventDefault:() => {}});

  expect(onSubmit).toHaveBeenCalledWith('li xiaoming');
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
  page.fill('firstName', 'li');
  page.fill('lastName', 'xiaoming');
  page.submit();

  expect(onSubmit).toHaveBeenCalledWith('li xiaoming');
});
