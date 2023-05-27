const mongoose  = require("../../common/database")();
const userSchema = new mongoose.Schema({
    email : {
        type: String,
        require: true,
    },
    password:{
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    full_name: {
        type: String,
        default: null,
    }
}, {
    timestamps: true,
});

const UserModel = mongoose.model("User", userSchema, "users");

module.exports = UserModel ;