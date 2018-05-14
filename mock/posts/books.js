module.exports = function (req, res, next) {
  res.json([
    {'title': 'Angular权威教程'},
    {'title': 'Learning TypeScript中文版'},
    {'title': '深入理解ES6'}
  ])
}
