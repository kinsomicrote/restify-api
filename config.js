'use strict'

module.exports = {
  name: 'RESTIFY-API',
  version: '0.0.1',
  env: process.env.NODE_ENV || 'development',
  port: process.env.port || 3000,
  base_url: process.env.BASE_URL || 'http://localhost:3000',
  db: {
    uri: 'mongodb://127.0.0.1:27017/restify-api',
  }
}