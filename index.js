function changequote(){
    var quotes={
        " ― Oscar Wilde ":'"Be yourself; everyone else is already taken."'
        ," ― Marilyn Monroe ":"'I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell do not deserve me at my best.'",
        '― Albert Einstein ':"''Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
        ," ― Abrahim Linken ":'"I am not a product of my circumstances. I am a product of my choices."'
        ," ― Steve Jobs ":'"Design is not just about making pretty things, it’s about making something people love.”'
        ," ― Steve Jobs ":'"Design is not just about making pretty things, it’s about making something that should be"'
        ," ― Mahatma Gandhi ":'"The only way to do a great job is to love what you are doing."',
        " ― Oscar Wilde ":'"Be yourself; everyone else is already taken."',

    }
    var authors=Object.keys(quotes);
    var author=authors[Math.floor(Math.random()*authors.length)]
    var quote=quotes[author];
    document.getElementById('quote').innerHTML=quote;
    document.getElementById('author').innerHTML=author;
}