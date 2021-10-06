module.exports = function (DB, { INTEGER, STRING, BOOLEAN }) {
  const Model = DB.define('example2',
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
      is_active: {
        type: BOOLEAN
      }
    },
    {
      timestamps: true,
      underscored: true,
      tableName: 'example2'
    }
  )

  return Model
}