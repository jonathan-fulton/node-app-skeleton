# Introduction

This repository is designed to be copy / pasted as a starting point for node.js web applications.

## After you clone the repo

- Update package.json
    - Update "name"
    - Update "description"
    - Update "scripts" / "docker:build" with correct Docker image name
- Update Dockerfile
    - Update "Maintainer" with your name and email
- Update ./docker/services/web.yml
    - Update "image" with correct Docker image name
- Consider turning on mandatory SSL even for local development. If yes, you should...
    - Generate csr.pem, key.pem, and server.crt
    - Put them in src/config/certs/local
    - Update src/config/default.json "server:sslEnabled" to true
-  