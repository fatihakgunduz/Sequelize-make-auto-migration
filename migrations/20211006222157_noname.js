const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "example", deps: []
 * createTable() => "example1", deps: []
 * createTable() => "example2", deps: []
 *
 */

const info = {
  revision: 1,
  name: "noname",
  created: "2021-10-06T22:21:57.067Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "example",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        name: { type: Sequelize.STRING, field: "name", allowNull: false },
        username: {
          type: Sequelize.STRING,
          field: "username",
          allowNull: false,
        },
        email: { type: Sequelize.STRING, field: "email", allowNull: false },
        password_hash: {
          type: Sequelize.STRING,
          field: "password_hash",
          allowNull: false,
        },
        retry_count: { type: Sequelize.INTEGER, field: "retry_count" },
        is_active: { type: Sequelize.BOOLEAN, field: "is_active" },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "example1",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        status: { type: Sequelize.BOOLEAN, field: "status" },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "example2",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        name: { type: Sequelize.STRING, field: "name", allowNull: false },
        is_active: { type: Sequelize.BOOLEAN, field: "is_active" },
        createdAt: {
          type: Sequelize.DATE,
          field: "created_at",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updated_at",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["example", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["example1", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["example2", { transaction }],
  },
];

const pos = 0;
const useTransaction = true;

const execute = (queryInterface, sequelize, _commands) => {
  let index = pos;
  const run = (transaction) => {
    const commands = _commands(transaction);
    return new Promise((resolve, reject) => {
      const next = () => {
        if (index < commands.length) {
          const command = commands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else resolve();
      };
      next();
    });
  };
  if (useTransaction) return queryInterface.sequelize.transaction(run);
  return run(null);
};

module.exports = {
  pos,
  useTransaction,
  up: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, migrationCommands),
  down: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, rollbackCommands),
  info,
};
