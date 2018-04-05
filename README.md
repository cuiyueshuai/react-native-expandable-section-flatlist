react-native-expandable-section-flatlist
================================================
  
react-native-expandable-section-flatlist 是一个纯js编写的可伸缩列表，类似于QQ列表形式，在react-native 0.43后，大列表推荐使用FlatList，作为FlatList的扩展组件，能同时运行在android和iOS双平台下,并同时支持原FlatList的大部分属性

![](https://github.com/cuiyueshuai/react-native-expandable-section-flatlist/raw/master/showCase.gif)

安装
----------------------------------------------

```bash
npm install react-native-expandable-section-flatlist --save
```

**注意**: 
 
 * 如你使用的react-native版本是0.43之前，请使用[react-native-expandable-section-list](https://github.com/cuiyueshuai/react-native-expandable-section-list),他是类似的ListView组件扩展的可伸缩列表
 * react-native-expandable-section-flatlist 与 [react-native-expandable-section-list](https://github.com/cuiyueshuai/react-native-expandable-section-list) 是同样的组件实现，用法一样，只是在0.43版本后推荐使用高性能列表FlatList而做的再一次扩展

用法
--------------------------------------------

**数据源：**

```
  const MockData = [
        ...
        {
            header: 'sectionHeader',
            member: [
            ...
                {
                    title: 'memberTitle',
                    content: 'content',
                },
            ...
            ]
        },
        ...
    ]
```

**使用：**

```javascript
import ExpanableList from 'react-native-expandable-section-flatlist';

class Example extends React.PureComponent {
  _renderRow = (rowItem, rowId, sectionId) => <Text>{rowItem.title}</Text>;
  _renderSection = (section, sectionId)  => <Text>{section}</Text>;

  render() {
    return (
      <ExpanableList
        dataSource={MockData}
        headerKey="title"
        memberKey="member"
        renderRow={this._renderRow}
        renderSectionHeaderX={this._renderSection}
        openOptions={[1,2,]}
      />
    );
  }
}
```
**扩展：** 用法详细可参见源代码中example


属性
-------------------------------------------

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| dataSource | - | `array` | 指定导入的数据源，格式规范如上所述，必需属性 |
| headerKey | 'header' | `string` | 指定数据源中组头数据的键值 |
| memberKey | 'member' | `string` | 指定数据源中组成员数据的键值 |
| renderSectionHeaderX | - | `function` | 每一个列表分组组头的渲染回调 |
| renderRow | - | `function` | 列表分组中每个成员行的渲染回调 |
| renderSectionFooterX | - | `function` | 每一个列表分组组尾的渲染回调 |
| headerOnPress | false | `boolean` | 点击打开关闭列表分组组头的回调 |
| isOpen | false | `boolean` | 默认是否打开全部分组 |
| openOptions | - | `array` | 可选单独打开某几个分组 |
| rowNumberCloseMode | - | `number` | 关闭分组状态下仍然渲染行个数 |

方法
-------------------------------------------

`scrollToSection`: 滑动到指定分组

```
scrollToSection(params)
```

有效的params属性：

* 'animated' (boolean) - 列表滑动时是否包含动画，默认值`true`
* 'section' (number) - 列表滑动到指定分组的分组下标，必需属性

Licence
-------------------------------------------

(MIT)

