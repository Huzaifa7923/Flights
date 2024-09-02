'use strict';

//  city_id
// airport -> airport_id , city_id


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Airports', {
      fields: ['cityId'],
      type: 'FOREIGN KEY',
      name: 'city_fkey_constraint',
      references: { //Required field
        table: 'Cities',
        field: 'id'
      },
      onDelete: 'CASCADE',
    });
  },  

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Airports','city_fkey_constraint')
  }
};
