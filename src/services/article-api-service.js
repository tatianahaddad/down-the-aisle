import config from '../config'
//import TokenService from '../services/token-service'

const ArticleApiService = {
  getArticles() {
    return fetch(`${config.NEWS_ENDPOINT}`, {
      headers : {
        "x-api-key": `${config.API_KEY}`
      }
    })
      .then(res=> 
        res.json())
  },

  postArticles(url) {
    console.log(url, 'url')
    return fetch(`${config.API_ENDPOINT}/api/articles`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        //'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        url
      }),
    })
    .then(console.log('done running'))
  },

  postComment(articleUrl, text) {
    console.log(articleUrl, text)
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        //'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        article_url: articleUrl,
        text,
      }),
    })
    .then(res => 
      res)
      /*.then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )*/
  }
}

export default ArticleApiService
