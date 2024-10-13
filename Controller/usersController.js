const User = require("../models/users");

//CREATE USERS
exports.createUser = async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const newUser = new User({ name, email, age });
    const saveUser = await newUser.save();
    res.status(200).json({ message: "create new user", data: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error in creating user" });
  }
};

//GET ALL USERS
exports.getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: "fetching all users", data: users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error in fetching all user" });
  }
};

exports.home = async (req, res) => {  
  res.json("Hello from home path");
};

//UPDATE USER
exports.updateUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;
 
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, age },
      { new: true }
    );
    if(!updateUser){
        res.status(404).json('404 not found')
    }
    res.status(200).json({message: 'update users successfully', data: updateUser})
  } catch (error) {
    console.log(error)
    res.status(500).json({message: 'error in updating user'})
  }
}

//DELETE USERS
exports.deleteUser = async(req, res) =>{
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id)
        if(!deleteUser){
            res.status(404).json("404 not found")
        }
        res.status(200).json({message: `delete user with ID ${req.params.id} successful`})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'error in deleting user'})
    }
}