  $(document).ready(function() {
    var quotes = [
      {
        text: "meow meow",
        author: 'cat'
      },
       {
        text: "woof woof",
        author: 'dog'
      },
       {
        text: "squeek squeek",
        author: 'mouse'
      },
       {
        text: "roar",
        author: 'lion'
      },
       {
        text: "chirp chirp",
        author: 'bird'
      },
       {
        text: "poinoinoin",
        author: 'spring'
      },
       {
        text: "mooooo",
        author: 'cow'
      },
    ];
    
    getQuote = () => {
      let i = Math.floor(Math.random()*quotes.length);
      $("#text").text(quotes[i].text);
      $("#author").text(quotes[i].author);
    };    
    getQuote()
    
    $("#author").css("color","red");
    $("#new-quote").click(getQuote)
  });
