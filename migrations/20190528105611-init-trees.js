'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING } = Sequelize;
    return await queryInterface.createTable('trees', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      parent: { type: INTEGER, 
        references: {
          model: 'trees',
          key: 'id'
        },
        defaultValue: null
      },
      text: { type: STRING, allowNull: false }
    })
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('trees');
  }
};
