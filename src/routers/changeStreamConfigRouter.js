const express = require('express')
const {
  generateToken,
  createStremConfig,
  getChangeStreamConfig,
  updateChangeStreamConfig,
  deleteChangeStreamConfig,
} = require('../controllers/streamConfigController');
const { verifyToken } = require('../middlewares/authentication');
const { validate } = require('../middlewares/validate');
const { createChangeStreamConfigSchema, updateChangeStreamConfigSchema } = require('../validations/changeStreamConfigValidation');


const router = new express.Router()

router.post('/createConfig',verifyToken,validate(createChangeStreamConfigSchema) , createStremConfig);

router.post('/generateToken', generateToken);

router.get('/getConfig',verifyToken, getChangeStreamConfig);

router.patch('/updateConfig',verifyToken,validate(updateChangeStreamConfigSchema) ,updateChangeStreamConfig);

router.delete('/deleteConfig',verifyToken,deleteChangeStreamConfig);


module.exports = router
