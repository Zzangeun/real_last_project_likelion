import React, {Component} from 'react'

const dummy_prop = {
    title:'테스트 타이틀',
    content: '테스트 글',
}

export default class PostView extends Component{
    render(){
        const {title, content} = this.props 
        return(
            <div>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        )
    }
}