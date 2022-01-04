
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("Likes", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    messageId: {
      type: Sequelize.INTEGER,
      references: {
        model: "Messages",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    userLike: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    userDislike: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("Likes");
}
