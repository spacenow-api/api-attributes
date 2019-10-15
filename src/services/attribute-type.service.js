'use strict'

const { Attribute } = require('../../db/models')
const paginate = require('../helpers/paginate.utils')

const getAttributes = async (pageIndex = 0, pageSize = 10) => {
  try {
    const data = await Attribute.findAndCountAll({ ...paginate(pageIndex, pageSize) })
    return data
  } catch (error) {
    throw error
  }
}

const getAttribute = async (id) => {
  const where = { where: { id } }
  try {
    const data = await Attribute.findOne(where);
    return data
  } catch (error) {
    throw error
  }
}

const putAttribute = async (id, value) => {
  const where = { where: { id } }
  try {
    const valueToUpdate = await Attribute.findOne(where);
    if (!valueToUpdate) throw new Error(`Attribute ${id} not found.`);
    await Attribute.update(value, where)
    return Object.assign(valueToUpdate, value)
  } catch (error) {
    throw error
  }
}

const postAttribute = async (value) => {
  try {
    const data = await Attribute.create(value)
    return data
  } catch (error) {
    throw error
  }
}

const deleteAttribute = async (id) => {
  const where = { where: { id } }
  try {
    const valueToUpdate = await Attribute.findOne(where);
    if (!valueToUpdate) throw new Error(`Attribute ${id} not found.`);
    await Attribute.delete(where)
    return Object.assign(`Attribute ${id} deleted.`)
  } catch (error) {
    throw error
  }
}

module.exports = { getAttributes, getAttribute, putAttribute, postAttribute, deleteAttribute }