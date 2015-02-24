(function(exports) {
	"use strict";

	function DateTimePicker(el, currentDate) {
		if (currentDate !== undefined && new Date(currentDate)) {
			this.currentDate = new Date(currentDate);
		} else {
			this.currentDate = new Date();
		}
		this.calendar = new exports.Calendar(this.currentDate.getMonth(), this.currentDate.getFullYear());
		this.calendar.generate_html();
		this.insert();
	}
	exports.DateTimePicker = DateTimePicker;
})(window);