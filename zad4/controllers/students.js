const students = [];
let nextId = 1;

const getAddNewStudentPage = (_, res) => {
    return res.render('Home', { pageTitle: 'Home' });
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
    return res.render('Success', { pageTitle: 'Success' });
}

const getStudentsListPage = (_, res) => {
    return res.render('List', { students, pageTitle: 'List' });
}

module.exports = {
    getAddNewStudentPage,
    addStudent,
    getAddingNewStudentSuccessPageoraz,
    getStudentsListPage
}
