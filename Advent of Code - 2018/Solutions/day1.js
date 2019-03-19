function doProblem(A){
    return new Promise(function(res, rej){
        if(typeof A != 'object') A = A.replace(/[^0-9\-]/gmi, '\,').split('\,').filter(function(element){return element.length > 0})
        let finalFreq = 0

        A.forEach((element) => {
            finalFreq += parseInt(element);
        })

        res(finalFreq)
    })
}