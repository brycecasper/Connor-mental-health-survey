module.exports = {
    auth: (req, res) => {
        const {password} = req.body;

        if(password === 'Development101!'){
            return res.sendStatus(200)
        } else {
            return res.sendStatus(500)
        }
    }
}