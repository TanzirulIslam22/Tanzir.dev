const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000";

const SECTIONS = ["home", "about", "skills", "work", "experiments", "services", "contact"];
const ASSETS = ["/projects/terminal.png", "/projects/ai-support.png", "/projects/crm.png", "/resume.pdf"];

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    process.exitCode = 1;
  } else {
    console.log(`ok: ${message}`);
  }
}

const html = await (await fetch(BASE_URL)).text();

for (const section of SECTIONS) {
  assert(html.includes(`id="${section}"`), `section #${section} present`);
}

for (const asset of ASSETS) {
  const res = await fetch(`${BASE_URL}${asset}`);
  assert(res.status === 200, `${asset} returns 200`);
}

assert(html.includes("Tanzirul Islam"), "name on page");
assert(html.includes("/resume.pdf"), "resume link present");

if (process.exitCode) {
  console.error("Smoke test failed.");
  process.exit(1);
}
console.log("Smoke test passed.");
