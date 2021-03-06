$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput= $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });


  $("#form-name form").submit(function(event) {
    var name1Input = $("input#name1").val().charAt(0).toUpperCase() + $("input#name1").val().slice(1);

    $(".name1").text(name1Input);

    $("#letter").show();

    event.preventDefault();
  });


  $("#form-exclaim form").submit(function(event) {
    var phraseInput = $("input#phrase").val().toUpperCase()

    $(".phrase").text(phraseInput);

    $("#exclamation").show();

    event.preventDefault();
  });

  //var fullNameInput = $("input#first-name").val() + " " + $("input#last-name").val();
  //var fullAddressInput= $("input#street-address").val() + " " + $("input#city").val() + ", " + $("input#state").val() + " " + $("input#zip-code").val();


  $("#order-form form").submit(function(event) {
    var firstNameInput = $("input#first-name").val().charAt(0).toUpperCase() + $("input#first-name").val().slice(1);
    var lastNameInput = $("input#last-name").val().charAt(0).toUpperCase() + $("input#last-name").val().slice(1);
    var streetAddressInput= $("input#street-address").val();
    var cityInput = $("input#city").val().charAt(0).toUpperCase() + $("input#city").val().slice(1);
    var stateInput = $("input#state").val().toUpperCase();
    var zipCodeInput = $("input#zip-code").val();

    $(".first-name").text(firstNameInput);
    $(".last-name").text(lastNameInput);
    $(".street-address").text(streetAddressInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip-code").text(zipCodeInput);

    $("#thank-you").show();

    event.preventDefault();
  });
});
