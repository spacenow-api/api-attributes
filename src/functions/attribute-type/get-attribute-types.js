const attributeTypeService = require('../../services/attribute-type.service')
const r = require('../../helpers/response.utils')

module.exports.main = (event, context, callback) => {
  const { pageIndex = 0, pageSize = 10 } = event.queryStringParameters
  context.callbackWaitsForEmptyEventLoop = false
  attributeTypeService
    .getAttributeTypes(pageIndex, pageSize)
    .then((data) => callback(null, r.success(data)))
    .catch((err) => callback(null, r.failure(err)))
}