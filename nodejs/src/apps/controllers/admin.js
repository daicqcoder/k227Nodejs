const UserModel = require("../models/user");
const ProductModel = require("../models/product");

const index = async (req, res) => {
    
    const users = (await UserModel.find()).length;
    const products = (await ProductModel.find()).length;
    res.render("admin/dashboard", {users, products});
}

module.exports = {
    index:index
}