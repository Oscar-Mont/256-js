#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

//Getting file path and optional expected hash from terminal input
const filePath = process.argv[2];
const expectedHash = process.argv[3];

//Check for invalid input when running the script
if (!filePath) {
    console.error("Invalid Arguments. Usage: node shaker.js <file> <optional_hash_to_compare>")
    process.exit(1);
}

//main function
async function run() {
    try {
        //Save file to memory and calculate hash 
        const data = await readFile(filePath);
        const hash = createHash('sha256').update(data).digest('hex');

        console.log("---");
        console.log(`File: ${filePath}`);
        console.log(`SHA-256: ${hash}`);

        if (expectedHash) {
            if (hash.toLowerCase() === expectedHash.toLowerCase()) {
                console.log("IT'S A MATCH!")
            } else {
                console.log("OH NO! IT'S A MISTATCH!")
            }
        }
        console.log("---")
    } catch (err) {
        console.error(`Error: Could not read file "${filePath}}". Make sure it exists.`)
    }
}

run();