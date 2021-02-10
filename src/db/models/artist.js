const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    static associate({ Song, Album }) {
      this.hasMany(Song, { foreignKey: 'artistId' });
      this.hasMany(Album, { foreignKey: 'artistId' });
    }

    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  Artist.init({
    artistId: {
      unique: true,
      type: DataTypes.UUID,
      required: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      required: true,
    },
    photo: {
      type: DataTypes.STRING,
      unique: false,
      required: false,
    },
  }, {
    sequelize,
    modelName: 'Artist',
  });
  return Artist;
};
