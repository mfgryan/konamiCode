//secret code
var images = 'url(https://i.imgur.com/QGKn3PR.gif), url(https://i.imgur.com/oIsKpXd.gif), url(https://i.imgur.com/xIolo.gif),' +
    'url(https://i.imgur.com/j9P6RdU.gif), url(https://i.imgur.com/AMzVDF9.gif), url(https://i.imgur.com/ylRz8.gif),' +
    'url(https://i.imgur.com/yAQCm.gif), url(https://i.imgur.com/z2i9V.gif), url(https://media.giphy.com/media/cPxRDvlSj9QKA/giphy.gif),' +
    'url(https://i.imgur.com/H727B.gif), url(https://i.imgur.com/Q0mpbWk.jpg), url(https://i.imgur.com/YB1CF1X.gif), url(https://i.imgur.com/qYjA2YR.gif) ';
var repeat = 'no-repeat, no-repeat, no-repeat, no-repeat, no-repeat,' +
    'no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, repeat';
var size = '0px 50px, 0px 150px, 0px 450px, 0px 525px, 190px 85px, 550px 85px,'+
    ' 625px 350px, 625px 570px, 1000px 85px, 1000px 285px, 1100px 570px, 1400px 85px, 1425px 350px';
var sequence = [38,38,40,40,37,39,37,39,66,65]; //konami sequence
var key = function(i){
    if(i < sequence.length){
        $('body').keyup(function(e){
            if(e.keyCode == sequence[i] && i == sequence.length-1){
                $('body').css('background-image', images);
                $('body').css('background-repeat', repeat);
                $('body').css('background-position', size);
                $('body').unbind('keyup');
                setTimeout(function(){$('body').css('background', 'transparent');}, 30000);
            }else if(e.keyCode == sequence[i]){
                key(i+1);
            }else{
                $('body').unbind('keyup');
            }
        });
    }
};
$('body').keydown(function(e){
    key(0);
});
