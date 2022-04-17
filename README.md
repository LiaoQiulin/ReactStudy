# 一 **React 构建可搜索产品数据表的思考过程**

## 1 将 UI 分解为组件层次结构

* FilterableProductTable

  * SearchBar
  * ProductTable

    * ProductCategoryRow
    * ProductRow

## 2 在 React 中构建静态版本: ``StaticVersion.js``

## 3 识别 UI 状态的最小（但完整）表示

**符合以下三种情况之一，它可能不是状态**

``Ask three questions``
>1. 它是通过 props 从父级传入的吗?
>2. 它会随着时间的推移保持不变吗？
>3. 您可以根据组件中的任何其他状态或道具来计算它吗?

## 4 确定您状态所在组件: ``StateLive.js``

## 5 添加反向数据流: ``AddInverseDataFlow.js``


# 二 Hooks 改造
# 三 引入 useContext


