#!/usr/bin/env node

console.log("testing")

const {version, versions} = process

console.log(`Node.js version: ${version}\n V8 version: ${versions.v8}`);
