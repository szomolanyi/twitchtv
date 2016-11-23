var channels=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];


function showResults(c, res) {
    d=$('<div>').addClass('mdl-grid');
    l=$('<div>');
    a=$('<a>')
            .html(c)
            .addClass('mdl-button mdl-js-button mdl-js-ripple-effect');
    n=$('<div>').append(a);
    o=$('<div>');
    l.addClass('mdl-cell mdl-cell--1-col');
    n.addClass('mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet');
    o.addClass('mdl-cell mdl-cell--8-col mdl-cell--5-col-tablet');
    d.append(l).append(n).append(o);
    if (res.status === 404) {
        a.attr('href','#').attr('disabled','disabled')
        o.html('Error: ' + res.error + "; " + res.message);
        $("#results").append(d)   
    }
    else if (res.stream !== null) {
        l.append($('<img>').attr('src', res.stream.channel.logo)).attr('target', '_blank')
        a.attr('href',res.stream.channel.url);
        o.html(res.stream.channel.status);
        $("#results").prepend(d)
    }
    else {
        a.attr('href','#').attr('disabled','disabled');
        o.html('offline');
        $("#results").append(d)   
    }
}

$(document).ready(function() {
    for (i=0; i<channels.length; i++) {
        $.ajax({
            dataType: "jsonp",
            url: "https://wind-bow.hyperdev.space/twitch-api/streams/"+channels[i],
            context : { channel: channels[i]}
        })
            .done(function(res) {
                showResults(this.channel, res);
            });
    }
});
