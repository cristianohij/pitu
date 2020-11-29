import { Sequelize } from 'sequelize';

// NÃO FUNCIONOU
// mysql://user:password@server:port/database
//const sequelize = new Sequelize('mysql://root:#4294admin@127.0.0.1:3306/pitu');

// banco de dados, usuário, senha
const sequelize = new Sequelize('pitu', 'root', '#4294admin', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});

export default sequelize;