$(document).ready(function () {
    var mainQuestions = [
        {
            question: "What is the hottest known planet?",
            options: ["Jupiter", "KELT-9b", "Earth", "KELT-9c"],
            correct: 1,
        },
        {
            question: "Who was the first person to make a drawing of the moon?",
            options: ["Galileo Galilei", "Thomas Harriot", "Michael Scott", "Neil Armstrong"],
            correct: 1,
        },
        {
            question: "Scientist at Yale University believe that the planet 55 Cancri e is made out of ____.",
            options: ["Diamonds", "Rubies", "Sapphire", "The tears of college students"],
            correct: 0,
        },
        {
            question: "What shape is the raging storm on Saturn in?",
            options: ["Circle", "Heart", "Octogon", "Hexagon"],
            correct: 3,
        },
        {
            question: "Who wrote the code to send the Apollo to the moon?",
            options: ["John Densmore", "Maragret Thatcher", "John Lennon", "Margaret Hamilton"],
            correct: 3,
        }
    ];
    var userSelection = 0;
    var correctAnswer;
    var wrongAnswer;
    var questionsGenerated = 0;
    var time = 60;
    var currentQuestion = 0;
    var intervalId;
    var number = 0;

    $("#start").click(function () {
        generate();


    });
    function generate() {
        $("#triviaGame").html("<h1>" + mainQuestions[currentQuestion].question + "</h1>");
        mainQuestions[currentQuestion].options.forEach(function (selection, index) {
            $('<div>')
                .text(selection)
                .attr('data-index', index)
                .addClass("selection")
                .appendTo($("#choices"));
        });
        timeKeeper();
        $(".selection").on("click", function () {
            userSelection = $(this).data("index");
            console.log(userSelection);
        });

        correctAnswer = mainQuestions[currentQuestion].correct;
        console.log(correctAnswer);
    }

    function timeKeeper() {
        number = 60;
        $("#timeAppear").html("<h1>" + number + "</h1>");
        time = setInterval(decrement, 1000);
        // $("#mainQuestions").empty();

        // clearInterval(intervalId);
        // intervalId = setInterval(decrement, 60000);
    };

    function decrement() {
        number--;
        $("#timeAppear").html("<h1>" + number + "</h1>");

        if (number === 30) {
            $(".alert").html('30 seconds left!');
        };

        if (number === 0) {
            stop();


        };
        function stop() {
            clearInterval(time);
        };
    };

});


//still need to generate the other questions on the screen. The answer choices display which object # in the array they are, but they do not display which is correct.