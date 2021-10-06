module.exports = function (DB, { INTEGER, STRING, BOOLEAN }) {
  const Model = DB.define('example',
    {
      id: {
        type: INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: STRING,
        allowNull: false
      },
      username: {
        type: STRING,
        allowNull: false
      },
      email: {
        type: STRING,
        allowNull: false
      },
      password_hash: {
        type: STRING,
        allowNull: false
      },
      retry_count: {
        type: INTEGER
      },
      is_active: {
        type: BOOLEAN
      }
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'example',
    }
  )

  return Model
}