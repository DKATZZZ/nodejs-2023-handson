module.exports = (sequelize, DataTypes) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
    {
     schema:'mydb',
     timestamps:false,
     freezeTableName:true
    }
  )
  
  return Tutorial;
  };
