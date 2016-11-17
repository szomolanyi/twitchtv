var channels=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];


function showResults(c, res) {
    if (res.stream !== null) {
        l=$('<div>')
            .append($('<img>').attr('src', res.stream.channel.logo));
        n=$('<div>').append(
            $('<a>').attr('href',res.stream.channel.url)
                .attr('target', '_blank')
                .html(c)
                .addClass('mdl-button mdl-js-button mdl-js-ripple-effect')
        );
        o=$('<div>').html(res.stream.channel.status);
        result_div=$("#results-online")
    }
    else {
        l=$('<div>');
        n=$('<div>').append(
            $('<a>').attr('href','#').html(c)
                .addClass('mdl-button mdl-js-button mdl-js-ripple-effect')
                .attr('disabled','')
        );
        o=$('<div>').html('offline');
        result_div=$("#results-offline")
    }
    l.addClass('mdl-cell mdl-cell--1-col');

    n.addClass('mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet');
    o.addClass('mdl-cell mdl-cell--8-col mdl-cell--5-col-tablet');
    d=$('<div>').addClass('mdl-grid');
    d.append(l).append(n).append(o);
    result_div.append(d);
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
