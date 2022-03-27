# **React 构建可搜索产品数据表的思考过程**

# 1 将 UI 分解为组件层次结构

* FilterableProductTable

  * SearchBar
  * ProductTable

    * ProductCategoryRow
    * ProductRow

# 2 在 React 中构建静态版本: ``StaticVersion.js``

# 3 识别 UI 状态的最小（但完整）表示

* The search text the user has entered
* The value of the checkbox

# 4 确定您状态所在组件: ``StateLive.js``

# 5 添加反向数据流: ``AddInverseDataFlow.js``

