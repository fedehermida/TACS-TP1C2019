const bodyparser = require('body-parser')
const express = require('express');
const mongoose = require('mongoose')
const Form = require('./models/formulario')

const app = express();

app.use(bodyparser.urlencoded({extended:true}))

app.get('/', (req, res, next) => {
	
   res.sendFile('views/form.html', {root: __dirname });
})

app.post('/', (req, res, next) => {
   const formulario = new Form( {name:req.body.name, sirname:req.body.apellido, mail:req.body.email, telephone:req.body.tel, web:req.body.web, comment:req.body.comentario }) 
   console.log({nombre:req.body.name, sirname:req.body.apellido, mail:req.body.mail, telephone:req.body.tel, web:req.body.web, comment:req.body.comentario })
   formulario.save()
   res.redirect('/');
})

mongoose.connect("mongodb://localhost:27017/tacs").then(res => {
   app.listen(8080)
}).catch(
   err => console.log(err)
)