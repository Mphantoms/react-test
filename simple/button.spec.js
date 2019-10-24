import React from 'react'
import TestUtils from 'react-dom/test-utils'
import { createRenderer } from 'react-test-renderer/shallow';
import Button from './button'


test('works', () => {
  expect(true).toBe(true);
});

test('renders with text', () => {
  const text = 'text';
  const renderer = createRenderer();
  renderer.render(<Button text={text}/>);
  const button = renderer.getRenderOutput();
  // console.log(button)
  expect(button.type).toBe('button');
  expect(button.props.children).toBe(text);
});


test('test onClick callback', () => {
  const onClick = jest.fn();
  const tree = TestUtils.renderIntoDocument(
    <Button onClick={onClick}/>
  );
  // console.log(tree);
  const button = TestUtils.findRenderedDOMComponentWithTag(
    tree,
    'button'
  );
  TestUtils.Simulate.click(button);
  expect(onClick).toBeCalled();
});
