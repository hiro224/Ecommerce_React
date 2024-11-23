import { useEffect, useState } from "react";
import { fetchProduct } from "@/services/api";
import { Card, CardContent, CardFooter, CardTitle } from "../components/ui/card";
import truncateText from "@/services/helper";


interface Product{
  id : string;
  title : string;
  description: string;
  price: string;
  images: string;
}

const Products = () => {
  const [product, setProduct] = useState<Product[]>([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProduct();
        setProduct(data.products);
      } catch (error) {
        console.error("Failed to load product", error);
      }
    };
    getProduct();
  }, []);

  return (
    <div className="mx-5 my-10 place-content-center w-full">
      {product ? (
        <div className="grid grid-cols-4 gap-4 place-content-center">
        {product.map((products: Product)=>(
        <Card className="w-[270px] my-3" key={products.id}>
          <CardTitle className="p-5">
          <h2>{products.title}</h2>
          </CardTitle>
          <CardContent className="place-items-center" >
          <img src={products.images} alt="" className="place-items-center w-[150px] h-[150px]"/>
          <p className="font-light text-sm">{truncateText(products.description,50)}</p>
          <p className="pl-[120px] font-bold">Price: ${products.price}</p>
          </CardContent>
          <CardFooter className="place-content-end">
            <button className="">Add to</button>
          </CardFooter>
        </Card>
      ))}
      </div>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
};

export default Products;
