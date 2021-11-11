$(document).ready(function(){
    $(".numInput").change(function(){
        var index = Number($(this).closest("tr").find("th:eq(0)").text()); 
        var currentRow=$(this).closest("tr");
        var inputnum=Number($(this).val());
        var sumCol = "#"+index+"sum";
        var col1=currentRow.find("td:eq(0)").text();
        var firstnum=Number(col1);

        var firstId = "first"+index;
        var secondId = "second"+index;
        var thirdId = "third"+index;
        var originData = JSON.parse(localStorage.getItem("myData"));
        var currentData = originData[index-1]
        console.log('====================================');
        console.log(originData[index-1]);
        console.log(firstId);
        console.log(currentData[firstId]);
        console.log('====================================');
        // if(originFirst[index-1][0] != firstnum){
        //     $(firstId).empty();
        //     $(firstId).append(originData[index-1][0]);
        // }



        $(sumCol).empty();
        $(sumCol).append(currentData[firstId]+currentData[secondId]+currentData[thirdId]+inputnum);
    });
});

// $(document).ready(function(){
//     $(".numInput").change(function(){
//         var index = $(this).closest("tr").find("th:eq(0)").text(); 
//         var currentRow=$(this).closest("tr");
//         var secondnum=Number($(this).val());
//         var divCol = "#"+index+"quo";
//         var col1=currentRow.find("td:eq(0)").text();
        
//         var firstnum=Number(col1);
//         var firstId = "#first"+index
//         var originFirst = JSON.parse(localStorage.getItem("myData"));
//         // if(originFirst[index-1][0] != firstnum){
//         //     $(firstId).empty();
//         //     $(firstId).append(originFirst[index-1][0]);
//         // }
//         $(divCol).empty();
//         $(divCol).append(firstnum/secondnum);
//     });
// });

$(document).ready(function(){
    $(".numInput").change(function(){
        var index = Number($(this).closest("tr").find("th:eq(0)").text()); 
        var currentRow=$(this).closest("tr");
        var inputnum=Number($(this).val());
        var proCol = "#"+index+"pro";
        var col1=currentRow.find("td:eq(0)").text();
        var firstnum=Number(col1);

        var firstId = "first"+index;
        var secondId = "second"+index;
        var thirdId = "third"+index;
        var originData = JSON.parse(localStorage.getItem("myData"));
        var currentData = originData[index-1]
        console.log('====================================');
        console.log(originData[index-1]);
        console.log(firstId);
        console.log(currentData[firstId]);
        console.log('====================================');
        // if(originFirst[index-1][0] != firstnum){
        //     $(firstId).empty();
        //     $(firstId).append(originData[index-1][0]);
        // }



        $(proCol).empty();
        $(proCol).append(currentData[firstId]*currentData[secondId]*currentData[thirdId]*inputnum);
    });
});


// $(document).ready(function(){
//     $(".numInput").change(function(){
//       var index = $(this).closest("tr").find("th:eq(0)").text(); 
//       var currentRow=$(this).closest("tr");
//       var secondnum=Number($(this).val());
//       var subCol = "#"+index+"diff";
//       var col1=currentRow.find("td:eq(0)").text();
      
//       var firstnum=Number(col1);
//       var firstId = "#first"+index
//         var originFirst = JSON.parse(localStorage.getItem("myData"));
//         // if(originFirst[index-1][0] != firstnum){
//         //     $(firstId).empty();
//         //     $(firstId).append(originFirst[index-1][0]);
//         // }
//       $(subCol).empty();
//       $(subCol).append(firstnum-secondnum);
//     });
//   });