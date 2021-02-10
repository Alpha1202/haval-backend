const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    static associate({
      User, Album, Playlist, Artist
    }) {
      this.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE', });
      this.belongsTo(Album, { foreignKey: 'albumId', onDelete: 'CASCADE', onUpdate: 'CASCADE', });
      this.belongsTo(Playlist, { foreignKey: 'playlistId', onDelete: 'CASCADE', onUpdate: 'CASCADE', });
      this.belongsTo(Artist, { foreignKey: 'artistId', onDelete: 'CASCADE', onUpdate: 'CASCADE', });
    }

    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  Song.init({
    songId: {
      unique: true,
      type: DataTypes.UUID,
      required: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      unique: false,
      required: true,
    },
    description: {
      type: DataTypes.STRING,
      unique: false,
      required: false,
    },
    file: {
      type: DataTypes.STRING,
      required: true,
    }
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};
