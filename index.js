// add solution here
function theBeatlesPlay (musicians, instruments) {
  var allMusicians = [];
  for (var i = 0; i < musicians.length; i++) {
    var string =`${musicians[i]} plays ${instruments[i]}`;
    allMusicians.push(string);
  }
  return allMusicians
}

function johnLennonFacts (facts) {
  var array = [];
  let i = 0
  while(i < facts.length){
    array.push(`${facts[i]}!!!`);
    i++;
  }
  return array
}