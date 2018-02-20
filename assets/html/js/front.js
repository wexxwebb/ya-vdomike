  $("#first-select").change(function() {
             if ($("#first-select").val() == 1) {
                 $("#first-cost").html($("#first-cost").html() - 3000);
             }
         });
         
         $("#first-select").change(function() {
             if ($("#first-select").val() == 2) {
                 $("#first-cost").html($("#first-cost").html() - -3000);
             }
         });
         
         $("#complect-select-1").change(function() {
             if ($("#complect-select-1").val() == 1) {
                 $("#first-cost").html($("#first-cost").html() - 7000);
             }
         });
         
         $("#complect-select-1").change(function() {
             if ($("#complect-select-1").val() == 2) {
                 $("#first-cost").html($("#first-cost").html() - -7000);
             }
         });
         
         
