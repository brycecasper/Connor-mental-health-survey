module.exports = {

    securityCheck: (req, res) => {

        const {securityAnswer} = req.body;

        console.log(req.body)

        if(securityAnswer === 'snow' || securityAnswer === 'Snow'){
            return res.sendStatus(200);
        } else {
            return res.sendStatus(400);
        }

    }

}