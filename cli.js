#!/usr/bin/env node

const plist = require('plist')
const minimist = require('minimist')
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

// extracting arguments from CLI
const argv = minimist(process.argv.slice(2))
const env = (argv._.length === 2) ? argv._[0] : argv.e || argv.env
const dest = (argv._.length === 2) ? argv._[1] : argv.d || argv.destination

// loading env varibles from passed .env file
const variables = dotenv
  .config({ path: env })
  .parsed

// converting env variables to plist string
const plistContent = plist.build(variables)

// saving plist file to chosen destination
const destination = path.join(dest, `${env}.plist`)
fs.writeFile(destination, plist.build(variables), err => {
  if (err)
    return console.log(`react-native-dot-env: ${err}`)

  console.log(`react-native-dot-env: ${env} converted to ${destination}`)
});
