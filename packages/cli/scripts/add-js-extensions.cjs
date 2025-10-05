const fs = require("fs");
const fsp = fs.promises;
const path = require("path");

const REL_SPEC_REGEX = /(['"])(\.\.?(?:\/[^'"]*?))\1/g; // '...relative...' or "...relative..."

async function walk(dir) {
	const entries = await fsp.readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full);
		} else if (entry.isFile() && full.endsWith(".js")) {
			let text = await fsp.readFile(full, "utf8");
			let changed = false;

			text = text.replace(REL_SPEC_REGEX, (match, quote, spec) => {
				try {
					// resolve the referenced path relative to current file
					const resolvedBase = path.resolve(path.dirname(full), spec);
					// 1) prefer spec + .js
					if (fs.existsSync(resolvedBase + ".js")) {
						changed = true;
						return quote + spec + ".js" + quote;
					}
					// 2) else if directory/index.js exists, use /index.js
					if (fs.existsSync(path.join(resolvedBase, "index.js"))) {
						changed = true;
						return quote + spec + "/index.js" + quote;
					}
					// 3) leave unchanged (maybe it's a package import or already correct)
					return match;
				} catch (err) {
					return match;
				}
			});

			if (changed) {
				await fsp.writeFile(full, text, "utf8");
				console.log("patched:", full);
			}
		}
	}
}

(async () => {
	const target = process.argv[2] || "dist";
	const abs = path.resolve(target);
	if (!fs.existsSync(abs)) {
		console.error("target not found:", abs);
		process.exit(1);
	}
	await walk(abs);
	console.log("done.");
})().catch((err) => {
	console.error(err);
	process.exit(1);
});
