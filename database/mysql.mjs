import { Sequelize } from "sequelize";

// Substitua a URL de conexão MySQL pela URL do PostgreSQL
const sequelize = new Sequelize("postgresql://dewii2024_user:6fEiGwJityorYsrJn0pBsUbaRw5kscQM@dpg-cr1m10dds78s739u01a0-a/dewii2024");

sequelize.sync();

export default sequelize;
