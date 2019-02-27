$(document).ready(function () {
    var mainQuestions = [
        {
            question: "What is the hottest known planet?",
            options: ["Jupiter", "KELT-9b", "Earth", "KELT-9c"],
            correct: "KELT-9b",
        },
        {
            question: "Who was the first person to make a drawing of the moon?",
            options: ["Galileo Galilei", "Thomas Harriot", "Michael Scott", "Neil Armstrong"],
            correct: "Thomas Harriot",
        },
        {
            question: "Scientist at Yale University believe that the planet 55 Cancri e is made out of ____.",
            options: ["Diamonds", "Rubies", "Sapphire", "The tears of college students"],
            correct: "Diamonds",
        },
        {
            quesion: "What shape is the raging storm on Saturn in?",
            options: ["Circle", "Heart", "Octogon", "Hexagon"],
            correct: "Hexagon",
        },
        {
            question: "Who wrote the code to send the Apollo to the moon?",
            options: ["John Densmore", "Maragret Thatcher", "John Lennon", "Margaret Hamilton"],
            correct: "Margaret Hamilton",
        }
    ];
    var correctAnswer = 0;
    var wrongAnswer = 0;
    var question = 0;
    var questionsGenerated = 0;
    var trivia;
    var time = 60;
    var intervalId;

    $("#start").click(function () {
        generate();
    });

    function timeKeeper() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 600);
    };

    function decrement() {
        number--;
        $("#timeAppear").html("<h1>" + number + "</h1>");

        if (number === 30) {
            alert("30 seconds left!");
            console.log("30 seconds left!");
        };

        if (number === 0) {
            stop();
            alert("Out of time! Let's see if you reached the moon!");

        };
        function stop() {
            clearInterval(intervalId);
        });
        };

function generate() {

}
    });
