import "./Showcase.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";

export default function Showcase() {
    const product = productData.map((item) => (
        <Product
            name={item.name}
            url={item.imageurl}
            price={item.price}
            description={item.description}
            author={item.author}
        />
    ));

    return (
        <div className="App">
            <h1> </h1>
            <h1>FIND YOUR STORY</h1>
            <Carousel id='featured' showDots={true} responsive={responsive}>
                {product}
            </Carousel>
        </div>
    );
}