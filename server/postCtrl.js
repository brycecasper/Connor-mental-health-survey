module.exports = {
    getPost: (req, res) => {
        const db = req.app.get('db');

        db.get_post()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err));
    },

    submitPost: (req, res) => {
        const {postInput} = req.body;
        const db = req.app.get('db');

        db.submit_post(postInput)
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));
    }
}