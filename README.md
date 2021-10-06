# Sequelize-make-auto-migration
When we make a change in model it automatically creates a migration file.

"This is a reminder repository for the basics."

First install ' npm install sequelize mig'

Run 'Sequelize init'

It will create config, migration, seeders files and an index.js file in models.

Create your models as in the example models folder 

Adjust your config file

Edit code in index.js file : const C = require(path.join(__dirname, file));
   			     const model = new C(sequelize, Sequelize.DataTypes);

To make new migration run 'sequelize-mig migration:make -n'

To run migrations run 'sequelize db:migrate'


