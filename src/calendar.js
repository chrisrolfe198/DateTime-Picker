(function(exports) {
	"use strict";

	function Calendar(month, year) {
		this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
		this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		this.days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

		this.current_date = new Date();

		this.month = (isNaN(month) || month === null) ? this.current_date.getMonth() : month;
		this.year  = (isNaN(year) || year === null) ? this.current_date.getFullYear() : year;
		this.html = '';
	}
	exports.Calendar = Calendar;

	Calendar.prototype.generate_html = function(){
		var firstDay = new Date(this.year, this.month, 1);
		var startingDay = firstDay.getDay();
		var monthLength = this.days_in_month[this.month];

		if (this.month === 1) { // February only! Check if it's a leap year
			if ((this.year % 4 === 0 && this.year % 100 !== 0) || this.year % 400 === 0){
				monthLength = 29;
			}
		}

		var monthName = this.months[this.month];
		var html = '<table class="calendar-table">';
		html += '<tr><th colspan="7">';
		html +=  monthName + "&nbsp;" + this.year;
		html += '</th></tr>';
		html += '<tr class="calendar-header">';
		for (var x = 0; x <= 6; x++ ){
			html += '<td class="calendar-header-day">';
			html += this.days[x];
			html += '</td>';
		}
		html += '</tr><tr>';

		var day = 1;
		// this loop is for is weeks (rows)
		for (var i = 0; i < 9; j++) {
			// this loop is for weekdays (cells)
			for (var j = 0; j <= 6; j++) { 
				html += '<td class="calendar-day">';
				if (day <= monthLength && (i > 0 || j >= startingDay)) {
					html += day;
					day++;
				}
				html += '</td>';
			}
			// stop making rows if we've run out of days
			if (day > monthLength) {
				break;
			} else {
				html += '</tr><tr>';
			}
		}

		html += '</tr></table>';

		html += '<a id="next-month">Next</a>';
		html += '<a id="previous-month">Previous</a>';

		this.html = html;
	};
})(window);