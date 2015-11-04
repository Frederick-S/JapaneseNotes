require(["gitbook"], function(gitbook) {
    gitbook.events.bind("start", function(e, config) {
        config.swiftype = config.swiftype || {};
    });
});
