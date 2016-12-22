import React, { PropTypes } from 'react';
import axios from 'axios';
class Post extends React.Component {
  constructor(){
    super();
    this.state={
      title:'',
      content:''
    }
  }
  componentWillMount(){
    axios.get(`http://localhost:4000/posts/${this.props.params.id}`)
         .then(res => {console.log(res);
                      this.setState({
                        title:res.data.post.title,
                        content:res.data.post.content
                      })}
                )
  }
  render () {
    return(
      <div className='post-wrapper'>
         <div className='title'>{this.state.title}</div>
         <div className='content'>
            { this.state.content }
         </div>
      </div>
    )
  }
}

export default Post;
