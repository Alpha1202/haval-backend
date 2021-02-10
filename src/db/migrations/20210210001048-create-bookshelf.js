module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Bookshelves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: false,
        type: DataTypes.INTEGER
      },
      bookId: {
        unique: true,
        type: DataTypes.UUID,
        allowNull: false,
      },
      userId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      title: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
      },
      authorPhoto: {
        type: DataTypes.STRING,
        unique: false,
        required: false,
      },
      bookPhoto: {
        type: DataTypes.STRING,
        unique: false,
        required: false,
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
    await queryInterface.dropTable('Bookshelves');
  }
};