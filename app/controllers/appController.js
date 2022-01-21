const db = require("../models");
const { Customer, Employee, Products, Admin, Cashier, Sales } = db.Record;
const Op = db.Sequelize.Op;

// Create and Save a new Customer
exports.createCust = (req, res) => {
  if (!req.body.C_Name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const customer = {
    C_Name: req.body.C_Name,
    D_O_B: req.body.D_O_B, 
    Phone: req.body.Phone,
    Address: req.body.Address
  };

  Customer.create(customer)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    });

};

// Find a single Customer with an id
exports.findOneCust = (req, res) => {
  const id = req.params.id;

  Customer.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Customer with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Customer with id=" + id
      });
    });
};

// Retrieve all Customers from the database.
exports.findAllCust = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  Customer.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    });

};
//----------------------------------------------------------------------------------------------//

//Create and save a new Employee
exports.createEmp = (req, res) => {
  if (!req.body.E_Name) {
    res.status(400).send({
      message: "Name can not be empty!"
    });
    return;
  }
  const employee = {
    E_Name: req.body.E_Name,
    Address: req.body.Address,
    Phone: req.body.Phone,
    Designation: req.body.Designation,
    D_O_B: req.body.D_O_B
  };

  Employee.create(employee)
    .then(data => {
      res.send({message: 'Added Successfully...'});
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding the Employee."
      });
    });
};

//To find a single employee with id
exports.findOneEmp = (req, res) => {
  const id = req.params.id;

  Employee.findByPk(id)
    .then(data => {
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Employee with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Employee with id=" + id
      });
    });
};

// Retrieve all Employees from the database.
exports.findAllEmps = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  Employee.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    });

};
//----------------------------------------------------------------------------------------------//

//Adding a new product
exports.createProduct = (req, res) => {
  if (!req.body.P_Code || !req.body.P_Price) {
    res.status(400).send({
      message: "Enter a valid product code or price!"
    });
    return;
  }
  const product = {           
    P_Name: req.body.P_Name,
    P_Code: req.body.P_Code,
    Description: req.body.Description,
    P_Avail: req.body.P_Avail,
    P_Price: req.body.P_Price
  };

  Products.create(product)
    .then(data => {
      res.send({message: "Added Successfully"});
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding the product."
      });
   });

};

//Retrieve a product using product code.
exports.findOneProd = (req, res) => {
  const Code = req.params.P_Code;

  Products.findOne({ where: { P_Code: Code } })
    .then(data => {
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(404).send({
          message: `Cannot find product with id=${Code}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    });

};

// Retrieve all products from the database.
exports.findAllProds = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  Products.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    });

};

// Update a product by the product code in the request
exports.update = (req, res) => {
 
  console.log(req.body);
  const P_Code = req.params.P_Code;

  Products.update(req.body, {
    where: { P_Code: P_Code }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).send({
          message: "Product was updated successfully."
        });
      } else {
        res.status(404).send({
          message: `Cannot update product with code=${P_Code}. Maybe product was not found or entered details are not valid!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Product with code =" + P_Code
      });
    });
};

// Delete a product by ID
exports.delete = (req, res) => {
  const Code = req.body.Code;

  Products.destroy({
    where: { P_Code: Code }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Product was deleted successfully!"
        });
      } else {
        res.status(400).send({
          message: `Cannot delete product with code =${Code}. Maybe product was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete product with code =" + Code 
      });
    });
};
//----------------------------------------------------------------------------------------------//

exports.createAdmin = (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).send({
      message: "Enter a valid username or password!"
    });
    return;
  }
  const admin = {
    User_Name: req.body.username,
    Password: req.body.password
  };

  Admin.create(admin)
    .then(data => {
      res.send({message: "Admin created successfully."});
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding admin."
      });
    });

};

exports.validate = (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).send({
      message: "Enter a valid username or password!"
    });
    return;
  }
  const username = req.body.username;
  const password = req.body.password

  Admin.findOne({ where: { User_Name: username } })
    .then(data => {
      if (data.Password == password) {
         res.status(200).send({message: "Login Successful"});
      } else {
        res.status(404).send({
          message: `Incorrect password, Authentication failed!`
        });
      }
    })
    .catch(err => {
      res.status(400).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    });
};
//----------------------------------------------------------------------------------------------//

exports.createCashier = (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).send({
      message: "Enter a valid username or password!"
    });
    return;
  }
  const cashier = {
    User_Name: req.body.username,
    Password: req.body.password
  };

  Cashier.create(cashier)
    .then(data => {
      res.send({message: "Cashier created successfully."});
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding cashier."
      });
    });
};

exports.validateCashier = (req, res) => {

  if (!req.body.username || !req.body.password) {
    res.status(400).send({
      message: "Enter a valid username or password!"
    });
    return;
  }
  const username = req.body.username;
  const password = req.body.password

  Cashier.findOne({ where: { User_Name: username } })
    .then(data => {
      if (data.Password == password) {
         res.send({message: "Login Successful"});
      } else {
        res.status(404).send({
          message: `Incorrect password, Authentication failed!`
        });
      }
    })
    .catch(err => {
      res.status(400).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    });
};

//----------------------------------------------------------------------------------------------//

exports.createSales = (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).send({
      message: "Enter a valid username or password!"
    });
    return;
  }
  const sales = {
    User_Name: req.body.username,
    Password: req.body.password
  };

  Sales.create(sales)
    .then(data => {
      res.send({message: "Salesman created successfully."});
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding salesman."
      });
    });
};

exports.validateSales = (req, res) => {

  if (!req.body.username || !req.body.password) {
    res.status(400).send({
      message: "Enter a valid username or password!"
    });
    return;
  }
  const username = req.body.username;
  const password = req.body.password

  Sales.findOne({ where: { User_Name: username } })
    .then(data => {
      if (data.Password == password) {
         res.status(200).send({message: "Login Successful"});
      } else {
        res.status(404).send({
          message: `Incorrect password, Authentication failed!`
        });
      }
    })
    .catch(err => {
      res.status(400).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    });
};