const { emailQueue } = require("../../queues");

module.exports = {
  sendEmail: async (req, res) => {
    await emailQueue.add(
      "email",
      { from: "Cristian", to: "Diego" },
      { attempts: 2 }
    );
    res.send("A new job has been added to the entrance email queue!");
  },
};
