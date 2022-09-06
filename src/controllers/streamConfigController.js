const ChangeStreamConfig = require('../models/changeStreamConfig')
const jwt = require('jsonwebtoken');

exports.createStremConfig = async (req, res) => {
  try {
    const getConfigData = await ChangeStreamConfig.findOne({clientId: req.body.clientId});
    if(getConfigData){
      throw new Error("client's change stream config already exists");
       
    }
    const createdConfigData = await ChangeStreamConfig.create(req.body)

    if (!createdConfigData) {
      throw new Error('failed to create change stream config')
    }
   


    res.status(200).json({
      success: true,
      message: 'config created successfully',
      data: createdConfigData,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

exports.generateToken = async (req, res) => {
  let jwtSecretKey = process.env.JWT_SECRET_KEY

  const token = jwt.sign({ clientId: req.body.clientId }, jwtSecretKey, {
    algorithm: 'HS256',
    expiresIn: '7d',
  })
  res.status(200).json({
    success: true,
    message: 'generated token successfully',
    data: token,
  })
}

exports.getChangeStreamConfig = async (req, res) => {
  try {
    const configData = await ChangeStreamConfig.find({
      clientId: req.body.clientId,
    })

    res.status(200).json({
      success: true,
      message: 'config data loaded successfully',
      data: configData,
    })
  } catch (error) {
    res.status(500)({
      success: false,
      message: 'failed to load data',
    })
  }
}

exports.updateChangeStreamConfig = async(req,res) =>{
try {
  const updatedData = await ChangeStreamConfig.findOneAndUpdate({clientId: req.body.clientId},req.body,{new:true});
  
  res.status(200).json({
    success:true,
    message:"updated successfully",
    data:updatedData
  })
  
} catch (error) {
  res.status(500).json({
    success:false,
    message:"failed to update"
  })
}

}

exports.deleteChangeStreamConfig = async(req,res) =>{
  try {
    const deletedConfig = await ChangeStreamConfig.findOneAndDelete({clientId:req.body.clientId});
    res.status(200).json({
      success:true,
      message:"deleted successfully",
      data:deletedConfig
    })
    
  } catch (error) {
    res.status(500).json({
      success:false,
      message:"failed to delete the config"
    })
  }
}