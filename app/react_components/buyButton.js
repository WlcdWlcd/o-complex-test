import React from "react";



//компонент для кнопок товара
export default class BuyButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count:0};
        this.buy=this.buy.bind(this)
        this.plus=this.plus.bind(this)
        this.minus=this.minus.bind(this)
    }
    buy(){
        this.setState({count:1})
    }
    
    plus(){
        this.setState({count:this.state.count+1})
    }

    minus(){
        this.setState({ count: this.state.count - 1 })
    }


    render (){
        const count = this.state.count
        if (!count) return (<button onClick={this.buy} className="bg-neutral-900 w-full text-white text-4xl rounded-2xl p-2 mt-5">Купить</button>)
        
        const element = (
            <div className="w-full inline h-auto justify-center mt-5">

                    <button onClick={this.minus} className="bg-neutral-900 text-white text-4xl w-16 h-16 rounded-2xl mr-2 inline-block">-</button>
                    <div className="bg-neutral-900 inline-block h-16 w-52 rounded-2xl p-3">
                        <span className=" text-white text-4xl">{this.state.count}</span>
                    </div>
                
                    <button onClick={this.plus} className="bg-neutral-900 text-white text-4xl w-16 h-16 rounded-2xl ml-2">+</button>

            </div>
        )

       return element


    }



}
