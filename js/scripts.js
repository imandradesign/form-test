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
});
