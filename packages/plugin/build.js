import path from "node:path";
import { fileURLToPath } from "url";
import { exec } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function runCommand(command) {
    return new Promise((resolve, reject) => {
        const process = exec(command, (error, stdout) => {
            if (error) {
                console.error(`❌ CLI error.\n\"${command}\":\n${error.message}`);
                return reject(error);
            }

            console.log(`❤️ CLI done:\n\"${command}\":\n${stdout}`);
            resolve(stdout);
        });

        process.stdout.pipe(process.stdout);
    });
}

(async () => {
    try {
        console.log(">>>> build scss...");
        await runCommand(`sass ${__dirname}\\src\\base:${__dirname}\\src\\base --style compressed --no-source-map`);
        await runCommand(`sass ${__dirname}\\src\\components:${__dirname}\\src\\components --style compressed --no-source-map`);
        await runCommand(`sass ${__dirname}\\src\\utilities:${__dirname}\\src\\utilities --style compressed --no-source-map`);

        console.log(">>>> build css...");
        await runCommand(`npx tailwindcss -i ${__dirname}\\src\\base\\index.css -o ${__dirname}\\dist\\base.css`);
        await runCommand(`npx tailwindcss -i ${__dirname}\\src\\components\\index.css -o ${__dirname}\\dist\\components.css`);
        await runCommand(`npx tailwindcss -i ${__dirname}\\src\\utilities\\index.css -o ${__dirname}\\dist\\utilities.css`);

        console.log(">>>> build jss...");
        await runCommand("npx prejss-cli dist/*.css --format commonjs");
    } catch (error) {
        console.error(`❌ ${error.message}`);
    }
})();
