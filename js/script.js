$('#wordbotButton').click(function() {
    let wordbot = new XMLHttpRequest();

    wordbot.onreadystatechange = function() {
        if(wordbot.readyState === 4) {
            let response = JSON.parse(wordbot.responseText);
            let wordbotList = "";
            for (i = 0; i < response.words.length; i += 1){
                // if(i % 10 == 0 && i != 0){
                //     wordbotList += "</div><div class='wordRow'>";
                // }

                wordbotList += "<div class='word mx-auto'><a href='https://www.dictionary.com/browse/" + response.words[i] + "' target='_blank'>"+ response.words[i] + "</a></div>";

                console.log(response.words[i]);

            }
            // wordbotList += "</div>";
            $('#wordbotOutput').html(wordbotList);


        };
    };

    wordbot.open('GET', 'https://api.noopschallenge.com/wordbot?count=' + $('#wordbotCount').val() + '&set=' + $('#wordbotSet').val() );
    wordbot.send();
});