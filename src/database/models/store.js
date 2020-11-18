export default (sequelize, DataTypes) => {
  const User = sequelize.define('Store', {
    url: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Url is required'
      },
      validate: {
        url: {
          args: true,
          msg: 'Please enter a valid character'
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Name is required'
      },
      validate: {
        isAlpha: {
          args: true,
          msg: 'Please enter a valid character'
        }
      }
    },
  });
  return Store;
};