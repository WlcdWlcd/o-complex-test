import Image from "next/image";

import "./static/page.css"
import Review from "./react_components/review";
import Cart from "./react_components/cart";
import Products from "./react_components/products";
import Reviews from "./react_components/reviews";

export default function Home() {
  return (
    <main className="flex justify-center items-center bg-neutral-900" >
      <div className="flex min-h-screen flex-col items-center p-24  text-center break-words max-w-screen-2xl">
        <div className= "bg-neutral-500 text-white w-full rounded-2xl p-2 ">
          <h1 className="sm:text-5xl">тестовое задание</h1>
        </div>
       <Reviews/>
        <div>
          <Cart/>  
        </div>
        <div>
          <Products/>
        </div>
      </div>
    </main>
  );
}
