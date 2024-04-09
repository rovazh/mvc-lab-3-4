const getNotFoundPage = (req, res) => {
    return res.render('NotFound');
}

module.exports = {
    getNotFoundPage,
}
