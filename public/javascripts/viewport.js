/******************************************************************************
 * title
 * FranckEinstein90
 * ----------------
 *
 * viewport draws on canvas
 *
 * ***************************************************************************/

const viewport = (function() {

    let _ctx = undefined,
        width = 600,
        height = 300,
        backgroundColor = 'green',

        drawBackground = function() {
            _ctx.fillStyle = backgroundColor;
            _ctx.fillRect(0, 0, width, height);
        },

        drawPlayer = function() {
            _ctx.lineWidth = 3;
            _ctx.moveTo(85, 100);
            _ctx.lineTo(100, 50);
            _ctx.lineTo(115, 100);
            _ctx.closePath();
            _ctx.stroke();
        };

    return {

        elements: {
            background: 1,
            player: 2
        }, //game objects

        ctx: function(c) {
            _ctx = c;
        },

        draw: function(target) {
            if (target == viewport.elements.background) {
                drawBackground();
            } else if (target == viewport.elements.player) {
                drawPlayer();
            }
        }
    }
})();