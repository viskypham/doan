const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')

app.listen(3000, () => {
    console.log('App listening on port 3000')
   })

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/shop', (req, res) => {
    res.render('shop')
})
app.get('/livingroom', (req, res) => {
    res.render('livingroom')
})
app.get('/kitchen', (req, res) => {
    res.render('kitchen')
})
app.get('/decoration', (req, res) => {
    res.render('decoration')
})
app.get('/blog', (req, res) => {
    res.render('blog')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})
app.get('/sanpham1', (req, res) => {
    res.render('sanpham1')
})
app.get('/sanpham2', (req, res) => {
    res.render('sanpham2')
})
app.get('/sanpham3', (req, res) => {
    res.render('sanpham3')
})
app.get('/sanpham4', (req, res) => {
    res.render('sanpham4')
})
app.get('/account', (req, res) => {
    res.render('account')
})
app.get('/lostpassword', (req, res) => {
    res.render('lostpassword')
})
app.get('/cart', (req, res) => {
    res.render('cart')
})
