var args = process.argv.slice(2);



function countLetters(stringInput){
  stringInput = stringInput.join("");
  //split deletes all whitespace from stringInput
  stringInput = stringInput.split("");
  // gets all letters from A-Z
  var count = 0;
  var object = {};
  for (var i = 0; i < stringInput.length; i++){
    var character = stringInput[i];

      if (character[i] = stringInput){
      count = count + 1;
    }

    object[character] = count;
  //console.log(character);
  }
  console.log(object);
};




countLetters(args);


//take all the letters and break them up
//add them to an associative array
//count letters if unique
//print them


//count letters that return unique

//count add if found