// const { argv } = require("process");
const { argsParser } = require("./argsParser");

const cli = () => {
  const args = argsParser();
  // console.log(args);
  return args;
  // let option = {};
  // args.forEach((arg, i) => {
  //   if (arg === "-c" || arg === "--config") {
  //     const newConfig = { config: args[i + 1] };
  //     option = { ...option, ...newConfig };
  //     return option;
  //   }
  //   if (arg === "-i" || arg === "--input") {
  //     const newConfig = { input: args[i + 1] };
  //     option = { ...option, ...newConfig };
  //     return option;
  //   }
  //   if (arg === "-o" || arg === "--output") {
  //     const newConfig = { output: args[i + 1] };
  //     option = { ...option, ...newConfig };
  //     return option;
  //   }
  //   return "TEST";
  // });
  // return option;
};

module.exports = {
  cli,
};
