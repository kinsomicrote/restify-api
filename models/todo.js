'use strict'

const mongoose = require('mongoose'),
      mongooseApiQuery = require('mongoose-api-query'),
      // adds created_at and modified_at timestamps for us (ISO-8601)
      timestamps = require('mongoose-timestamp')

const TodoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    enum: ['pending', 'complete', 'overdue']
  },
}, { minimize: false })

TodoSchema.plugin(mongooseApiQuery)
TodoSchema.plugin(timestamps)

const Todo = mongoose.model('Todo', TodoSchema)
module.exports = Todo
