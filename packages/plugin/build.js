import path from "node:path";
import { fileURLToPath } from "url";
import { exec } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function runCommand(command) {
    return new Promise((resolve, reject) => {
        const process = exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`❌ CLI error.\n\"${command}\":\n${error.message}`);
                return reject(error);
            }

            if (stderr) {
                console.warn(`⚠️ CLI stderr.\n\"${command}\":\n${stderr}`);
                console.warn(stderr);
            }

            console.log(`❤️ CLI done.\n\"${command}\":\n${stdout}`);
            resolve(stdout);
        });

        process.stdout.pipe(process.stdout);
        process.stderr.pipe(process.stderr);
    });
}

(async () => {
    try {
        await runCommand(`npx @tailwindcss/cli -i ${__dirname}\\src\\base\\index.css -o ${__dirname}\\dist\\base.css`);
        await runCommand(`npx @tailwindcss/cli -i ${__dirname}\\src\\components\\index.css -o ${__dirname}\\dist\\components.css`);
        await runCommand(`npx @tailwindcss/cli -i ${__dirname}\\src\\utilities\\index.css -o ${__dirname}\\dist\\utilities.css`);

        await runCommand("npx prejss-cli dist/*.css --format es6");
    } catch (error) {
        console.error(`❌ ${error.message}`);
    }
})();
