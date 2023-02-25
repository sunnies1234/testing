// IceServersHandler.js

var IceServersHandler = (function() {
    function getIceServers(connection) {
        // resiprocate: 3344+4433
        // pions: 7575
        var iceServers = [{
                'urls': [
                    'stun:stun.l.google.com:19302'
                ],
            },
            {
                'urls': [
                    'turn:47.203.215.63:3478', // coTURN 49152+65535
                    'turn:47.203.215.63:49152',
                    'turn:47.203.215.63:65535', // restund udp
                ],
                'username': 'sunnies',
                'credential': 'rcj26raj4'
            },
            {
                'urls': [
                    'stun:stun.l.google.com:19302',
                    'stun:stun1.l.google.com:19302',
                    'stun:stun2.l.google.com:19302',
                    'stun:stun.l.google.com:19302?transport=udp',
                ]
            }
        ];

        return iceServers;
    }

    return {
        getIceServers: getIceServers
    };
})();
