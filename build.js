const fs = require('fs');
const args = process.argv.slice(2);
const {mergeDeep} = require('immutable');

const manifest_path = "./manifest.json";
const versions_path = "./versions.json";
const initjs_path = "./src/js/cron/init.js";

const prodVar = {
    "browser_action": {
        "default_icon": {
            "16": "img/icon_16.png",
            "32": "img/icon_32.png"
        },
        "default_title": "Adequa"
    },
    "icons": {
        "16": "img/icon_16.png",
        "32": "img/icon_32.png",
        "64": "img/icon_64.png",
        "128": "img/icon_128.png"
    },
    "name": "Adequa",
    "short_name": "Adequa"
};
const devVar = {
    "browser_action": {
        "default_icon": {
            "16": "img/icon_dev_16.png",
            "32": "img/icon_dev_32.png"
        },
        "default_title": "Adequa dev"
    },
    "icons": {
        "16": "img/icon_dev_16.png",
        "32": "img/icon_dev_32.png",
        "64": "img/icon_dev_64.png",
        "128": "img/icon_dev_128.png"
    },
    "name": "Adequa dev",
    "short_name": "Adequa dev"
};
const localVar = {
    "browser_action": {
        "default_icon": {
            "16": "img/icon_local_16.png",
            "32": "img/icon_local_32.png"
        },
        "default_title": "Adequa local"
    },
    "icons": {
        "16": "img/icon_local_16.png",
        "32": "img/icon_local_32.png",
        "64": "img/icon_local_64.png",
        "128": "img/icon_local_128.png"
    },
    "name": "Adequa local",
    "short_name": "Adequa local"
};

const manifest = JSON.parse(fs.readFileSync(manifest_path, 'utf8'));
const versions = JSON.parse(fs.readFileSync(versions_path, 'utf8'));
let initjs = fs.readFileSync(initjs_path, 'utf8');

let env = "dev";

if (args.length > 0 && (args[0] === "prod" || args[0] === "production")) env = "prod";
if (args.length > 0 && args[0] === "local") env = "local";

if (env === "dev") {
    const version_minor = parseInt(versions.dev.split('.').slice(-1)[0]) + 1;
    const version = (versions.dev.split('.').slice(0, 2)).join('.') + "." + version_minor;

    versions.dev = version;
    manifest.version = version;

    fs.writeFileSync(manifest_path, JSON.stringify(mergeDeep(manifest, devVar)));
    fs.writeFileSync(versions_path, JSON.stringify(versions));
} else if (env === "prod") {
    const version_minor = parseInt(versions.prod.split('.').slice(-1)[0]) + 1;
    const version = (versions.prod.split('.').slice(0, 2)).join('.') + "." + version_minor;

    versions.prod = version;
    manifest.version = version;

    fs.writeFileSync(manifest_path, JSON.stringify(mergeDeep(manifest, prodVar)));
    fs.writeFileSync(versions_path, JSON.stringify(versions));
} else if (env === "local") {
    const version_minor = parseInt(versions.local.split('.').slice(-1)[0]) + 1;
    const version = (versions.local.split('.').slice(0, 2)).join('.') + "." + version_minor;

    versions.local = version;
    manifest.version = version;

    fs.writeFileSync(manifest_path, JSON.stringify(mergeDeep(manifest, localVar)));
    fs.writeFileSync(versions_path, JSON.stringify(versions));
}

initjs = initjs.replace("const env = 'dev';", `const env = '${env}';`);
initjs = initjs.replace("const env = 'prod';", `const env = '${env}';`);
initjs = initjs.replace("const env = 'local';", `const env = '${env}';`);

fs.writeFileSync(initjs_path, initjs);
