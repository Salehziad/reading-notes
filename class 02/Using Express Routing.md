# Using Express Routing
> - A route method is derived from one of the HTTP methods, and is attached to an instance of the express class. The following code is an example of routes that are defined for the GET and the POST methods to the root of the app. Express supports methods that correspond to all HTTP request methods: get , post , and so on.


> ```
   var express = require('express')

   var router = express.Router()

   // middleware that is specific to this router

   router.use(function timeLog (req, res, next) {

   console.log('Time: ', Date.now())

   next()
   })

   // define the home page route

   router.get('/', function (req, res) {

   res.send('Birds home page')

   })

   // define the about route

   router.get('/about', function (req, res) {
       
   res.send('About birds')
   })

   module.exports = router
```