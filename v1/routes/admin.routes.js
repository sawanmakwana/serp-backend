const express = require("express");
const router = express.Router();

const {
  login,
  createUser,
  addProject,
  editProject,
  viewProject,
  deleteProject,
} = require("../controllers/admin.controller");

const {
  loginValidator,
  projectValidator,
} = require("../../validators/admin.validator");

const { validatorFunc } = require("../../helpers/commonFunction.helper");

router.post("/login", loginValidator, validatorFunc, login);

// router.post(
//   "/createUser",
//   authenticate,
//   userValidator,
//   validatorFunc,
//   createUser
// );

router.post("/addProject", projectValidator, validatorFunc, addProject);

router.put("/editProject/:id", projectValidator, validatorFunc, editProject);

router.delete("/deleteProject/:id", deleteProject);

router.get("/viewProject/:id", viewProject);

module.exports = router;
