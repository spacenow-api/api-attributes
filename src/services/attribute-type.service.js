'use strict'

const { AttributeType } = require('../../db/models')
const paginate = require('../helpers/paginate.utils')

const getAttributeTypes = async (pageIndex = 0, pageSize = 10) => {
  try {
    const data = await AttributeType.findAndCountAll({ ...paginate(pageIndex, pageSize) })
    return data
  } catch (error) {
    throw error
  }
}

const getAttributeType = async (id) => {
  const where = { where: { id } }
  try {
    const data = await AttributeType.findOne(where);
    return data
  } catch (error) {
    throw error
  }
}

const putAttributeType = async (id, value) => {
  const where = { where: { id } }
  try {
    const valueToUpdate = await AttributeType.findOne(where);
    if (!valueToUpdate) throw new Error(`Attribute Type ${id} not found.`);
    await AttributeType.update(value, where)
    return Object.assign(valueToUpdate, value)
  } catch (error) {
    throw error
  }
}

const postAttributeType = async (value) => {
  try {
    const data = await AttributeType.create(value)
    return data
  } catch (error) {
    throw error
  }
}

const deleteAttributeType = async (id) => {
  const where = { where: { id } }
  try {
    const valueToUpdate = await AttributeType.findOne(where);
    if (!valueToUpdate) throw new Error(`Attribute Type ${id} not found.`);
    await AttributeType.delete(where)
    return Object.assign(`Attribute Type ${id} deleted.`)
  } catch (error) {
    throw error
  }
}

module.exports = { getAttributeTypes, getAttributeType, putAttributeType, postAttributeType, deleteAttributeType }