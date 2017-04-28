#!/usr/bin/env node

const plist = require('plist')
const minimist = require('minimist')
const dotenv = require('dotenv')
const fs = require('fs')


const argv = minimist(process.argv.slice(2))
const source = argv.s || argv.source
const destination = argv.d || argv.destination

// loading env varibles from passed .env file
const variables = dotenv
  .config({ path: source })
  .parsed

// converting env variables to plist string
const plistContent = plist.build(variables)

// saving plist file to chosen destination
fs.writeFile(destination, plist.build(variables), function (err) {
  if (err)
    return console.log(`react-native-dot-env: ${err}`)

  console.log(`react-native-dot-env: ${source} converted to ${destination}`)
});
