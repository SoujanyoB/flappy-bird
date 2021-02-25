let scoresPane = document.querySelector('.scoresPane');

function get_scores(callback) {

    // High score data
    let file = "../../scores.json";

    //fetch high score data
    fetch(file, {cache: 'no-cache'})
        .then(res => {
            // if response isn't okay
            if(response.status != 200) {
                scoresPane.innerHTML = res.status;
            }
            res.json().then(data => {
                let scores = JSON.stringify(data);
                console.log(scores);
                callback(scores);
            });
        })
        .catch(err => {
            scoresPane.innerHTML = err;
        });
}