const students = [];
let nextId = 1;

const getAddNewStudentPage = (_, res) => {
    return res.render('Home');
}

const addStudent = (req, res) => {
    const { name, code, fieldOfStudies } = req.body;
    students.push({
        name,
        code,
        fieldOfStudies,
        id: nextId++,
    })
    return res.redirect('/success');
}

const getAddingNewStudentSuccessPageoraz = (_, res) => {
    return res.render('Success');
}

const getStudentsListPage = (_, res) => {
    return res.render('List');
}

module.exports = {
    getAddNewStudentPage,
    addStudent,
    getAddingNewStudentSuccessPageoraz,
    getStudentsListPage
}
