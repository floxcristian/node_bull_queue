const { redis } = require("./config");
const Queue = require("bull");

const emailQueue = new Queue("Email", { redis });

// Esto es tarea del worker...
/*emailQueue.process("email", async (job, done) => {
  console.log(` [+] Job [${job.id}] on process: ${job._progress}%`);
  //job.progress(50);
  //done(null, { status: "OKAY" });

  // Failed:
  //done(new Error("error sending an email."));
  // await job.moveToFailed({ message: "Call to external service failed!" }, true);
});*/

emailQueue.on("waiting", (job) => {
  console.log(` [+] Job [${job}] is waiting to be processed.`);
});

emailQueue.on("global:progress", (jobId, progress) => {
  // Job received a progress event.
  console.log(` [+] Job [${jobId}] reported progress ${progress}.`);
});

emailQueue.on("global:completed", (jobId, result) => {
  // Called every time a job is completed in any worker.
  console.log(` [+] Job [${jobId}] has completed with result: `, result);
});

const queues = [
  {
    name: "Email",
    hostId: "Email Queue Manager",
  },
];

module.exports = { queues, Queue, emailQueue };
