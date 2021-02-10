module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: false,
        type: DataTypes.INTEGER
      },
      songId: {
        unique: true,
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
      },
      userId: {
        allowNull: true,
        type: DataTypes.UUID,
      },
      albumId: {
        allowNull: true,
        type: DataTypes.UUID,
      },
      playlistId: {
        allowNull: true,
        type: DataTypes.UUID,
      },
      artistId: {
        allowNull: true,
        type: DataTypes.UUID,
      },
      title: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true,
      },
      file: {
        type: DataTypes.STRING,
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
    await queryInterface.dropTable('Songs');
  }
};
