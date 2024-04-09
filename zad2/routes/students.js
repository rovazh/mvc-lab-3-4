const router  = require("express").Router();
const { getAddNewStudentPage } = require('../controllers/students');

router.get('/', getAddNewStudentPage);
router.get('/success', (_, res) => {
    return res.render('Success');;
});
router.get('/students-list', (_, res) => {
    return res.render('List');
});
router.get('/add-student', (_, res) => {
    res.redirect('/students-list');
});

module.exports = router;
