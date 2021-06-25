import {createSlice} from '@reduxjs/toolkit'

export const productsSlice = createSlice({
    name:'products',
    initialState:{
        products:[],  // {productName,discription,quantity,price,imageUrl}
        filterQuery:""
    },
    reducers:{
        addProduct:(state,action)=>{
            const product = {
              prodId:Math.random().toString(),
              productName:action.payload.productName,
              discription:action.payload.discription.length===0?null:action.payload.discription,
              quantity:action.payload.quantity,
              price:action.payload.price,
              image:action.payload.image.length===0?null:action.payload.image
            }
            state.products.push(product);
            state.filterQuery = "";
        },
        filterProducts:(state,action)=>{
            state.filterQuery = action.payload;
        },
        editProduct:(state,action)=>{
            const id = state.products.findIndex(ele=>ele.prodId===action.payload.prodId);

            state.products[id].productName = action.payload.productName;
            state.products[id].discription = action.payload.discription;
            state.products[id].quantity = action.payload.quantity;
            state.products[id].price = action.payload.price;
            state.products[id].image = action.payload.image;
        },
        sortPrice:(state,action)=>{
            if(action.payload)
            {
                state.products = state.products.sort((a,b)=>a.price - b.price)
                return
            }

            state.products = state.products.sort((a,b)=>-(a.price - b.price))
        },
        sortQuantity:(state,action)=>{
            if(action.payload)
            {
                state.products = state.products.sort((a,b)=>a.quantity - b.quantity)
                return
            }

            state.products = state.products.sort((a,b)=>-(a.quantity - b.quantity))
        }
    }
})

export default productsSlice.reducer;
export const {addProduct,filterProducts,editProduct,sortPrice,sortQuantity} = productsSlice.actions;
