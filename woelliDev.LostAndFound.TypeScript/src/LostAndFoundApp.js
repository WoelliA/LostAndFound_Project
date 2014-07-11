var LostAndFound;
(function (LostAndFound) {
    var App = (function () {
        function App() {
        }
        App.init = function () {
            var presenter = new LostAndFound.Presenter(window.location);
        };
        return App;
    })();
    LostAndFound.App = App;
})(LostAndFound || (LostAndFound = {}));

window.onload = function () {
    LostAndFound.App.init();
};
//# sourceMappingURL=LostAndFoundApp.js.map
