module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("Customer", { 
//----------------------------------------------------------------------------------------------//      
      C_Name: {
        type: Sequelize.STRING
      },
      
      Phone: {
        type: Sequelize.STRING
      },

      D_O_B: {
          type: Sequelize.STRING,
      },

      Address: {
        type: Sequelize.STRING
      }
    }) 
//----------------------------------------------------------------------------------------------//
    const Employee = sequelize.define("Employee",{

       E_Name: {
        type: Sequelize.STRING
       },

       Address: {
        type: Sequelize.STRING
      },
 
      Phone: {
        type: Sequelize.STRING
      },
      
      Designation: {
        type: Sequelize.STRING
      },
      
      D_O_B: {
       type: Sequelize.STRING
      }

    })
//----------------------------------------------------------------------------------------------//
    const Products = sequelize.define("Products", {

      P_Name: {
        type: Sequelize.STRING
       },
      
       P_Code: {
        type: Sequelize.STRING
       },
      
      Description: {
        type: Sequelize.STRING
       },

      P_Avail: {
        type: Sequelize.STRING
       },

      P_NextArrival: {
        type: Sequelize.DATE
       },

      P_Price: {
        type: Sequelize.DECIMAL(10, 2) 
       }

    })
//----------------------------------------------------------------------------------------------//
    const Admin = sequelize.define("Admin", {

      User_Name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      Password: {
        
        type: Sequelize.STRING
      }
    })
//----------------------------------------------------------------------------------------------//
    const Cashier = sequelize.define("Cashier", {

      User_Name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      
      },

      Password: {
        type: Sequelize.STRING
      }
    })
//----------------------------------------------------------------------------------------------//
    const Sales = sequelize.define("Sales", {

      User_Name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      Password: {
        
        type: Sequelize.STRING
      }
    })
//----------------------------------------------------------------------------------------------//
    const Record = { Customer, Employee, Products, Admin, Cashier, Sales};
  
  return Record;
  };
