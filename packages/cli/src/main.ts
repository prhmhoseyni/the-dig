#!/usr/bin/env node

import { Command } from "commander";
import { add } from "./commands/add";
import { config } from "./commands/config";
import { init } from "./commands/init";
import { update } from "./commands/update";

const program = new Command();

program.name("the-dig").description("🛠 CLI tool for the-dig component library").version("1.0.0");

program.command("init").description("Initialize the project for the-dig").action(init);

program.command("config").description("Configure the project for the-dig").action(config);

program.command("add").description("Add components").argument("<components-name>", "Name of the components to add").action(add);

program
	.command("update")
	.description("Update components")
	.argument("<components-name>", "Name of the components to update")
	.action(update);

program.parse();
