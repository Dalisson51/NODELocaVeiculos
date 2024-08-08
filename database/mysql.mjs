import { Sequelize } from "sequelize";

// Substitua a URL de conexão MySQL pela URL do PostgreSQL
const sequelize = new Sequelize("postgresql://user_db:5I5mZGXnLsGR1DRGQ9jqMvQqRe1b5McY@dpg-cqqkekggph6c738d0a30-a/veiculos_f1m4", {
  dialect: 'postgres',
});

sequelize.sync();

export default sequelize;
