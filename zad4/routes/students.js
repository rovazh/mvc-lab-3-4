const router  = require("express").Router();
const bodyParser = require('body-parser');
const {
    getAddNewStudentPage,
    addStudent,
    getAddingNewStudentSuccessPageoraz,
    getStudentsListPage
} = require('../controllers/students');

router.get('/', getAddNewStudentPage);
router.get('/success', getAddingNewStudentSuccessPageoraz);
router.get('/students-list', getStudentsListPage);
router.post('/add-student', bodyParser.urlencoded({ extended: false }), addStudent);

module.exports = router;
