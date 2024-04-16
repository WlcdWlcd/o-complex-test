'use client'
import React from "react";

import Input from "./Input";


//компонент корзины. Не доделан, в нее не добавляются товары а так же не работает кнопка заказать
function Cart() {
    const element = (
        <form className= 'max-w-3xl bg-white mt-10 rounded-2xl p-2 m-auto '>
            <p className="text-4xl">Добавленные товары</p>
            <div>
                <p className="text-left">товар</p>
            </div>
            <div>
                <p className="text-left">товар</p>
            </div>
            <div className="text-left">
                <div className=''>
                    <Input></Input>
                    <button className="bg-neutral-900 rounded-2xl text-4xl text-white p-2 mt-1 ">заказать</button>
                </div>
            </div>
        </form>
    )

    return element
}

export default Cart;