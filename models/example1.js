module.exports = function (DB, { INTEGER, BOOLEAN }) {
  const Model = DB.define('example1',
    {
      id: {
        type: INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      status: {
        type: BOOLEAN
      }
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'example1',
    }
  )

  return Model
}