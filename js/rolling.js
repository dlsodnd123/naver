
var rollingNewsInterval;
var rollingTimesquareInterval

function startRollingNews(){
    rollingNewsInterval = setInterval(() => {
        if(!$('.rolling-news .news').is(':animated')){
            $('.rolling-news .news').first().animate({'margin-top':'-24px'},900,function(){
                $(this).detach().appendTo('.rolling-news').removeAttr('style');
            })
        }
    }, 1000);
}
function startRollingTimesquareInterval(){
    rollingTimesquareInterval = setInterval(() => {
        if(!$('.timesquare-rolling .card').is(':animated')){
            $('.timesquare-rolling .card').first().animate({'margin-left':'-281px'},1500,function(){
                $(this).detach().appendTo('.timesquare-rolling').removeAttr('style');
            })
        }
    }, 2000);
}

$(function(){
    startRollingNews();
    startRollingTimesquareInterval();

    $('.rolling-news .news').hover(function(){
        clearInterval(rollingNewsInterval);
    },function(){
        startRollingNews();
    })
    
    $('.timesquare-card').hover(function(){
        clearInterval(rollingTimesquareInterval);
    },function(){
        startRollingTimesquareInterval();
    })
})