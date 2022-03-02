"use strict"
const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')

const PORT = process.env.PORT || 5656
const URL = 'https://whatfromapi.herokuapp.com/actor/'

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('pages/index', {
    "url": URL
  })
})

app.get('/artist/:id', (req, res) => {
  let artist = req.params.id
  axios.get(`${URL}${artist}`, {
    timeout: 8000
  })
    .then(response => {
      res.render('pages/artist-template', {
        "data": response.data[1],
        "name": response.data[0][0].name,
        "profilePic": response.data[0][0].profilePic,
        "mainPage": response.data[0][0].mainPage
      })
    })
    .catch((error) => {
      if(error.request) {
        console.log(error.request._events.response)
        console.log(error.request._events.error)
        console.log(error.request.socket)
        res.redirect(`/error/${artist}`)
      }
    })
})
app.get('/error/:id', (req, res) => {
  res.render('pages/error-page', {
    "artist": req.params.id
  })
})

app.listen(PORT, ()=> console.log(`Listening at http://localhost:${PORT}`))