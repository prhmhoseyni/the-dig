#!/usr/bin/env node

import { Command } from "commander";
import { init } from "./commands/init";
import { config } from "./commands/config";
import { add } from "./commands/add";

const program = new Command();

program
  .name("the-dig")
  .description("🛠 CLI tool for the-dig component library")
  .version("1.0.0");

program
  .command("init")
  .description("Initialize the project for the-dig")
  .action(init);

program
  .command("config")
  .description("Configure the project for the-dig")
  .action(config);

program
  .command("add")
  .description("Add a new component")
  .argument("<component-name>", "Name of the component to add")
  .action(add);

program.parse();
