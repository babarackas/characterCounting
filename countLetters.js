var args = process.argv.slice(2);


function countLetters(stringInput){
  stringInput = stringInput.join("");
  //split deletes all whitespace from stringInput
  stringInput = stringInput.split("");

  var object = {};
  for (var i = 0; i < stringInput.length; i++){
    var character = stringInput[i];
    //console.log(object[character]);
    //this line checks if character comes for the first time
    if (object[character] === undefined){
      object[character] = 1;
      //console.log(object[character]);
    }
    else{
      object[character] = object[character] + 1;
      //console.log(object[character]);
    }

  //console.log(character);
  }
  console.log(object);
};

countLetters(args);


