  
(function (window) {
    var names = ["marcelo", "joey", "pepe", "Jack", "john", "anu", "Sumanth", "jarry", "ronaldo", "pjanic"];
  
    for (var i in names) {
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
  })(window);