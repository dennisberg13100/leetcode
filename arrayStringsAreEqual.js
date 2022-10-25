#! /usr/bin/node

const arrayStringsAreEqual = function(word1, word2) {
    w1 = '';
    for (i = 0; i < word1.length; i++){
        w1 += word1[i]
    }
    
    w2 = '';
    for (j = 0; j < word2.length; j++){
        w2 += word2[j]
    }

    if(w1 == w2) {
        return true;
    } else { 
        return false;
    }   
};

module.exports = arrayStringsAreEqual