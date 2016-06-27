describe("The specification for orchard functions", function() {

//are the base objects defined?
  it("Is plant() defined?", function() {
    expect(Plant).toBeDefined();
  });
  it("Is tree() defined?", function() {
    expect(Tree).toBeDefined();
  });
//are the functions for height manipulation defined?
  it("Is there a height increasing function?",function() {
    spyOn(Plant.prototype, "increaseHeight");
    expect(Plant.prototype.increaseHeight).toBeDefined();
  });
  it("Is there a height decreasing function?",function() {
    spyOn(Plant.prototype, "decreaseHeight");
    expect(Plant.prototype.decreaseHeight).toBeDefined();
  });
//check for a plant property of height
  it("Does the plant have a height?", function() {
    expect(Plant.this.height).toBeDefined();
  });
// check for methods on tree
  it("Is there a grow function?",function() {
    spyOn(Tree.prototype, "grow");
    expect(Tree.prototype.grow).toHaveBeenCalled();
  });
  it("Is there a trim function?",function() {
    spyOn(Tree.prototype, "trim");
    expect(Tree.prototype.trim).toHaveBeenCalled();
  });
// Does trim work?
  // it("Does trim method trim?", function() {
  //   spyOn(AppleTree, "height").andReturn(0);
  //   ///what here?
  //   expect(AppleTree.height).toBe(0);
  // });
  // it("Does grow method grow?", function() {
  //   spyOn(AppleTree, "height").andReturn(0);
  //   ///what here?
  //   expect(AppleTree.height).toBe(2);
  // });
});