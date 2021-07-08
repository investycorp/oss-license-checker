#!/usr/bin/env node
import { program } from 'commander';

import getNodeLicense from './node';

const packageJson = require(`${__dirname}/../package.json`);

program.version(packageJson.version);
program.option('--json, --json [dest]', 'Result export to json file');
program.option('--html, --html [dest]', 'Result export to html file');
program.option('--template [templateFile]', 'Custom template for export to html file');
program.parse(process.argv);

const options = program.opts();

getNodeLicense(options.json, options.html, options.template);
