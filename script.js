
// Opening ceremony.
function OpeningCeremony(callbackFnc) {
    setTimeout(() => {
        console.log("Let the games begin");
        const score = { red: 0, blue: 0, green: 0, yellow: 0 };
        console.log("Initial score:", score);
        callbackFnc(score, Race100M);
    }, 1000); // Changed timeout from 100 to 1000 milliseconds
}

// Race 100 meter.
function Race100M(score, callbackFnc) {
    setTimeout(() => {
        console.log("Race100M");
        const times = {
            red: Math.floor(Math.random() * 6) + 10,
            blue: Math.floor(Math.random() * 6) + 10,
            green: Math.floor(Math.random() * 6) + 10,
            yellow: Math.floor(Math.random() * 6) + 10
        };
        const sortedColors = Object.keys(times).sort((a, b) => times[a] - times[b]);
        score[sortedColors[0]] += 50;
        score[sortedColors[1]] += 25;
        console.log("Updated score:", score);
        callbackFnc(score, LongJump);
    }, 3000); 
}

// Long Jump.
function LongJump(score, callbackFnc) {
    setTimeout(() => {
        console.log("LongJump");
        const color = ['red', 'yellow', 'green', 'blue'][Math.floor(Math.random() * 4)];
        score[color] += 150;
        console.log("Updated score:", score);
        callbackFnc(score, HighJump);
    }, 2000); 
}

// High Jump.
function HighJump(score, callbackFnc) {
    setTimeout(() => {
        console.log("HighJump");
        const userInput = prompt("What colour secured the highest jump?");
        if (userInput && score.hasOwnProperty(userInput)) {
            score[userInput] += 100;
            console.log(`Updated score:`, score);
        } else {
            console.log("Event was cancelled");
        }
        callbackFnc(score, AwardCeremony);
    }, 0);
}

// Award ceremony.
function AwardCeremony(score) {
    console.log("AwardCeremony");
    const sortedScores = Object.entries(score).sort((a, b) => b[1] - a[1]);
    console.log(`${sortedScores[0][0]} came first with ${sortedScores[0][1]} points.`);
    console.log(`${sortedScores[1][0]} came second with ${sortedScores[1][1]} points.`);
    console.log(`${sortedScores[2][0]} came third with ${sortedScores[2][1]} points.`);
}

// callback hell scenario.
OpeningCeremony((score, callbackFnc) => {
    Race100M(score, (score, callbackFnc) => {
        LongJump(score, (score, callbackFnc) => {
            HighJump(score, (score, callbackFnc) => {
                AwardCeremony(score);
            });
        });
    });
});
