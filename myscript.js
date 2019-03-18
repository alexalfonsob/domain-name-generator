function domainGenerator() {
    
    let pronoun = ['the','our', 'i', 'she', 'he', 'me', 'us', 'her', 'his', 'theirs', 'yours'];
    let adj = ['great', 'big', 'high', 'good', 'new', 'special', 'strong', 'easy', 'better', 'sure', 'full'];
    let noun = ['jogger','racoon', 'money', 'book', 'eye', 'family', 'group', 'school', 'work', 'system'];

    
    
    for(let i = 0; i <= 10; i++) {
        
        let one = pronoun[Math.round(Math.random()*(pronoun.length-1))];
        let two = adj[Math.round(Math.random()*(adj.length-1))];
        let three = noun[Math.round(Math.random()*(noun.length-1))];

        let str = one + two + three +'.com ',

        elmDiv = document.createElement('div');
         
        elmDiv.innerHTML = str;
            
        let newDiv = document.getElementsByTagName('div')[0];
        newDiv.appendChild(elmDiv);
  
  
    }

}
