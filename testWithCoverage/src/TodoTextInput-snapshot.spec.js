import React from 'react'
import renderer from 'react-test-renderer'
import TodoTextInput from './TodoTextInput'

const noop = () => {};
// npm install -g jest
// jest -t="test case" 来执行某个测试用例

test('snapshots are awesome', () => {
  const component = renderer.create(
    <TodoTextInput editing onSave={noop}/>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
// test('b', () => {
//   expect(false).toBe(true);
// });
