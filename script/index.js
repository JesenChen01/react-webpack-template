const inquirer = require("inquirer");
const shell = require("shelljs");

async function script() {
  const result = await inquirer.prompt([
    {
      type: "list",
      name: "type",
      message: "运行项目 or 打包项目:",
      choices: [
        { value: "dev", name: "运行项目" },
        { value: "build", name: "打包项目" },
      ],
    },
    {
      type: "list",
      name: "env",
      message: "执行环静:",
      choices: [
        { value: "dev", name: "dev" },
        { value: "test", name: "test" },
        { value: "pre", name: "pre" },
        { value: "prod", name: "prod" },
      ],
    },
  ]);

  try {
    shell.exec(`npm run ${result.type}:${result.env}`);
  } catch (error) {
    console.log("🚀 ~ file: index.js:33 ~ script ~ error:", error);
  }
}

script();
