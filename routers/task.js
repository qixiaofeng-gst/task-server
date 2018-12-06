const task = require('express')()
const body_parser = require('body-parser')
const { ObjectID:OID } = require('mongodb')

task.post('/', body_parser.json(), ({ body, session }, res) => {
  const { user: { _id } } = session
	const { desc } = body
  res.json({ msg: 'placeholder' })
})

task.post('/list', body_parser.json(), ({ body, session }, res) => {
  const { user: { _id } } = session
	const { /** query */ } = body
  res.json({ msg: 'placeholder' })
})

module.exports = task
