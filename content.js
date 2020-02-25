function uwuify(str){
	var result = ""
	for(var i=0; i < str.length; i++){
		a = str[i];
		if(a === "u"){
			if(str.slice(i,i+3) === "uwu"){
				i += 2;
			}
			a = "uwu";
		}
		else if(a === "U"){
			if(str.slice(i,i+3) === "UwU"){
				i += 2;
			}
			a = "UwU";
		}
		else if(a === "o"){
			if(str.slice(i,i+3) === "owo"){
				i += 2;
			}
			a = "owo";
		}
		else if(a === "O"){
			if(str.slice(i,i+3) === "OwO"){
				i += 2;
			}
			a = "OwO";
		}
		result = result + a;
	}
	return result;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function hi(){
	while(true){
		if(document.readyState === "complete"){
		    $('a,:header,p,td,li,tr,span,input,btn,yt-formatted-string, div, strong, em').not("span[data-text='true']").each(function() {
		    	if($(this).children().length === 0){
					$(this).text(uwuify($(this).text()));
				}
			})
			await sleep(5000);
		}
		await sleep(100);
	}
}

document.onload = hi()



// var list = document.getElementsByTagName("span");
// for(var i=0; i < list.length; i++){
// 	obj = list[i];
// 	for(var j = 0; j < obj.childNodes.length; ++j){
// 		if(obj.childNodes[j].nodeType === 3){
// 			obj.childNodes[j] = uwuify(obj.childNodes[j].textContent);
// 		}
// 	}
// }

// $("span").each(function() {
//     $(this).contents().each(function() {
//       if (this.nodeType == Node.TEXT_NODE)
//         $(this).text(uwuify(this.textContent));
//     });
//   });