"use strict";function getCurrentPage(a){return currentPage=storyData[a]}function recordChoice(a){choiceList.push(a),console.log("Added ${slug} to choiceList Array.")}function undoChoice(){return choiceList.pop(),choiceList[choiceList.length-1]}function changePage(a){recordChoice(a),currentPage=getCurrentPage(a),updatePage(currentPage)}function updatePage(a){pageContent.innerHTML=a.text,choicesUL.innerHTML="";var b=!0,c=!1,d=void 0;try{for(var e,f=a.choices[Symbol.iterator]();!(b=(e=f.next()).done);b=!0){var g=e.value,h=document.createElement("li");h.innerHTML=g.text,h.setAttribute("data-slug",g.link),choicesUL.appendChild(h)}}catch(i){c=!0,d=i}finally{try{!b&&f["return"]&&f["return"]()}finally{if(c)throw d}}addEventListeners()}function addEventListeners(){var a=document.querySelectorAll("#choices li"),b=!0,c=!1,d=void 0;try{for(var e,f=a[Symbol.iterator]();!(b=(e=f.next()).done);b=!0){var g=e.value;g.addEventListener("click",function(a){console.log("Moving to page: "+a.target.dataset.slug),changePage(a.target.dataset.slug)})}}catch(h){c=!0,d=h}finally{try{!b&&f["return"]&&f["return"]()}finally{if(c)throw d}}}var playerName="",choiceList=[],currentPage=null;playerName=prompt("Enter your player name.");var storyData={title:"The Dev",p1:{text:"You are a young and up and coming Web Developer named "+playerName+". Standing on a large seal on the ground, you look at your surroundings.",choices:[{text:"You see a steep uphill path straight ahead.",link:"p2"},{text:"To your right, you notice a holy light shining in the distance.",link:"p3"},{text:"To your left, a very long path, but the aroma of food drifts in the air.",link:"p4"},{text:"You decide to turn around from which you came.",link:"homeEnd"}]},homeEnd:{text:"You walk aimlessly into a four way street, but was flamming eye from tower scares you back to the seal.\n                <br><br>\n                You scratch your head, and recollect your thoughts.",choices:[{text:"Play again?",link:"p1"}]},p2:{text:"You walk briskly up the steep high to find yourself hearing a melody of music and water running close by.",choices:[{text:"Check out the sounds that tempt your ears.",link:"p5"},{text:"You ignore the random sounds, and continue to walk straight up the hill.",link:"p6"}]},p6:{text:"Finally you've reached the peak of the hill only to find a blocked paths of fallen trees ahead of you and to the left.",choices:[{text:"Try to move the trees.",link:"trees"},{text:"Avoid the trees turn right doen a long abandoned path.",link:"p8"},{text:"Turn around and go back down the hill.",link:"p2"}]},p3:{text:"A shining light beams bright over a chapel named St. Ignatius. ",choices:[{text:"Walk inside the chapel.",link:"chapel"},{text:"Ignore the chapel and adventure past it.",link:"p7"},{text:"You notice movement in the bushes to your left, and walks towards it.",link:"doggo"}]},p4:{text:"You drag your feet across the road with your nose pointed in the air as your stomach speaks of an unknown language.",choices:[{text:"Feeling lost, you continue to walk straight toward a gated entry.",link:"info"},{text:"Ignoring your stomach, your senses guide you to a hidden entry to the right where light flickers against the walls.",link:"library"}]},chapel:{text:"A figure stands up from the pew, and turns to face you. He introduces you as Steven Holl.",choices:[{text:"Act suspicious and question him about what is he doing here.",link:"suspicious"},{text:'"You\'re the architect!" You shout, a little louder than you anticpiated.',link:"architect"}]},suspicious:{text:"Steven looks away in the distance and ignores you.\n                <br><br>\n                You feel that you have offended him.",choices:[{text:"Apologize to Steven.",link:"architect"},{text:"Leave the chapel.",link:"p3"}]},architect:{text:'He looks at you and says, "'+playerName+"! I've been waiting for you to fill these seven bottles with light.",choices:[{text:"Accept the quest.",link:"accept"},{text:"Decline the quest.",link:"decline"}]},doggo:{text:"A large fuzzy doggo jump out from behind the bushes with a key in its mouth.\n                <br><br>\n                You reach down to receive the key.",choices:[{text:"Pet the doggo.",link:"pet"},{text:"Walk out of the bushes.",link:"walkOut"}]},pet:{text:'You pet the doggo, and he wags his tail in happiness.\n                <br><br>\n                You\'ve gained a new party member named "Doggo"!',choices:[{text:"Walk out of the bushes with Doggo",link:"walkDoggo"},{text:"Tell Doggo to stay, and you walk out of the bushes",link:"p3"}]}},title=document.querySelector("#story-title");title.innerHTML=storyData.title;var pageContent=document.querySelector("#story-text"),choicesUL=document.querySelector("#choices"),undo=document.querySelector("#undo");undo.addEventListener("click",function(){console.log("Undoing last choice.");var a=undoChoice();currentPage=getCurrentPage(a),updatePage(currentPage)}),currentPage=storyData.p1,updatePage(currentPage);