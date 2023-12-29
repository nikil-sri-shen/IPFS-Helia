# IPFS Storage with Helia Implementation in Node.js

Welcome to the IPFS Storage project using Helia implementation in Node.js! This project demonstrates how to store and retrieve content on the InterPlanetary File System (IPFS) using the Helia library in a Node.js environment.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)

## Introduction

This project showcases the integration of Helia, a powerful library for interacting with IPFS, in a Node.js application. By following the guidelines provided, you can set up an Express server, configure a file system blockstore, and interact with the decentralized IPFS network to store and retrieve content.

## Prerequisites

Before getting started, make sure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ipfs-helia-nodejs.git
   
2. Navigate to the project directory and Install dependencies:
   ```bash
   cd ipfs-helia-nodejs
   npm install
   
## Configuration

1. Open index.js and update the blockstore path to your desired directory:
   
   ```bash
   const blockstore = new FsBlockstore("YOUR/DESIRED/PATH");
   
2. Adjust CORS settings in index.js if necessary: 
   ```bash
   app.use(cors({ origin: "http://localhost:3000" }));

## Usage

1. Start the server:
   
   ```bash
   npm start
Visit http://localhost:5000 to interact with the API.

## Endpoints

1. POST /store: Store content on IPFS. Send a JSON payload with the content.
   ```bash
   {
      "content": "Your content to be stored on IPFS"
   }
2. GET /retrieve/:cid: Retrieve content from IPFS using the provided Content Identifier (CID).

## Project Structure

The project structure is organized as follows:

1. index.js: Main entry point for the Express server and Helia integration.
   
2. blockstore/: Directory for storing IPFS data on the local machine.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for improvements or bug fixes.

## Acknowledgments

Special thanks to the Helia library maintainers and the IPFS community for their invaluable contributions to decentralized technologies.
