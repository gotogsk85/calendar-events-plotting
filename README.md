
#calendar-events-plotting

<p>
<a href="https://gotogsk85.github.io/calendar-events-plotting/test.html">Demo Page</a>
</p>
PART 1
 
Create a function to calculate the positioning and width of meetings on a calendar for a single day (9 AM to 9 PM). Assume each minute on the calendar to have a height of 2px(Total height = 1440px). The width should be 600px. 
 
- If there is one meeting between 11.30 and 12, show the meeting at the appropriate time, with a width of 600px.
- If there is more than one event, then the entire width should be split accordingly. (2 events of 300px each).
 
The input to the function will be an array of meeting objects with the time of the beginning and end specified in minutes after 9 AM. For example, 
 
[{
id : 123, start : 120, end : 150
}]
 
specifies a meeting starting at 11 AM and ending at 11.30 AM. 
 
Return the array of the meetings with the width of each meeting, as well as the CSS attributes for its position. (top and left)
 
PART 2
 
Build a webpage that uses the function from PART 1, to show the following meetings - 
 
			 {"id":10,"start":0,"end":90},
			 {"id":13,"start":0,"end":90},
			 {"id":11,"start":15,"end":90},
			 {"id":12,"start":60,"end":90},
			 {"id":14,"start":60,"end":180},
			 {"id":15,"start":120,"end":150},
			 {"id":16,"start":135,"end":165},
			 {"id":18,"start":130,"end":180},
			 {"id":17,"start":145,"end":190},
			 {"id":19,"start":465,"end":645}
 

Important Instructions
1) Keep your solution free of any framework or library usage unless absolutely needed.
2) If you are submitting your code using .zip files, please drop another separate mail about your code submission. (mail with .zip attachment is more likely to land up in Spam folder)
