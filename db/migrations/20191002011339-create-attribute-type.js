'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('attribute_type', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID
      },
      code: {
        type: Sequelize.INTEGER,
        unique: true
      },
      type: {
        type: Sequelize.STRING,
        unique: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('attribute_type');
  }
};