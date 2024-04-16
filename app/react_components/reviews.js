'use client'
import React from "react";

import Review from "./review";

//компонент который содержит отзывы
class Reviews extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rewiews: [],
            isLoaded: false,
            error: null
        }
    }


    //получение отзывов через ajax
    async getData() {

        let prefix = 'http://'
        let url = 'o-complex.com:1337'
        let postfix = '/reviews'

        let fullUrl = prefix + url + postfix

        fetch(fullUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        rewiews: result
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

    componentDidMount(){
            this.getData()
        }
        

        render() {
            const { rewiews,isLoaded,error } = this.state;
            if (error) return (<div>Ошибка:{error.message}</div>);
            if (!isLoaded) return (<div>Загрузка...</div>)

            const element = (
                <div className="grid  md:grid-cols-2 max-w-5xl mx-5 gap-5 content-center mt-5 justify-items-center min-w-80">
                    {
                        rewiews.map(item => {
                            return <Review data = {item.text}/>
                        }
                        )
                    }
                </div>)

            return element


        }

}

export default Reviews