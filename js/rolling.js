
var rollingNewsInterval;
var rollingTimesquareInterval

function startRollingNews(){
    rollingNewsInterval = setInterval(() => {
        if(!$('.rolling-news .news').is(':animated')){
            $('.rolling-news .news').first().animate({'margin-top':'-24px'},500,function(){
                $(this).detach().appendTo('.rolling-news').removeAttr('style');
            })
        }
    }, 3000);
}
function startRollingTimesquareInterval(){
    rollingTimesquareInterval = setInterval(() => {
        if(!$('.timesquare-rolling .card').is(':animated')){
            $('.timesquare-rolling .card').first().animate({'margin-left':'-281px'},300,function(){
                $(this).detach().appendTo('.timesquare-rolling').removeAttr('style');
            })
        }
    }, 3500);
}

$(function(){
    startRollingNews();
    startRollingTimesquareInterval();

    $('.rolling-news .news').hover(function(){
        clearInterval(rollingNewsInterval);
    },function(){
        startRollingNews();
    })

    $('.timesquare-box').hover(function(){
        clearInterval(rollingTimesquareInterval);
    },function(){
        startRollingTimesquareInterval();
    })
    
    $('.timesquare-box .btn-box .prev').click(function(e){
        e.preventDefault();
        if(!$('.timesquare-rolling .card').is(':animated')){
            $('.timesquare-rolling .card').last().detach().prependTo('.timesquare-rolling').css('margin-left','-281px');
            $('.timesquare-rolling .card').first().animate({'margin-left':'0'},300,);
        }
    })

    $('.timesquare-box .btn-box .next').click(function(e){
        if(!$('.timesquare-rolling .card').is(':animated')){
            $('.timesquare-rolling .card').first().animate({'margin-left':'-281px'},300,function(){
                $(this).detach().appendTo('.timesquare-rolling').removeAttr('style');
            })
        }
    })
})