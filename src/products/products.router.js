const router = require('express').Router()

const productsServices= require('./products.services'); 

router.route("/")
  .get(productsServices.getAllProducts)
  .post(productsServices.postNewProduct);


  router.route("/:id")
  .get(productsServices.getProductById)
  .patch(productsServices.patchProduct)
  .delete(productsServices.deleteProduct);



module.exports = router