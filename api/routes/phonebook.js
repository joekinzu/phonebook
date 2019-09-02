// routes for phonebook class
const express = require('express');
const phonebook = require('../models/phonebook');
const router = express.Router();

// get requests
// show phonebook
router.get('/phonebook', async (req, res) => {
  try {
    const result = await phonebook.getall();
    res.status(200).json(result);
  } catch (e) {
    errorme(res, e);
  }
});
// delete phonebook
router.get('/phonebook/delete/id=:id', async (req, res) => {
  try {
    const result = await phonebook.delete(req.params.id);
    res.status(200).json(result);
  } catch (e) {
    errorme(res, e);
  }
});
// add phonebook
router.post('/phonebook/add', async (req, res) => {
  data = req.body;
  try {
    const result = await phonebook.add(data.phone, data.name);
    res.status(200).json(result);
  } catch (e) {
    errorme(res, e);
  }
});
// update phonebook
router.post('/phonebook/update', async (req, res) => {
  data = req.body;
  try {
    const result = await phonebook.update(
      data.phone,
      data.name,
      data.id
    );
    res.status(200).json(result);
  } catch (e) {
    errorme(res, e);
  }
});

module.exports = router;
