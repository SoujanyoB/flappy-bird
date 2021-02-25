var selectDifficultyDOM = document.querySelector('.difficultySelection');
var difficulty;

function findDifficulty() {
    for(var i = 0; i< selectDifficultyDOM.children.length; i++) {
        if(selectDifficultyDOM.children.item(i).classList.contains('active')) {
            difficulty = selectDifficultyDOM.children.item(i).attributes.getNamedItem('data-difficulty').nodeValue;
        }
    }
}

console.log(difficulty);


// module.exports.difficulty = difficulty;
// console.log(difficulty);