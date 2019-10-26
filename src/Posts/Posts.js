import React, { useEffect } from 'react'
import * as postsAction from './posts.action'
import { connect } from 'react-redux'

const mapDispatchProps = (dispatch) => {
    return {
        setPosts: posts => dispatch(postsAction.setPosts(posts))
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts
    }
}

const posts = {
    "results": [
        {
            id: 1,
            username: "zamarrowski",
            picture: "https://picsum.photos/id/231/500/500",
            likes: 25,
            comments: [
                {
                    username: "jacobo",
                    content: "Foton!!!"
                }
            ]
        },
        {
            id: 2,
            username: "pekerod",
            picture: "https://picsum.photos/id/221/500/500",
            likes: 13,
            comments: []
        }
    ]
}

const Posts = props => {
    useEffect(() => {
        console.log(posts.results)
        props.setPosts(posts.results)
    }, [])

    return (
    <>
    <h1>Posts</h1>
    <ul>
        {props.posts.map((post, key) => (
          <li>
              <img src = { post.picture }></img>
          </li>  
        ))}
    </ul>
    </>
    )
}

export default connect(mapStateToProps, mapDispatchProps)(Posts)