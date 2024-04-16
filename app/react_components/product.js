'use client'
import React from "react";

import BuyButton from "./buyButton";


// компонент с карточкой товара
class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            count:0 // кол-во товара, если 0 - появляется кнопка купить, иначе кнопочки +,-, кол-во товара
        };

    }

    buy(){

    }

    render(){
        const element = (<div className= "flex flex-col bg-white text-black p-2 rounded-2xl w-96 mt-5">
            <img src={this.props.image_url} className="rounded-2xl w-full"/>
            <p className="font-bold text-3xl">{this.props.title}</p>
            <p className="text-left">{this.props.description}</p>
            <p className="font-bold text-3xl mt-auto ">цена: {this.props.price}</p>
            <BuyButton absolute inset-x-0 bottom-0 className="self-end"/>

        </div>)

        return element
    }

}

export default Product;