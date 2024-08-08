import sequelize from "../database/mysql.mjs";
import { DataTypes } from "sequelize";

const Veiculo = sequelize.define('Veiculo', {
    fabricante: {
      type: DataTypes.STRING,
      allowNull: false
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    litragem: {
        type: DataTypes.STRING,
        allowNull: false
    }
  }, {
    timestamps: false // Desabilita createdAt e updatedAt
  });
  
// Veiculo.sync({
//     force:true
// });

export default Veiculo;