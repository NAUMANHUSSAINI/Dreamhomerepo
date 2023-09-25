const jwt = require('jsonwebtoken');

const User = require('../model/userModel')


exports.createUser= async (req,res)=>{

    try{
        const {name,email,password} = req.body


    const user = new User({
        name,
        email,
        password
    })
    await user.save()
    res.status(200).json(user)
}
    
    catch(error){
        console.log(error)
    }
}

exports.getAllUser = async (req,res)=>{
    try{
        const user = await User.find()
        return res.status(200).json(user)
    }catch(e)
    {
        console.log(e)
    }
}

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the user by email
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ message: 'Authentication failed. User not found.' });
      }
  
      // Verify the password
      if (user.password !== password) {
        return res.status(401).json({ message: 'Authentication failed. Incorrect password.' });
      }
  
      // Generate and send an authentication token (JWT) upon successful login
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
  
      res.status(200).json({ token, userId: user._id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };