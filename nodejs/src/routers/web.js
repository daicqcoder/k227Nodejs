const express = require("express");
const router = express.Router();
// Import Controller
const TestController = require("../apps/controllers/test");
const AuthController = require("../apps/controllers/auth");
const AdminController = require("../apps/controllers/admin");
const ProductController = require("../apps/controllers/product");

// Import Middleware
const AuthMiddleware = require("../apps/middlewares/auth");
router.get("/", (req, res)=>{
    res.send("<h1>Welcome NodeJS !</h1>");
});
router.get("/test", TestController.test);
router.get("/test1", TestController.test1);
router.get("/test2", TestController.test2);

// Router Admin
router.get("/admin/login", AuthMiddleware.checkLogin, AuthController.getLogin);
router.post("/admin/login", AuthMiddleware.checkLogin, AuthController.postLogin);
router.get("/admin/logout", AuthMiddleware.checkAdmin, AuthController.logout);
router.get("/admin/dashboard", AuthMiddleware.checkAdmin, AdminController.index);
/// Router Product
router.get("/admin/products", AuthMiddleware.checkAdmin, ProductController.index);
router.get("/admin/products/create", AuthMiddleware.checkAdmin, ProductController.create);
router.get("/admin/products/edit/:id", AuthMiddleware.checkAdmin,ProductController.edit);
router.get("/admin/products/delete/:id", AuthMiddleware.checkAdmin,ProductController.del);

// Export
module.exports = router;