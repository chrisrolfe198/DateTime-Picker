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