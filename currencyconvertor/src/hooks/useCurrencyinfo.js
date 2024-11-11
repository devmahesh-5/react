import { useEffect, useState } from "react";
//hooks are used to update the ui and they are nothing but method returning the value of the variable
const useCurrencyinfo = (currency) => {
    const [data, setData] = useState({});
    useEffect(()=>{

    //    try{
    //     const url=fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
    //     const res= url.json();
    //     setData(res);
    //    }catch{

    //    }
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then(res=>res.json())
    .then(data=>setData(data[currency]))
    .catch(err=>console.log(err));
        console.log(data);
        
    },[currency]);
    return data;
}

export default useCurrencyinfo