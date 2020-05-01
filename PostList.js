import React, { Component } from 'react';
import './PostList.css';
import { styles } from './PostListStyle'

export default class PostList extends Component { //componente de clase
    constructor(props){
        super(props)
        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
		this.setState({
			posts: this.props.posts,
		});
	}
	render() {
        const { posts } = this.props;
        const cardsPost = posts.map((post, index) => 
            <div className='card-container'>
                <div className='post-img'>
                </div>
                <div className='post-id'>
                    {post.id}
                </div>
                <div className='post-description'>
                    <div className='post-title'>
                        <h2>{post.title}</h2>
                    </div>
                    <div className='post-body'>
                        <p>{post.body}</p>
                        <div className='post-button'>Ver Mas</div>
                    </div>
                </div>
            </div>
        );
		console.log('posts PostList', posts);
    //return <div className='container-list'>{cardsPost}</div>;
    return <div style={styles.containerList}>{cardsPost}</div>; //insertando styles js
	}
}