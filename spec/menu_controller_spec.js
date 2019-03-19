const MenuController = require("../controllers/MenuController");

 beforeEach(() => {
    this.menu = new MenuController();
  });

// #1
 describe("MenuController", () => {
   
   describe("#remindMe", () => {
     it("should return a string containing 'Learning is a life-long pursuit'", () => {
       expect(this.menu.remindMe()).toBe("Learning is a life-long pursuit")
     });
   });

 });
