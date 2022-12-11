const error = (msg) => {
  console.error(`Error: ${msg}`);
  process.exit(0);
};

module.exports = {
  error
}
