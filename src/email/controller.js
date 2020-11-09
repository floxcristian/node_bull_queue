const { emailQueue } = require("../../queues");

module.exports = {
  sendEmail: (req, res) => {
    await emailQueue.add({ from: "Juan" });
    res.send("A new job has been added to the entrance email queue!");
  },
};
