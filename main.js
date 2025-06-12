

  $(document).ready(function(){
    var autocomplete;
    var from = 'from';
    autocomplete = new google.maps.places.Autocomplete((document.getElementById(from)),{
      //types:['airport'],
      //componentRestrictions: { country: ["np","us"]},
      strictBounds: false,
    });

   google.maps.event.addListener(autocomplete,'place_changed',function(){

     var place = autocomplete.getPlace();
      console.log(place);

   });

      // Set initial restriction to the greater list of countries.
  // autocomplete.setComponentRestrictions({
  //   country: ["np"],
  // });


    var to = 'to';
    autocomplete_to = new google.maps.places.Autocomplete((document.getElementById(to)),{
      // types: ['geocode'],
    })


  })