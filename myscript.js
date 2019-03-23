function domainGenerator() {
    
    let pronoun = ['the','our', 'i', 'she', 'he', 'me', 'us', 'her', 'his', 'theirs', 'yours'];
    let adj = ['great', 'big', 'high', 'good', 'new', 'special', 'strong', 'easy', 'better', 'sure', 'full'];
    let noun = ['jogger','racoon', 'money', 'book', 'eye', 'family', 'group', 'school', 'work', 'system'];


    
    for(let i = 0; i < pronoun.length; i++){
        
        for(let j = 0; j < adj.length; j++){
            
            for(let z = 0; z < noun.length; z++){
                
                let src = pronoun[i]+adj[j]+noun[z]+".com";
                 document.write(src +'<br />')
                

            }
        }
    }

}
