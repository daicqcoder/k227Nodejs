const ProductModel = require("../models/product");
const index = async (req, res) => {
    const products = await ProductModel.find().populate({path: "cat_id"})
    res.render("admin/products/product", {products});
}

const create = (req, res) => {
    res.render("admin/products/add_product");
}

const edit = (req, res) => {
    res.render("admin/products/edit_product");
}

const del = (req, res) => {
    res.send("delete product");
}

module.exports = {
    index:index,
    create:create,
    edit:edit,
    del:del
}