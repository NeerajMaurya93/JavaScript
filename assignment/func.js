function countVowels(str){
     let count=0;
    for (const char of str){
        if(char=="a"||char=="i"||char=="o"||char=="e"||char=="u"){
            count++;
        }
    }
    console.log("number of vowels",count);

}
countVowels("abd");