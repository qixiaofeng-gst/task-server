const user = require('express')()
const body_parser = require('body-parser')
const { ObjectID:OID } = require('mongodb')

user.post('/', body_parser.json(), ({ body, sessions }, res) => {
	const { email, password } = body
  res.json({ msg: 'placeholder' })
})

module.exports = user
