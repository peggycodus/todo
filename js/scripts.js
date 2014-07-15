$(document).ready(function() {
  $('#add-address').click(function(){
      $("#new-addresses").append('<hr /><br /><div class="new-address">'+
                                  '<div class="form-group">' +
                                  '<label for="new-street">Street</label>' +
                                  '<input type="text" class="form-control new-street">' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                  '<label for="new-city">City</label>' +
                                  '<input type="text" class="form-control new-city">' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                  '<label for="new-state">State</label>' +
                                  '<input type="text" class="form-control new-state">' +
                                  '</div>');
  });

  $("form#new-contact-form").submit(function(event) {
    event.preventDefault();
    var newFirstName = $("input#new-first-name").val();
    var newLastName = $("input#new-last-name").val();
    if((newFirstName === "") || (newLastName === "")){
      alert("Please enter a valid first AND last name");
    } else {
      var newContact = {firstName: newFirstName, lastName: newLastName, addresses: []};

      $(".new-address").each(function() {
        var newStreet = $(this).find("input.new-street").val();
        var newCity = $(this).find("input.new-city").val();
        var newState = $(this).find("input.new-state").val();

        if(newStreet === "") {
          newStreet = "Unknown";
        }
        if(newCity === "") {
          newCity = "Unknown";
        }
        if(newState === "") {
          newState = "Unknown";
        }

        var newAddress = {street: newStreet, city: newCity, state: newState};
        newContact.addresses.push(newAddress);
      });


      $("ul#contact-name").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");
      $(".contact-list").show();

      $(".contact").last().click(function() {
        $("#contactDetails h2").text(newContact.firstName + " " + newContact.lastName);
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);
        $("dl#addresses").text("");
        $("#contactDetails").show();

        newContact.addresses.forEach(function(address) {
          $("dl#addresses").append("<dd>Street: " + address.street + "</dd><dd>City: " + address.city + "</dd><dd>State: " + address.state + "</dd>");
        });
      });

      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
      $("input.new-street").val("");
      $("input.new-city").val("");
      $("input.new-state").val("");
    } //End if statement
  });

  $("form#add-extraInfo").submit(function(event) {
    event.preventDefault();
    $("form#extraInfo").show();
    var newWorkPhone = $("input.new-workphone").val();
    var newMobilePhone = $("input.new-mobilephone").val();
    var newEmail = $("input.new-email").val();

    $("dl#phoneEmail").append("<dd>Work Phone: " + newWorkPhone + "</dd><dd>Mobile Phone: " + newMobilePhone + "</dd><dd>Email: " + newEmail + "</dd>");
     $("#phoneEmail").show();

    $("input#new-workphone").val("");
    $("input#new-mobilephone").val("");
    $("input.new-email").val("");
  })
});

