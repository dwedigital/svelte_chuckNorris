module.exports = (req, res) => {
    console.log.json({
        body: req.body,
        query: req.query,
        cookies: req.cookies,
      })
    res.json({
      body: req.body,
      query: req.query,
      cookies: req.cookies,
    })
  }