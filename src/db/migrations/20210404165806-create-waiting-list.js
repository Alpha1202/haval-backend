module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('WaitingLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: false,
        type: Sequelize.INTEGER
      },
      waitinglistId: {
        unique: true,
        type: Sequelize.UUID,
        required: true,
        primaryKey: true
      },
      firstname: {
        type: Sequelize.STRING,
        unique: false,
        required: true,
      },
      lastname: {
        type: Sequelize.STRING,
        unique: false,
        required: true,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        required: true,
      },
      phone: {
        type: Sequelize.STRING,
        unique: true,
        required: true,
      },
      category: {
        type: Sequelize.ENUM(['artist', 'author']),
        required: true,
      },
      organization: {
        type: Sequelize.ENUM(['independent', 'church']),
        required: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('WaitingLists');
  }
};