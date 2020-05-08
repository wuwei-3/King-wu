<!--
 * @Description: 按钮
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-07 15:42:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-07 21:44:18
 -->

## Button 按钮

### 基础用法

使用`type`、`plain`和`round`属性来定义 Button 的样式。

<div class="demo-block">
  <div>
    <bi-button>默认按钮</bi-button>
    <bi-button type="primary">主要按钮</bi-button>
    <bi-button type="success">成功按钮</bi-button>
    <bi-button type="info">信息按钮</bi-button>
    <bi-button type="warning">警告按钮</bi-button>
    <bi-button type="danger">危险按钮</bi-button>
  </div>
  <div class="m-10">
    <bi-button plain>朴素按钮</bi-button>
    <bi-button type="primary" plain>主要按钮</bi-button>
    <bi-button type="success" plain>成功按钮</bi-button>
    <bi-button type="info" plain>信息按钮</bi-button>
    <bi-button type="warning" plain>警告按钮</bi-button>
    <bi-button type="danger" plain>危险按钮</bi-button>
  </div>
  <div class="m-10">
    <bi-button round>圆形按钮</bi-button>
    <bi-button type="primary" round>主要按钮</bi-button>
    <bi-button type="success" round>成功按钮</bi-button>
    <bi-button type="info" round>信息按钮</bi-button>
    <bi-button type="warning" round>警告按钮</bi-button>
    <bi-button type="danger" round>危险按钮</bi-button>
  </div>
</div>

### Attributes

| 参数     | 说明                         | 类型    | 可选值                              | 默认值 |
| -------- | ---------------------------- | ------- | ----------------------------------- | ------ |
| size     | 尺寸                         | string  | default,medium,small                | —      |
| type     | 类型                         | string  | primary,success,warning,danger,info | —      |
| plain    | 是否朴素按钮                 | Boolean | —                                   | false  |
| disabled | 是否禁用状态                 | boolean | —                                   | false  |
| icon     | 图标，已有的图标库中的图标名 | string  | —                                   | —      |
