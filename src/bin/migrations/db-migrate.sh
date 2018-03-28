#!/bin/bash
node node_modules/db-migrate/bin/db-migrate $1 $2 --config ./src/config/database.js create --migrations-dir ./src/migrations --sql-file