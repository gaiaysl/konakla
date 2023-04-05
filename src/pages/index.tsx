import { Products } from "../../data/products";
import Layout from "../../components/Layout/Layout";
import ProductList from "../../components/Content/productList";
import { useSelector } from "react-redux";
import { useState } from "react";


const App = () => {

const[search,setSearch]=useState(Products)
  const gaye = useSelector((state: any) => state.category.selectedCategory);
  let array = search.filter(urun => urun.slug === gaye);

const handleSearch=(e:string)=>{
  const filtered=search.filter((product:any)=>product.title.toLowerCase().includes(e.toLowerCase()))
  setSearch(filtered)
}
 
  return (
    <Layout>
      <div className=" max-w-6xl mx-auto flex flex-col justify-center items-center   ">
      <input onChange={(e)=>handleSearch(e.target.value)} placeholder="şehir ismi yazınız" className="mt-8 border-2 p-1 w-96 rounded-xl mb-6 "/>
       
    <div className=" grid grid-cols-3  ">

    {array&&array.length===0 && search.map((product:any) => (
        <ProductList key={product.id} {...product} />
      ))}
      {array&&array.length>0 && array.map((product:any) => (
        <ProductList key={product.id} {...product} />
      ))}

    
    </div>
    </div>
    </Layout>
  );
};

export default App;
