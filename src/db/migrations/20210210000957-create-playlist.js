module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Playlists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: false,
        type: DataTypes.INTEGER
      },
      playlistId: {
        unique: true,
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
      },
      userId: {
        allowNull: false,
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
    await queryInterface.dropTable('Playlists');
  }
};
