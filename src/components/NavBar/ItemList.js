import Item from "./Item";

const ItemList = ({products}) => {
   console.log("products en ItemList", products) 
    return <>
    <h3>Soy el Item</h3>
        {products.map(product => {
            console.log(product)
            return <Item key={product.id} title={product.title} price={product.price}/>
        }

        )
        }
    </>
    ;
}
export default ItemList