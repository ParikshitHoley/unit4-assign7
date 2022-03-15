const { model } = require("mongoose");

const post = (model) => async (req, res) => {
  try {
    const item = await model.create(req.body);

    return res.send(item);
  } catch (err) {
    return res.send(err.message);
  }
};

const getAll = (model) => async (req, res) => {
  try {
    const item = await model.find().lean().exec();

    return res.send(item);
  } catch (err) {
    return res.send(err.message);
  }
};

const getOne = (model) => async (req, res) => {
  try {
    const item = await model.findById(req.params.id).lean().exec();

    return res.send(item);
  } catch (err) {
    return res.send(err.message);
  }
};

module.exports = (model, item) => ({
  post: post(model),
  get: getAll(model),
  getOne: getOne(model),
});

