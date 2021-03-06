# React单元测试策略

### 常见的react,redux项目架构图
![An image](../images/2.png)

1.actions 测试
```javascript
//actions.js
export const saveUserComments = (comments) => ({
  type: 'saveUserComments',
  payload: {
    comments,
  },
})
//actions.test.js
import * as actions from './actions'

test('should dispatch saveUserComments action with fetched user comments', () => {
  const comments = []
  const expected = {
    type: 'saveUserComments',
    payload: {
      comments: [],
    },
  }
  
  const result = actions.saveUserComments(comments)

  expect(result).toEqual(expected)
})

```
2.reducer 测试

3.selector 测试

4.saga 测试

5.component 测试

| 组件类型       | 分支渲染逻辑           | 事件调用  | 纯UI |
| ------------- |:-------------:|:-----:| ----:|
| 展示型业务组件 | ✅ | ✅  | ❌ |
| 容器型业务组件  | ✅ | ✅  | ❌ |
| 通用 UI 组件 | ✅ | ✅  | ❌ |
| 功能型组件 | ✅  | ✅  | ❌ |

6.utils 测试

7.UI 测试