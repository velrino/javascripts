$( CLASSE/ID/NAME ).change(function(){

      var fields = $( FORMULARIO ).serializeArray();
      jQuery.each( fields, function( i, field ) {

        while (field.value.length == 0){
          return $(CLASSE/ID/NAME).hide();
        }
        return $(CLASSE/ID/NAME).show();
      });
});
