# 什么是好的单元测试

    1.只关注输入输出，不关注内部实现

    2.只测一条分支

    3.表达力极强

    4.不包含逻辑

    5.运行速度快

### 相关代码

1.函数测试

``` javascript
    function add(a,b){
        return a + b
    }
    it('会返回想要的和：5', () => {
        let a = 3,b = 2;
        let result = add(a,b);
        expect(result).toBe(5)
    });
```

2.组件测试

```javascript
//组件Button.js(hook)
import React from 'react'

function Button(props) {
    props.onClick = !props.onClick ? new Function('test') : props.onClick
    props.text = !props.text ? '' : props.text
    return (
      <button onClick={props.onClick}>{props.text}</button>
    )
}

export default Button
//测试 Button.spec.js
import Button from './Button'
import {shallow} from 'enzyme';
test('渲染出来的一定是text文本的按钮', () => {
  const text = 'text';
  const button = shallow(<Button text={text}/>);

  console.log(button)
  expect(button.type()).toBe('button');
  expect(button.text()).toBe(text);
});

test('含有点击事件的按钮', () => {
  const onClick = jest.fn();
  const button = shallow(<Button onClick={onClick}/>);
  button.simulate('click');
  expect(onClick).toBeCalled();
});


```
