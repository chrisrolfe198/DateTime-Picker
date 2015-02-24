var expect = chai.expect;
 
describe("DateTimePicker", function() {
  describe("constructor", function() {
    it("should have a date set by default equal to now", function() {
      var cow = new DateTimePicker();
      expect(cow.currentDate.getTime()).to.equal(new Date().getTime());
    });
 
    it("should set a date if one is provided", function() {
      var cow = new DateTimePicker("Tuesday, 24 February 2015");
      expect(cow.currentDate.getTime()).to.equal(new Date("Tuesday, 24 February 2015").getTime());
    });
  });
});