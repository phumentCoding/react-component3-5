import { api } from ".";

export const addToCartService = async (data) => {
    try{
        const response = await api.post('/carts',data); 
        return response.data
    }catch(e){
        console.error(e)
    }
}

export const getItemFromCartService = async () => {
    try{
        const response = await api.get('/carts');
        return response.data
    }catch(e){
        console.error(e)
    }
}