/**
 * generate configuration according to environment
 */
const url = require('url')
const configBase = require('./config.base.js')
const configDev = require('./config.dev.js')
const configProd = require('./config.prod.js')
const isProd = process.env.NODE_ENV === 'production'

// the dev or prod will cover base
const config = Object.assign(configBase, isProd ? configProd : configDev)
config.origin = url.format(config)
module.exports = {...config, isProd}
