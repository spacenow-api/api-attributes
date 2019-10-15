'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'attribute',
      'attribute_type_id',
      {
        type: Sequelize.UUID,
        references: {
          model: 'attribute_type',
          key: 'id'
        },
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL',
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'attribute', // name of Source model
      'attribute_type_id' // key we want to remove
    );
  }
};