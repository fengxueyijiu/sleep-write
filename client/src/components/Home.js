import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
class Home extends Component {
   constructor(){
   super();
   this.state={
      data: []
     }
   }
  componentWillMount(){
    axios.get('http://localhost:4000/posts')
        .then( res => this.setState({data:res.data.posts}) )
   }
  render(){
     let postList = this.state.data.map( (post,i) => (
       <Link to={`/posts/${post._id}`} key={i} className='post-card'>
         {post.title}
       </Link>
     ) )
     return(
       <div>
         <Link className="new-post" to='/new'>New Post!!</Link>
         {postList}
       </div>
     )
   }
 }

 export default Home;
