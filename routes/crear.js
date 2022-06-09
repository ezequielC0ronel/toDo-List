var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/lista', function(req, res, next) {
    res.render("crearLista",{});
});

router.get('/item', function(req,res){
    res.render("crearItem", {});
})
module.exports = router;