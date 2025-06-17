
import { useDispatch,useSelector } from "react-redux";
import Category from "../components/Category";
import ProductList from "../components/ProductList";
import Slider from "../components/Slider";
import { useEffect } from "react";
import { getCategory, getProduct } from "../stores/homeStore";

const Home = () => {

    const dispatch = useDispatch();  //dispatch we used for call action from store

    const categories = useSelector( (state) => {
        return state.homeStore.categories
    });  //selector we used for get state (data) from store
    const products = useSelector(state => state.homeStore.products);


    useEffect(() => {
        dispatch(getCategory());
        dispatch(getProduct());
    }, [dispatch]);



    return (
        <>
          <Slider/>
            <div className=" container bg-success">
                <Category data={categories}/>
                <ProductList data={products}/>
            </div>
        </>
    );
}

export default Home;