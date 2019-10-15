'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('attribute', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID
      },
      attribute_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      attribute_code: {
        type: Sequelize.STRING
      },
      attribute_model: {
        type: Sequelize.STRING
      },
      frontend_input: {
        type: Sequelize.STRING
      },
      frontend_label: {
        type: Sequelize.STRING
      },
      backend_model: {
        type: Sequelize.STRING
      },
      backend_type: {
        type: Sequelize.ENUM('varchar', 'decimal', 'integer', 'datetime', 'text')
      },
      is_required: {
        type: Sequelize.BOOLEAN
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
      .then(() => queryInterface.addConstraint('attribute', ['attribute_type_id'], {
        type: 'foreign key',
        name: 'fk_attribute_attribute_type_id',
        references: {
          table: 'attribute_type',
          field: 'id'
        }
      }));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('attribute');
  }
};