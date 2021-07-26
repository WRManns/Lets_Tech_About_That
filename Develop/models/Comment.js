const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false, 
        primateKey: true,
        autoIncrement: true,
    },
    
    comment_text: {
        type: DataTypes.STRING,
    },

    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },

      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },

      blog_id: {
          type: DataTypes.INTEGER,
          references: {
              model: 'blogPost',
              key: 'id',
          },
      },
    }, {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
});

model.exports = Comment;