import React from 'react'
import Enzyme, {shallow, mount} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16';
import withData from './withData'
import getJSON from './get-json'

Enzyme.configure({adapter: new EnzymeAdapter()});


const List = ({data}) => <div>{data}</div>;

jest.mock('./get-json', () => {
  return jest.fn(() => ({then: callback => callback('customizeData')}))
});


test('passes the props to the component', () => {
  const ListWithGists = withData()(List);
  const username = 'gaearon';
  const wrapper = shallow(<ListWithGists username={username}/>);
  expect(wrapper.prop('username')).toBe(username);
});

test('url is string', () => {
  const url = 'http://a.b.c';
  const ListWithGists = withData(url)(List);

  mount(<ListWithGists/>);

  expect(getJSON).toHaveBeenCalledWith(url);
});


test('url is function', () => {
  const url = jest.fn((props) => (
    `http://a.b.c/${props.username}`
  ));
  const ListWithGists = withData(url)(List);
  const props = {username: 'kevin'};

  mount(<ListWithGists {...props}/>);

  expect(url).toHaveBeenCalledWith(props);
  expect(getJSON).toHaveBeenCalledWith("http://a.b.c/kevin");
});

test('passes the data to the component', () => {
  const ListWithGists = withData()(List);
  const wrapper = mount(<ListWithGists/>);
  console.log(wrapper.find(List).props(), wrapper.text());
  expect(wrapper.find(List).prop('data')).toEqual('customizeData');
});

