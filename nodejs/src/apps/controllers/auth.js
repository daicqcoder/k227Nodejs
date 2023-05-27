const userModel = require("../models/user");

const getLogin =  (req, res) => {
    res.render("admin/login", {data:{}});
}

const postLogin = async (req, res) => {
    const { email, password} = req.body;
    let error = null;

    const users = await userModel.find({email,password});

    if(email == "" || password == "") {
        error = "Email hoặc Password không được để trống !";
    }else if(users.length > 0) {
        req.session.email = email;
        req.session.password = password;
        console.log("daocq");
        return res.redirect("/admin/dashboard");
    }else{
        error = "Email or Password not correct";
    }

   
    res.render("admin/login", {data:{error}});
}


const logout = (req, res) => {
    
    res.send("logout");
}

module.exports = {
    getLogin: getLogin,
    postLogin: postLogin,
    logout:logout
}