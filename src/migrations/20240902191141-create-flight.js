'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNumber:{
        type: Sequelize.STRING,
        allowNull: false
      },
      airplaneId: {
        type:Sequelize.INTEGER,
        validate:{
          isNull:false
        },
        references:{
          model:'Airplanes',
          key:'id'
        },
        onDelete:'CASCADE'
      },
      arrivalAirportId: {
        type:Sequelize.INTEGER,
        validate:{
          isNull:false
        },
        references:{
          model:'Airports',
          key:'id'
        },
        onDelete:'CASCADE'
      },
      departureAirportId: {
        type:Sequelize.INTEGER,
        validate:{
          isNull:false
        },
        references:{
          model:'Airports',
          key:'id'
        },
        onDelete:'CASCADE'
      },
      arrival_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      departure_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      boardingGate: {
        type: Sequelize.STRING
      },
      total_seats: {
        type: Sequelize.INTEGER,
        defaultValue:60
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};