module.exports = (sequelize, Sequelize) => {
  const todos = sequelize.define("todos", {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    isCompleted: {
      type: Sequelize.BOOLEAN,
    },
  });

  return todos;
};
