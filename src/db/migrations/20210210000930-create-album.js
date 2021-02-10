module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Albums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: false,
        type: DataTypes.INTEGER
      },
      albumId: {
        unique: true,
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
      },
      userId: {
        allowNull: true,
        type: DataTypes.UUID,
      },
      artistId: {
        allowNull: true,
        type: DataTypes.UUID,
      },
      name: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('Albums');
  }
};
