function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rankedLists.length; i++){
    for (let j = 0; j < rankedLists[i].childElementCount; j++){
      const val = parseInt(rankedLists[i].children[j].innerHTML, 10);
      rankedLists[i].children[j].innerHTML = val + n;
    }
  }
}