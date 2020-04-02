module.exports = {

    results: (req, res) => {

        const {one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve} = req.body;
        const db = req.app.get('db');

        db.results(one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve)
        .then(res => res.sendStatus(200))
        .catch(err => res.status(500).send(err));
        
    }

}