import React, { Component } from 'react'
import ArticleApiService from '../../services/article-api-service'
import './CommentForm.css'

export class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setError: null, 
      addComment:{}
    };
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const article_url = this.props.articles.url
    const { text } = ev.target
    console.log(text.value)
    
    ArticleApiService.postComment(article_url, text.value )
    //.then(this.context.addComment)
    .then(() => {
      text.value = ''
    })
    .catch(this.state.setError)
  }

  render() {
    return (
      <form
        className='CommentForm'
        onSubmit={this.handleSubmit}
      >
        <div className='text'>
          <textarea
            className= 'comment-text'
            required
            aria-label='Type a comment...'
            name='text'
            id='text'
            cols='30'
            rows='3'
            placeholder='Type a comment...'>
          </textarea>
        </div>
        <div className='button-container-comment'>
        <button type='submit' className='comment-submit'>
          Submit
        </button>
        </div>
      </form>
      
    )
  }
}


export default CommentForm
