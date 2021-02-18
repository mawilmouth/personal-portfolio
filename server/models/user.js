const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const { STRING } = DataTypes;
  
  class User extends Model {
    static associate({ Blog }) {
      User.hasOne(Blog, {
        foreignKey: {
          name: 'ownerId'
        }
      });
    }

    fullName() {
      const {firstName, lastName} = this;

      return `${firstName} ${lastName}`;
    }
  };

  User.init({
    firstName: STRING,
    lastName: STRING,
    username: STRING,
    email: STRING,
    password: STRING,
    authToken: STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });

  return User;
};