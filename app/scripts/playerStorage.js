// var prefix = "playerStorage-";
// $("#save").click(function () { 
//     var key = $("#key").attr('value');
//     var value = $("#value").attr('value');
//     localStorage.setItem(prefix + key, value);      //******* setItem()
//     //localStorage[prefix+key] = value; also works
//     RewriteFromStorage();
// });

// function RewriteFromStorage() {
//     $("#data").empty();
//     for(var i = 0; i < localStorage.length; i++)    //******* length
//     {
//         var key = localStorage.key(i);              //******* key()
//         if(key.indexOf(prefix) == 0) {
//             var value = localStorage.getItem(key);  //******* getItem()
//             //var value = localStorage[key]; also works
//             var shortkey = key.replace(prefix, "");
//             $("#data").append(
//                 $("<div class='kvp'>").html(shortkey + "=" + value)
//                    .append($("<input type='button' value='Delete'>")
//                            .attr('key', key)
//                            .click(function() {      //****** removeItem()
//                                 localStorage.removeItem($(this).attr('key'));
//                                 RewriteFromStorage();
//                             })
//                           )
//             );
//         }
//     }
// }

// RewriteFromStorage();