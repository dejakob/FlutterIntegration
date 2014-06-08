var FLUTTER_URL = 'ws://127.0.0.1:60541';
var FlutterIntegration = {
    connect: function() {
        websocket = new WebSocket(FLUTTER_URL);
        websocket.onmessage = function(e) {
            var data = e.data.split('&');
            var len = data.length;
            for(var i=0;i<len;i++) {
                var key = data[i].split('=')[0];
                var val = data[i].split('=')[1];
                if(key=='value') {
                    switch(val) {
                        case 'ThumbsLeft':
                            if(FlutterIntegration.onLeft()!==null) FlutterIntegration.onRight();
                            break;
                        case 'ThumbsRight':
                            if(FlutterIntegration.onRight()!==null) FlutterIntegration.onLeft();
                            break;
                        case 'Stop':
                            if(FlutterIntegration.onHand()!==null) FlutterIntegration.onHand();
                            break;
                    }
                }
            }
        }
    },
    onLeft: null,
    onHand: null,
    onRight: null
};