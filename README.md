# 256-js
A lightweight, zero-dependency Node.js utility for verifying SHA-256 hashes.

>Note: This is still a work in progress, but as of now the tool is functional.

## About 

256-js is a NodeJS CLI tool that calculates the SHA-256 hash function for a given file and, optionally, compares it to a user-provided string to see if they match. It's goal is to simplify the authenticity checks for files downloaded from the internet.

This project came from curiosity and it's primary intent was fun and exploration. Yet, I hope other people can find it interesting and useful.

## Features

* Zero dependencies (besides NodeJS): It does not use any third party node modules.
* Available to install for global access (instructions below).
* Cross-Platform.
* Hash Verification: The tool calculates the SHA-256 hash for any file and is able to compare it to the original if included in the prompt.
## Installation

At the time being, this small project is not meant to be published in the NPM registry. It can nonetheless be installed from source following these steps:

>Important: make sure you have NodeJS installed on your system.

1. Clone the repo.
```
git clone https://github.com/Oscar-Mont/256-js.git
```

2. Navigate to the generated folder.
```
cd 256-js
```

3. Install the project globally using `npm` .
```
npm install -g .
```

This will install 256-js globally and create the necessary files for the tool to be usable from any terminal.

## Usage

>The command this tool uses in its current version is "calc256".
### To calculate the SHA-256 hash of any file.

Open a terminal session and type  `calc256` and include the file path to the location in your system where the file you want to check is located.

```
calc256 <file-path>
```

When calculating a hash, the output will be the file path and the calculated hash:
```
File: <file-path>
SHA-256: 0000000000000000000000000000000000000000000
```
### To verify a SHA-256 hash.

When you have the official SHA-256 hash for a file you downloaded from the internet, you can calculate the hash of such file and compare it to the official hash from the vendor's website.

Open a terminal session and type `calc256` followed by a space, the file path to the location in your system where the file you want to check is located, another space, and finally the SHA-256 hash you got from a reputable source. 

```
calc256 <file-path> <official-hash>
```

256-js will then calculate the hash for the file and compare it to the hash it should match to. When verifying a hash, the output will be the file path, the calculated hash and the result of the comparison:

```
File: <file-path>
SHA-256: 0000000000000000000000000000000000000000000
IT'S A MATCH!
```



