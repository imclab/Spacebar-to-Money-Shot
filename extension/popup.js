Mousetrap.bind('space', function(e) {
    e.preventDefault();
    $("#watch-player").append("<div id='marker' style='width: 11px; height: 42px; position: absolute; background: green; left: 495px; z-index: 30; top: 321px;'>$$$</div>")
});

