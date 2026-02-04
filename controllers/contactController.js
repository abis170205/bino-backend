const Contact = require("../models/Contact");

exports.submitContact = async (req, res) => {
  const { name, email, message } = req.body;
  await Contact.create({ name, email, message });
  res.json({ message: "Message received" });
};
