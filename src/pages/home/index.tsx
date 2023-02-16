import ProductCard from "../../components/product/ProductCard"

function Home() {
    const res = fetch('https://fakestoreapi.com/products/1')
        .then(res => res.json())
        .then(json => console.log(json))
    return (
        <div>
            <div>Home Page</div>
            <ProductCard />
        </div>
    )
}

export default Home