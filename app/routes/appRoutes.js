module.exports = app => {
    const Customers = require("../controllers/appController.js");
    const Employees = require("../controllers/appController.js");
    const Products = require("../controllers/appController.js");
    const Admin = require("../controllers/appController.js");
    const Cashier = require("../controllers/appController.js");
    const Sales = require("../controllers/appController.js");
  
    var router = require("express").Router();
//-----------------------------------------------------------------------------------------// 

    // Create a new Customer
    router.post("/Create/cust", Customers.createCust);

    // Retrieve a single customer with id
    router.get("/Cust/:id", Customers.findOneCust);
    
    // Retrieve all Customers
    router.get("/Customers", Customers.findAllCust);
//-------------------------------------------------------------------------------------------//

    //Add a new employee
    router.post("/Create/Emp", Employees.createEmp);
    
    //Retrieve all employees.
    router.get("/Employees", Employees.findAllEmps);

    //Find an employee with id.
    router.get("/Emp/:id", Employees.findOneEmp);
//------------------------------------------------------------------------------------------//

    //Add a new product 
    router.post("/Create/Prod", Products.createProduct);

    //Retrieve all products.
    router.get("/Products", Products.findAllProds);

    //Find a product with prod. code.
    router.get("/ProdBy/:P_Code", Products.findOneProd);
  
    // Update a product with prod. code.
    router.put("/ProdUp/:P_Code", Products.update);
  
    // Delete a product with prod. code.
    router.delete("/DelProd", Products.delete);
//------------------------------------------------------------------------------------------//

    router.post("/AC", Admin.createAdmin);
    router.post("/Admin", Admin.validate);

//------------------------------------------------------------------------------------------//

    router.post("/CC", Cashier.createCashier);
    router.post("/Cashier", Cashier.validateCashier);
//------------------------------------------------------------------------------------------//

    router.post("/SC", Sales.createSales);
    router.post("/Sales", Sales.validateSales);
    
    app.use('/Avenue', router);
  };