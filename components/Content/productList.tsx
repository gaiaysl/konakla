



interface ProductProps {
    id: number;
    title: string;
    images: any;
    category: string [];
    price: number;
    description: string;
    shortDescription: string;
    metaTags: string[];
    filteredProducts: ProductProps[];
    slug:string;
  }
  
  const ProductList: React.FC<ProductProps> = ({  title, images, category, price, description, shortDescription, metaTags }) => {

   
    return (
      
      <div className="m-2 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform transition-all duration-500 hover:scale-105 ">
      
      <div className="p-4 ">
        <a className="text-2xl font-bold mb-2 ">{title}</a>
        <img src={images} className="w-full h-72 object-fill" alt={""}  />
        <p className="text-gray-700 text-lg mt-4 ">kategori : {category}</p>
        <p className="text-gray-700 text-lg mb-4">fiyat :  {price}</p>
        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-xl">
          favorilere ekle
        </button>
      </div>
    </div>
    );
  };

  export default ProductList;


