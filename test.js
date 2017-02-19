
	(function(){
		var meetings = [

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

		].sort(function(a,b){
			return a.start - b.start;
		}),
		meeting = "",
		meetingsCheckIndex = [],
		totalHeight = 1440;
		document.getElementById("meetingsArea").style.height = totalHeight+"px";		

		
		function _setAdditionalMeetingAttrs(){
			var width = meetingsCheckIndex.length > 0 ? 600 / meetingsCheckIndex.length : 600; 
			for(var c = 0; c < meetingsCheckIndex.length; c++){
				var index = meetingsCheckIndex[c],
					meeting = meetings[index];
				meeting.width = c == 0 ? width :  width - 1;
				meeting.height = (meeting.end - meeting.start) * 2;
				meeting.leftPosition = c == 0 ? (c * width) - 1 : c * width;
				meeting.topPosition = meeting.end * 2 - meeting.height;
			}				
			meetingsCheckIndex = [];
		}

		function _getMeetingPositions(){
			
			for(var c=0;c<meetings.length;c++){
				meeting = meetings[c];
				if(meetings.length > 1){
					if(c <  (meetings.length - 1)) {
						if(meeting.end  < meetings[c+1].start){
							meetingsCheckIndex.pop();
							meetingsCheckIndex.push(c);
							_setAdditionalMeetingAttrs()
						}else{
							meetingsCheckIndex.pop();
							meetingsCheckIndex.push(c, c+1);
						}
					}else{
						meetingsCheckIndex.pop();
						meetingsCheckIndex.push(c);
						_setAdditionalMeetingAttrs();
					}
				}else{
					meetingsCheckIndex.pop();
					meetingsCheckIndex.push(c);					
					_setAdditionalMeetingAttrs();
				}
			}
			console.log(meetings);
		}

		function _plotMeetings(){
			console.log(meetings);
			console.log(totalHeight);
			var meetingsArea = document.getElementById("meetingsArea");
			meetings.forEach(function(meeting) {
				var div = document.createElement("div");
				div.setAttribute("class","meeting");
				div.setAttribute("style",
					"left: "+meeting.leftPosition+"px;top: "+meeting.topPosition+"px;height: "+meeting.height+"px;width: "+meeting.width+"px;");
				div.appendChild(document.createTextNode(meeting.id));
				meetingsArea.appendChild(div);
			});

		}

		_getMeetingPositions();				
		_plotMeetings();


	}())
