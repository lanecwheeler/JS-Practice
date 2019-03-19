// Please note. This won't work on IE. At all. I use promises, which IE doesn't. Because IE sucks.
"use strict"
// Just defining some simple jquery objects in order to save time
let $day = $('#day'), $dayNum = $('#dayNum'), $prob = $('#problem'), $solution = $('#solution'), $input = $('#inputFile'), $answer = $('#answer')
$(document).ready(function(){
    updateDay(1)
})

// Set up listeners
$day.on('change', function(){
    updateDay($(this).val());
})

// Do all the logic associated to a day change
function updateDay(daySelection){
    $dayNum.html(daySelection)
    getProblem(daySelection)
    getSolution(daySelection)
}

// Gets the problem text
function getProblem(daySelection){
    readProblem(daySelection).then(function(value){
        $prob.html(value)
    }).catch($prob.html('That day has not been completed'))
}

// Loads the solution and runs the js file
function getSolution(daySelection){
    readSolution(daySelection).then(function(value){
        $solution.html('<pre><code> ' + value + '</code></pre>')
    }).catch($solution.html('<pre><code> That day has not been completed </code></pre>'))
}


function readProblem(daySelected){
    return new Promise(function(res, rej){
        $.get('/Problems/day'+ daySelected +'.html', function(data) {
            if(data) res(data)
            else res('That day has not been completed')
        }).fail(function(){
            rej('That day has not been completed')
        });
    })
}

function readSolution(daySelected){
    return new Promise(function(res, rej){
        $.getScript('/Solutions/day'+ daySelected +'.js', function(data) {
            if(data) res(data)
            else res('That day has not been completed')
        }).fail(function(){
            rej('That day has not been completed')
        });
    })
}

function processInput(){
    doProblem($input.val()).then(function(value){
        $answer.html(value)
    })
}