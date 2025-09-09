// // src/models/index.js
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize(process.env.DB_URL);

// const User = sequelize.define('User', {
//     name: DataTypes.STRING,
//     email: { type: DataTypes.STRING, unique: true },
//     address: DataTypes.STRING,
//     password: DataTypes.STRING,
//     role: DataTypes.ENUM('admin', 'user', 'store_owner')
// });

// const Store = sequelize.define('Store', {
//     name: DataTypes.STRING,
//     address: DataTypes.STRING,
//     owner_id: DataTypes.INTEGER,
//     avg_rating: { type: DataTypes.FLOAT, defaultValue: 0 }
// });

// const Rating = sequelize.define('Rating', {
//     store_id: DataTypes.INTEGER,
//     user_id: DataTypes.INTEGER,
//     rating: DataTypes.INTEGER
// });

// User.hasMany(Store, { foreignKey: 'owner_id' });
// Store.belongsTo(User, { foreignKey: 'owner_id' });

// User.hasMany(Rating, { foreignKey: 'user_id' });
// Store.hasMany(Rating, { foreignKey: 'store_id' });

// module.exports = { sequelize, User, Store, Rating };

// src/models/index.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_URL);

const User = sequelize.define('User', {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM('admin', 'user', 'store_owner'), allowNull: false }
});

const Store = sequelize.define('Store', {
    name: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    owner_id: { type: DataTypes.INTEGER, allowNull: false },
    avg_rating: { type: DataTypes.FLOAT, defaultValue: 0 }
});

const Rating = sequelize.define('Rating', {
    store_id: { type: DataTypes.INTEGER, allowNull: false },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    rating: { type: DataTypes.INTEGER, allowNull: false }
});

User.hasMany(Store, { foreignKey: 'owner_id' });
Store.belongsTo(User, { foreignKey: 'owner_id' });

User.hasMany(Rating, { foreignKey: 'user_id' });
Store.hasMany(Rating, { foreignKey: 'store_id' });

module.exports = { sequelize, User, Store, Rating };
