import React, {useState} from "react";
import ReactDOM from "react-dom";

export default () => {

    function ProductCategoryRow(props) {
        const category = props.category;
        console.log("ProductCategoryRow")
        return (
            <tr>
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        );
    }

    function ProductRow(props) {
        const product = props.product;
        const name = product.stocked ?
            product.name :
            <span style={{color: 'red'}}>
        {product.name}
      </span>;
        console.log("ProductRow")
        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }


    function ProductTable() {
        let data = useData();

        const filterText = data.filterText;
        const inStockOnly = data.inStockOnly;

        const rows = [];
        let lastCategory = null;
        console.log(data)
        data.products.forEach((product) => {
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                        category={product.category}
                        key={product.category}/>
                );
            }
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name}/>
            );
            lastCategory = product.category;
        });
        console.log("ProductTable")
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }


    function SearchBar() {
        let data = useData();

        function handleFilterTextChange(e) {
            data.setFilterText(e.target.value);
        }

        function handleInStockChange(e) {
            data.setInStockOnly(e.target.checked);
        }

        console.log("SearchBar")
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={data.filterText}
                    onChange={handleFilterTextChange}
                />
                <p>
                    <input
                        type="checkbox"
                        checked={data.inStockOnly}
                        onChange={handleInStockChange}
                    />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );

    }

    function FilterableProductTable() {
        return (
            <div>
                <SearchBar/>
                <ProductTable/>
            </div>
        );

    }

    //1. 创建上下文
    let DataContext = React.createContext(null);

    function ContextProvider(props) {
        let [filterText, setFilterText] = useState("");
        let [inStockOnly, setInStockOnly] = useState(false);


        const products = [
            {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
            {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
            {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
            {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
            {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
            {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
        ];
        let value = {products, filterText, setFilterText, inStockOnly, setInStockOnly}
        // 2 包裹需要共享数据的组件
        return <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
    }

    function useData() {
        //3 子组件中调用共享的数据
        return React.useContext(DataContext);
    }


    ReactDOM.render(
        <ContextProvider><FilterableProductTable/></ContextProvider>,
        document.getElementById('root')
    );
}
