function doProblem(A){
    $answer.html('Calculating...')
    return new Promise(function(res, rej){
        A = A.replace(/[^0-9\-]/gmi, '\,').split('\,').filter(function(element){return element.length > 0})
        let arrayAddition = A, finalFreq = 0, history = [], found = false, repeated

        if(A.length < 1) rej('Empty input passed')
        else {
            while(!found){
                A.forEach((element) => {
                    finalFreq += parseInt(element);
                    if(history.includes(finalFreq) || finalFreq == 0){
                        if(!repeated){
                            repeated = finalFreq
                            console.log(repeated)
                            found = true
                        } 
                    } 
                    history.push(finalFreq)
                })
                A.concat(arrayAddition)
            }
            res(repeated)
        }
    })
}