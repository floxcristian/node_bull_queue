module.exports = (job, done) => {
  try {
    job.progress(100); // to show progress on arena GUI
    done(null, job.data);
  } catch (error) {
    done(error);
  }
};
