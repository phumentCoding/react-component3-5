import { api } from "./index"

export const fetchSlider = async () => {
    try{
        const response = await api.get('/sliders');
        return response.data
    }catch(e){
        console.error(e)
    }
    
}

export const fetchCategory = async () => {
    try{
        const response = await api.get('/categories'); 
        return response.data 
    }catch(e){
        console.error(e)
    }
    
}

export const fetchProduct = async () => {
    try{
        const response = await api.get('/products'); 
        return response.data 
    }catch(e){
        console.error(e)
    }
}


