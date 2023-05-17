/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

import sequelize, { QueryInterface } from 'sequelize';

const { QueryTypes } = require('sequelize');
const tableName = 'SampleTableName';
module.exports = {
  up: (queryInterface: QueryInterface, Sequelize: typeof sequelize) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.renameTable('', '');
      await queryInterface.createTable(
        tableName,
        {
          id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          customer_id: {
            type: Sequelize.INTEGER,
          },
          token: {
            type: Sequelize.UUID,
            allowNull: false,
          },
          total_price: {
            type: Sequelize.DECIMAL,
            defaultValue: 0,
          },
          item_count: {
            type: Sequelize.DECIMAL,
            defaultValue: 0,
          },
          data: {
            type: Sequelize.JSON,
          },
          expires_at: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          created_at: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW'),
          },
          created_by: {
            type: Sequelize.INTEGER,
          },
          updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW'),
          },
          updated_by: {
            type: Sequelize.INTEGER,
          },
          deleted_at: {
            type: Sequelize.DATE,
          },
          deleted_by: {
            type: Sequelize.INTEGER,
          },
        },
        { transaction },
      );
    });
  },

  down: (queryInterface: QueryInterface, Sequelize: typeof sequelize) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.dropTable(tableName, { transaction });
    });
  },
};
