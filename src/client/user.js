"use strict";

const user = (function() {
    let user, players, serverSocket, gameUI, game,
        registerNewPlayer, getPlayers

    players = []
    registerNewPlayer = function() {
        user = new player.Player();
        serverSocket.emit('new player', user);
    }
    getPlayers = function() {

    }
    return {
        initialize: function(socket) {
            serverSocket = socket;
            try {
                registerNewPlayer();
                players = getPlayers();
                game = games.getNewGame(user, players);
            } catch (e) {
                console.log(e);
            }
        }
    }
})()

module.exports = {
    user
}