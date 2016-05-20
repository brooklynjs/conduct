const request = require('request')
const express = require('express')

const app = express()

app.use(require('cors')())
app.use(require('body-parser').json())
app.use(require('body-parser').urlencoded({ extended: false }))

const mentions = ' <@willman> <@jasmine> <@jenn> <@kosamari> <@brianloveswords>'
app.use(function (req, res) {
  request.post({
    uri: process.env.SLACK_URL,
    json: {
      username: 'Incident',
      icon_emoji: ':japanese_ogre:',
      text: (req.body.Body || req.body.body || req.body.description) + mentions
    }
  })
  res.status(204).end()
})

app.listen(process.env.PORT || 8080)
