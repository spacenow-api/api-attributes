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
    typeId: {
      type: DataTypes.UUID,
      field: 'type_id',
      defaultValue: DataTypes.UUIDV4,
      references: {
        model: 'AttributeType',
        key: 'id'
      }
    },
    code: {
      type: DataTypes.STRING,
      field: 'code'
    },
    model: {
      type: DataTypes.STRING,
      field: 'model'
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
    tableName: 'attribute',
    indexes: [
      {
        unique: true,
        fields: ['attribute_type_id']
      }
    ]
  });

  Attribute.associate = (models) => {
    Attribute.belongsToMany(models.AttributeType, {
      through: 'attributeType',
      foreignKey: 'id'
    });
  };

  Attribute.beforeCreate((instance) => {
    const a = "àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;";
    const b = "aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------";
    const p = new RegExp(a.split("").join("|"), "g");
    instance.code = instance.frontendLabel
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

  return Attribute;
};