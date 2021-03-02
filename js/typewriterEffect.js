var looptxt = (function() {
    var i = 0;
    var t = 0;
    var words = ['FUTURE ', 'BUSINESS '];
    var now = [];
    return function() {
        var d = 1;
        var l = words[i].length;

        if (t <= l - 1) { //push
            if (t == l - 1) {
                d = 0;
            }
            t++;
            now.push(words[i][t - 1]);
        } else { //pop
            d = -1;
            now.pop();
            if (now.length == 0) { //go to next word
                i = (i >= words.length - 1) ? 0 : i + 1;
                t = 0;
                d = 0;
            }
        }

        return {
            now: now,
            direction: d
        };
    }
}());

function change() {
    var loop = looptxt();
    document.getElementById('changing_words').innerHTML = loop.now.join('');

    if (loop.direction < 0) {
        setTimeout(change, 50);
    } else if (loop.direction == 0) {
        setTimeout(change, 2000);
    } else {
        setTimeout(change, 200);
    }
}

setTimeout(change, 2000);