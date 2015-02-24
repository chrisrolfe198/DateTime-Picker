(function(exports) {
	"use strict";

	function DateTimePicker(el, currentDate) {
		if (el) {
			this.el = el;
		} else {
			throw new Error('You need to attach the Date Time picker to an element');
		}

		if (currentDate !== undefined && new Date(currentDate)) {
			this.currentDate = new Date(currentDate);
		} else {
			this.currentDate = new Date();
		}
		this.calendar = new exports.Calendar(this.currentDate.getMonth(), this.currentDate.getFullYear());
		this.calendar.generate_html();
	}
	exports.DateTimePicker = DateTimePicker;
})(window);