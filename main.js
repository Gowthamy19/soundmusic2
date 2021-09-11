SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});
$(document).ready(function() {

  SC.stream('/tracks/258015308',function(sound){

    $('#start').click(function(e) {
             e.preventDefault();
             sound.start();
           });
           $('#stop').click(function(e) {
            e.preventDefault();
            sound.stop();
            });


   });

  });

  SC.initialize({
    client_id: '340f063c670272fac27cfa67bffcafc4'
  });
  $(document).ready(function() {

    SC.stream('/tracks/1003998049',function(sound){

      $('#start1').click(function(e) {
               e.preventDefault();
               sound.start();
             });
             $('#stop1').click(function(e) {
              e.preventDefault();
              sound.stop();
              });


     });

    });
