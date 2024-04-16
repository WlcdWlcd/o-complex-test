'use client'
import React from "react";
import Product from "./product";

import InfiniteScroll from "react-infinite-scroll-component";

//компонент товаров, содержит Infinity scroll
class Products extends React.Component {
    constructor(props){
        super(props);
        this.state={
            products:[],
            isLoaded:false,
            error:null,
            currentPage:1
        };
        this.getData()

        this.getData = this.getData.bind(this)
    }


    //получение товаров через ajax
    async getData (){

        let prefix = 'http://'
        let url = 'o-complex.com:1337'
        let postfix = '/products'
        let page = `?page=${this.state.currentPage}`
        let pageSize = `&page_size=${20}`
        let fullUrl = prefix+url+postfix+page+pageSize
        this.setState((state)=>{return {currentPage:state.currentPage+1}})
        fetch(fullUrl)
            .then(res => res.json())
            .then(
                (result)=>{

                    this.setState((state)=>{
                        return {isLoaded: true,
                                products: state.products.concat(result.products)}
                    
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                        });   
                }   
                )
        }
        

    
    renderProducts() {
        console.log(this.state.products)
        return this.state.products.map(item => {
            const id = item.id
            const image_url = item.image_url
            const title = item.title
            const description = item.description
            const price = item.price

            return <Product
                key = {id}
                id={id}
                image_url={image_url}
                title={title}
                description={description}
                price={price}
            />})


    }


    render(){


        const element = (

            <div>
                <InfiniteScroll

                    dataLength={this.state.products.length}
                    next = {this.getData}
                    hasMore={true}
                    loader={<h4>Загрузка...</h4>}
                    endMessage = {<p>конец</p>}
                    className="grid 2xl:grid-cols-3 lg:grid-cols-2 max-w-screen content-center justify-items-center max-w-screen-2xl"
                >
                    {this.renderProducts()}
                </InfiniteScroll>
            </div>)


        return element
    }
}

export default Products;