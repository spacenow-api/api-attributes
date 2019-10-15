'use strict';

module.exports = (sequelize, DataTypes) => {
  const Attribute = sequelize.define('Attribute', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      field: 'id'
    },
    attributeCode: {
      type: DataTypes.STRING,
      field: 'attribute_code'
    },
    attributeModel: {
      type: DataTypes.STRING,
      field: 'attribute_model'
    },
    frontendInput: {
      type: DataTypes.STRING,
      field: 'frontend_input'
    },
    frontendLabel: {
      type: DataTypes.STRING,
      field: 'frontend_label'
    },
    backendType: {
      type: DataTypes.ENUM('varchar', 'decimal', 'integer', 'datetime', 'text'),
      field: 'backend_type'
    },
    backendModel: {
      type: DataTypes.STRING,
      field: 'backend_model'
    },
    isRequired: {
      type: DataTypes.BOOLEAN,
      field: 'is_required'
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
    tableName: 'attribute'
  });

  Attribute.associate = (models) => {
    Attribute.belongsToMany(models.AttributeType, {
      through: 'attributeType',
      foreignKey: 'id'
    });
  };

  return Attribute;
};