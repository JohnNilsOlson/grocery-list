
// function cap (sortedList) {
//   return sortedList.charAt(0).toUpperCase() + sortedList.slice(1)
// }

$(document).ready(function(event) {
  $("#list").submit(function(event) {

// let list1 = $substr(0,1).toUpperCase() + substr(1)("input#item1").val();
// $("input#item1").text(str.charAt(0).toUpperCase() + str.substr(1).toLowerCase().val();
  
  let list1 = $("input#item1").val();
  let list2 = $("input#item2").val();
  let list3 = $("input#item3").val();

  let listArrays = [list1, list2, list3];
  
  let sortedList = listArrays.sort();

  // let upperCaseList = sortedList.toUpperCase();

  // sortedList.forEach(function(element) {
  //  $(element).text(str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
  //  });

  sortedList.forEach(function(sortedList) {
    $("#output").append("<li>" + sortedList + "</li>");
    });

  event.preventDefault();

  });
});

//    $(".btn").click(function(event) {
//      $("#copy").clone().prependTo("#list");
//  });


  // const capitalList = sortedList.charAt(0).toUpperCase() + sortedList.slice(1)