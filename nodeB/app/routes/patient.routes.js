module.exports = app => {
    const patient =  require ("..//controllers/patient.contoller.js")
    var router = require ("express").Router();

    router.post("/",patient.create);

    router.get("/",patient.findAll);
    router.get("/",patient.update);

    router.get("/:name",patient.findName);

}