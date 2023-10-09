const Joi = require("joi");
const booksService = require("../../secnd-express-app/services/booksService");

const booksSchema = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  name: Joi.string().required(),
});
module.exports = {
  getbooks: (req, res) => {
    const data = booksService.getbooks(req.body);
    res.send(data);
  },

  updatebook: (req, res) => {
    const data = booksService.updatebook(req.params.id, req.body);
    res.send(data);
  },
  deletebook: (req, res) => {
    const data = booksService.deletebook(req.params.id);
    res.send(data);
  },
  addbook: (req, res) => {
    try {
      const validate = booksSchema.validate(req.body);
      if (validate.error) {
        res.status(400).send(validate.error);
      }
      const data = booksService.addbook(req.body);
      res.send(data);
    } catch {
      res.status(500).send("Something went wrong");
    }
  },
};
