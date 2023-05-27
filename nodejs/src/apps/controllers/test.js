const CategoryModel = require("../models/category");
const ProductModel = require("../models/product");
const test = async (req, res) => {
    req.session.email = "vietpro.email@gmail.com";
    res.send("session is defined");
}

const test1 = (req, res) => {
    if(req.session.email){
        res.send("session is defined");
    }else{
        res.send("session is not define");
    }
}

const test2 = (req, res) => {
    req.session.destroy();
}

module.exports = {
    test:test,
    test1:test1,
    test2:test2
}