var target = "METHINKS IT IS A WEASEL";

var offspringCount = 10;

var generationMax = 500;

var showEveryXResults = 2;

function generateRandStr() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
  for (var i = 0; i < target.length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

function generateMutant(mutatee){
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
  var randChar = possible.charAt(Math.floor(Math.random() * possible.length));
  var randIndex = Math.floor(Math.random() * mutatee.length);
  if (randIndex === 0){
    mutatedChild = mutatee.slice(0,(this.length-1)) + randChar;
  }else{
    mutatedChild = mutatee.slice(0,(this.length-(randIndex+1))) + randChar + mutatee.slice(-randIndex);
  }
  return mutatedChild;
}

function matchTarget(str){
  childScore = 0;
  for (i = 0; i < target.length; i++){
    if (str.charAt(i) === target.charAt(i)){
      childScore++;
    }
  }
  return childScore;
}


function generateMultiplesAndScore(strFunc,arr){
  childArr = [];
  for (j = 0; j < offspringCount; j++) {
    newName = strFunc(arr);
    x = {name: newName, score: matchTarget(newName)};
    childArr.push(x);
  }
  return childArr;
};

function returnHighest(arrOfObjs){
  newArr = [];
  for (ind = 0; ind < arrOfObjs.length; ind++){
    newArr.push(arrOfObjs[ind].score);
  }
//  var indexOfMaxValue = newArr.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);

  var indexOfMaxValue = newArr.reduce(function(acc, currVal, currInd, arr){
    if(currVal > arr[acc]){
      return currInd;
    }else{
      return acc;
    }
  },0);

// if the current value is higher than the previous highest value (whose index in the array is stored as 'acc'), make its index 'acc'
// else return 'acc'(the index of the highest found score in the array)

  return arrOfObjs[indexOfMaxValue];
}

function evolve(){
  var originalArr = generateMultiplesAndScore(generateRandStr);
  var BestChild = returnHighest(originalArr);
  document.getElementById("div1").innerHTML = "First Ancestor: " + BestChild.name + "<br/>";

  function reachTarget(){
    document.getElementById("div1").innerHTML += "Generation " + z + ": " + BestChild.name + "<br/>";
    window.scrollTo(0,document.body.scrollHeight);
  }

  for (z = 1; z <= generationMax && BestChild.name !== target; z++){
    var mutantsArr = generateMultiplesAndScore(generateMutant, BestChild.name);
    BestChild = returnHighest(mutantsArr);

    if (BestChild.name == target){
      reachTarget();
    }else if (z % showEveryXResults === 0) {
      reachTarget();
    }
  }
}

document.addEventListener("keydown", evolve);
