const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");

router.get("/", (req, res) => res.send("Root page."));

router.post("/lamb", controllers.createLambDish);
router.get("/lamb", controllers.getAllLambDish);

router.get("/lamb/:id", controllers.getLambDishByID);
router.post("/lamb/:id", controllers.updateLambDish);
router.delete("/lamb/:id", controllers.deleteLambDish);

router.get("/country/:id/lamb", controllers.getLambDishByCountry);
router.post("/country", controllers.createHomeCountry);
router.get("/countries", controllers.getAllHomeCountry);
router.get("/country/:id", controllers.getHomeCountryByID);
router.post("/country/:id", controllers.updateHomeCountry);
router.delete("/country/:id", controllers.deleteHomeCountry);

module.exports = router;
