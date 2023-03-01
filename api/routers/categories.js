const {Router} = require('express');
const router = Router();
const controller = require('../controllers/categories.js');

router.get("/",controller.getAll);

router.get("/:id",controller.get);

router.put("/:id",controller.put);

router.delete("/:id",controller.delete);

router.post("/",controller.post);

module.exports = router;