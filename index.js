require("dotenv").config();
const { port } = require("./config");
const express = require("express");

const app = express();
const { queues, Queue } = require("./queues");
require("./server")(app, port, queues, Queue);

/*const Queue = require("bull");

const emailQueue = new Queue("sending email", "redis://127.0.0.1:6379");

emailQueue.process((job) => {
  // Simply return a promise
  return fetchVideo(job.data.url).then(transcodeVideo);

  // Handles promise rejection
  return Promise.reject(new Error("error transcoding"));

  // Passes the value the promise is resolved with to the "completed" event
  return Promise.resolve({ framerate: 29.5 });

  // If the job throws an unhandled exception it is also handled correctly
  throw new Error("some unexpected error");
  // same as
  return Promise.reject(new Error("some unexpected error"));
});

emailQueue.add({
  image: "http://example.com/image1.tiff",
});

console.log("dao..");
*/
