import React, {Component} from 'react';
import './article.scss';

/*function Article(props) {
    return (
        <article>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <a href="#">Toliau</a>
        </article>
    );
}*/

class Article extends Component{
    constructor(){
        super()
        this.state = {
            counter: 0
        }
        this.handleClick = this.handleClick.bind(this)

}

handleClick(){
    this.setState(prevState =>{
        return{
            counter: prevState.counter + 1
            }
        })
    }

render(){
    return(
        <article>
            <h3>{this.props.title}</h3>
            <p>{this.props.text}</p>
            <p>{this.state.counter}</p>
            <a onClick={this.handleClick} href="#">Can't touch this</a>
        </article>
        )
    }
}


export default Article;