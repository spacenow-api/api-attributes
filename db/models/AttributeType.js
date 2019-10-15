'use strict';

module.exports = (sequelize, DataTypes) => {
  const AttributeType = sequelize.define('AttributeType', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      field: 'id'
    },
    code: {
      type: DataTypes.STRING,
      field: 'code'
    },
    type: {
      type: DataTypes.STRING,
      field: 'type'
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, {
    tableName: 'attribute_type'
  });

  return Attribute;
};