var expect = chai.expect;
 
describe("DateTimePicker", function() {
  describe("constructor", function() {
    it("should have a date set by default equal to now", function() {
      var datetimepicker = new DateTimePicker();
      var now = Math.round(new Date().getTime() / 1000);
      // Add a few seconds for leeway
      expect(Math.round(datetimepicker.currentDate.getTime() / 1000)).to.within(now - 2, now);
    });
 
    it("should set a date if one is provided", function() {
      var datetimepicker = new DateTimePicker(null, "Tuesday, 24 February 2015");
      expect(Math.round(datetimepicker.currentDate.getTime() / 1000))
        .to.equal(Math.round(new Date("Tuesday, 24 February 2015").getTime() / 1000));
    });
  });
});