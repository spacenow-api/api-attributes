const attributeService = require('../../services/attribute.service')
const r = require('../../helpers/response.utils')

module.exports.main = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false
  attributeService
    .postAttribute(JSON.parse(event.body))
    .then((data) => callback(null, r.success(data)))
    .catch((err) => callback(null, r.failure(err)))
}