'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
          queryInterface.addColumn('trees', 'createdAt', {
              type: Sequelize.DATE, defaultValue: Date.now
          }, { transaction: t }),
          queryInterface.addColumn('trees', 'updatedAt', {
              type: Sequelize.DATE, defaultValue: Date.now
          }, { transaction: t })
      ])
  })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
          queryInterface.removeColumn('trees', 'createdAt', { transaction: t }),
          queryInterface.removeColumn('trees', 'updatedAt', { transaction: t })
      ])
    })
  }
};
