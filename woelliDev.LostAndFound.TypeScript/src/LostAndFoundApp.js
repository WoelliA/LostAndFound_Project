/// <reference path="../libs/typings/foundation/foundation.d.ts" />
/// <reference path="model/lafmodel.ts" />
var LostAndFound;
(function (LostAndFound) {
    var App = (function () {
        function App() {
        }
        App.init = function () {
            var presenter = new LostAndFound.Presenter(window.location);
            $(document).foundation();
            Service = new LAF.DummyService();
            presenter.mainPresenter.show("main", null);
        };
        return App;
    })();
    LostAndFound.App = App;
})(LostAndFound || (LostAndFound = {}));

window.onload = function () {
    LostAndFound.App.init();
};
//# sourceMappingURL=LostAndFoundApp.js.map
