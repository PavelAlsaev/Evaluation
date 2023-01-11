
module.exports = (req, res, next) => {
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate')

  next()
}
  