import React, {Component} from 'react';
import './main.scss';
import Article from "../article/Article";
import postai from "../data/postai";

/*function Main() {
    const postData = postai.map(post => <Article key={post.id} title={post.title} text={post.text}/>)
    return (
            <main>
                {postData}
            </main>
        )
    }*/

    class Main extends Component{
        constructor(){
            super()
            this.state = {
                places: []
            }
        }

        componentDidMount(){
            fetch("https://api.meteo.lt/v1/places")
                .then(response => response.json())
                .then(data =>{
                    this.setState({
                        places:data
                    })
                })
        }
        render(){
        const placesData = this.state.places.map(place => <li key={place.id}>{place.name}</li>)

            return (
                <main>
                    <ul>
                    {placesData}
                    </ul>
                </main>
            )
        }
    }

export default Main;