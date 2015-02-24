(function(exports) {
	"use strict";

	function Calendar() {
		this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
		this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		this.days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	}
	exports.Calendar = Calendar;
})(window);
(function(exports) {
	"use strict";

	function DateTimePicker(currentDate) {
		if (currentDate !== undefined && new Date(currentDate)) {
			this.currentDate = new Date(currentDate);
		} else {
			this.currentDate = new Date();
		}
	}
	exports.DateTimePicker = DateTimePicker;
})(window);