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
      type: DataTypes.INTEGER,
      field: 'code',
      unique: true
    },
    type: {
      type: DataTypes.STRING,
      field: 'type',
      unique: true
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

  AttributeType.beforeCreate((instance) => {
    instance.code = Math.floor(Math.random() * Math.floor(999999));
  })

  AttributeType.beforeCreate((instance) => {
    const a = "àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;";
    const b = "aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------";
    const p = new RegExp(a.split("").join("|"), "g");
    instance.type = instance.type
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(p, c => b.charAt(a.indexOf(c)))
      .replace(/&/g, "-and-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  })

  return AttributeType;
};