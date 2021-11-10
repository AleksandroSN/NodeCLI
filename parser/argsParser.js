const cli = () => {
  const args = process.argv.slice(2);
  args.forEach((arg) => {
    switch (arg) {
      case "-c":
        console.log("HA");
        return "HA";
      case "--config":
        console.log("HA");
        return "HA";
      case "-i":
        console.log("HA!");
        return "HA";
      case "--input":
        console.log("HA!");
        return "HA";
      case "-o":
        console.log("HA!");
        return "HA";
      case "--output":
        console.log("HA!");
        return "HA";
      default:
        return "Config is requried";
    }
  });
  return "parser worked";
};

module.exports = {
  cli,
};
