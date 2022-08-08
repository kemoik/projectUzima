module.exports = app => {
    const patients =  require ("..//controllers/patient.contoller.js")
    var router = require ("express").Router();

    router.post("/",patients.create);

    router.get("/",patients.findAll);

    router.get("/:name",patients.findName)

}