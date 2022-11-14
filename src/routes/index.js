const express = require('express')
const router = express()
const ErrorHandler = require('../utils/error')
const { verifyJWT } = require('../app/middleware/verifyJWT')

// Schema Validation
const { updateUserValidation } = require('../utils/schema')

// Controllers
const UserController = require('../controllers/users')
const BuildingController = require('../controllers/buildings')
const AuthController = require('../controllers/auth')

//* *************************************************************
//                                                              *
//                       Without AUTH                           *
//                                                              *
//* *************************************************************

// Auth
router.post('/login', AuthController.signIn)
router.post('/register', AuthController.signUp)
router.get('/verify-account', AuthController.verify)

router.use(verifyJWT)

//* *************************************************************
//                                                              *
//                    Must Authenticate                         *
//                                                              *
//* *************************************************************

// Users
router.get('/users', UserController.getUserList)
router.get('/users/:id', UserController.getUserDetail)
router.patch('/users/:id', updateUserValidation(), UserController.updateUser)

// Buildings
router.get('/buildings', BuildingController.getBuildingList)
// router.get('/buildings/:building_id', BuildingController.getBuildingDetail)
// router.post('/buildings', BuildingController.postBuilding)
// router.patch('/buildings/:building_id', BuildingController.updateBuilding)
// router.delete('/buildings/:building_id', BuildingController.deleteBuilding)

// Error Handler
router.use(ErrorHandler)

module.exports = router
