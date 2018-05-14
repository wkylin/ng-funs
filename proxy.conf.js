const PROXY_CONFIG = [
  {
    context: [
      '/api/post',
      '/api/comments',
      '/api/profile'
    ],
    target: 'http://localhost:3000',
    secure: false
  }
]

module.exports = PROXY_CONFIG
