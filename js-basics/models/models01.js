class Project extends Model {}
Project.init({
  title: Sequelize.STRING,
  description: Sequelize.TEXT
}, { sequelize, modelName: 'project' });

class Task extends Model {}
Task.init({
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  deadline: Sequelize.DATE
}, { sequelize, modelName: 'task' })

class User extends Model {}
User.init({
   firstName: Sequelize.STRING,
   lastName: Sequelize.TEXT,
 }, { sequelize, modelName: 'user' })