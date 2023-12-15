import { IShop } from "../types"
import { ADDRESS_SERVER } from "./contants"

export const getShopWithCheapProduct = (idProduct: number): Promise<IShop> => {
    return new Promise((resolve, reject) => {
        fetch(`${ADDRESS_SERVER}/Server`, {
            method: "post",
            body: JSON.stringify({ 
                "Type": "GET_SHOP_WITH_CHEAP_PRODUCT",
                "IdProduct": idProduct
            }),
        }).then((res)=>{
            if(res.ok){
                resolve(res.json())
            }
            
        }).catch((e)=>{
            alert("Ошибка HTTP: " + e)
            reject("Ошибка HTTP: " + e);
        })
    })
}