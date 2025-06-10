
import Category from "../components/Category";
import ProductList from "../components/ProductList";
import Slider from "../components/Slider";

const Home = () => {
    return (
        <>
          <Slider/>
            <div className=" container bg-success">
                <Category data={[0,1]}/>
                <ProductList data={[2,2,2,2,2,2,2,2,2,2,2,2]}/>
            </div>
        </>
    );
}

export default Home;