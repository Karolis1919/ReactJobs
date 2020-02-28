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

    /*class Main extends Component{
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
    }*/

    class Main extends Component{
        constructor(){
            super()
            this.state = {
                email:'',
                name:''
            }

            this.handleChangeEmail = this.handleChangeEmail.bind(this);
            this.handleChangeName = this.handleChangeName.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChangeEmail(event){
            this.setState({email: event.target.value});

        }

        handleChangeName(event){
            this.setState({name: event.target.value});

        }

        handleSubmit(event) {
            alert('LOL' + this.state.email + this.state.name);
            event.preventDefault();
        }

        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" value={this.state.email} onChange={this.handleChangeEmail} placeholder="email"/>
                        <input type="text" value={this.state.name} onChange={this.handleChangeName} placeholder="name"/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            );
        }
    }

export default Main;