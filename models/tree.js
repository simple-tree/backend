module.exports = (sequelize, DataTypes) => {
  const { STRING, INTEGER } = DataTypes;
  const trees = sequelize.define('trees', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    parent: { type: INTEGER, 
      references: {
        model: 'trees',
        key: 'id'
      },
      defaultValue: null
    },
    text: { type: STRING, allowNull: false },
  }, 
  {
    tableName: 'trees'
  }, 
  {
    timestamps: false
  })
  return trees;
}