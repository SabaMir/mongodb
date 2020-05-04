const ContactForm = require("../../models/ContactForm");

const formController = {

    create: async (req, res) => {
        const response = {};
        try {
            let payload = {
                Firstname: req.body.Firstname,
                Lastname: req.body.Lastname,
                subject: req.body.subject,
                email: req.body.email,
                query: req.body.query
            };
            console.log(payload)
            ContactForm.create(payload, async (err, data) => {
                if (data) {
                    response.statusCode = 200;
                    response.body = JSON.stringify({
                        message: 'Ok',
                        data: data
                    });
                    await res.status(response.statusCode).send(response.body);
                } else {
                    response.statusCode = 500;
                    console.log(err)
                    response.body = JSON.stringify({ err });
                    res.status(response.statusCode).send(response.body);
                }

            })
        } catch (err) {
            response.statusCode = 500;
            response.body = JSON.stringify({ err });
            console.log(err)
            res.status(response.statusCode).send(response.body);
        }
    }
};
module.exports = formController;