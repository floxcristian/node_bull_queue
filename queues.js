const { redis } = require("./config");
const { emailQueue: emailWorker } = require("./workers");
const Queue = require("bull");

const emailQueue = new Queue("email", { redis });

// Sub/Worker:
emailQueue.process((job, done) => emailWorker(job, done));

const queues = [
  {
    // Name of the bull queue, this name must match up exactly with what you've defined in bull.
    name: "email",
    hostId: "Email Queue Manager",
  },
];
module.exports = { emailQueue, queues, Queue };
