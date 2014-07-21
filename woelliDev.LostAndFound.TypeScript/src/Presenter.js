/// <reference path="../../../../../github/woellidev.common.typescript/presenting/presenting.d.ts" />
/// <reference path="../../../../../github/woellidev.common.typescript/presenting/presenter.ts" />
/// <reference path="../../../../../github/woellidev.common.typescript/presenting/loader.ts" />
/// <reference path="../../../../../github/woellidev.common.typescript/presenting/presenting.ts" />
/// <reference path="../../../../../github/woellidev.common.typescript/presenting/routing.ts" />
var LostAndFound;
(function (LostAndFound) {
    var InstanceLoader = Helpers.InstanceLoader;

    var Presenter = (function () {
        function Presenter(location) {
            var origin = window.location.protocol + "//" + window.location.host;
            this.initLoaderSettings(origin);
            this.initPresenterSettings(origin);
            this.mainPresenter = this.initPresenter();

            //this.modalPresenter = this.initModalPresenter();
            this.initRoutes();
        }
        Presenter.prototype.initPresenter = function () {
            var body = document.getElementsByTagName('body')[0];
            var mainPresenter = presenting.initMain(this.presenterSettings, body);
            return mainPresenter;
        };

        Presenter.prototype.initLoaderSettings = function (origin) {
            var mappings = [];
            this.viewLoaderSettings = {
                extension: ".html",
                fileNameEnding: "View",
                rootDir: origin,
                targetDir: "src/views",
                mappings: mappings
            };
            this.viewModelLoaderSettings = {
                extension: ".js",
                fileNameEnding: "ViewModel",
                rootDir: origin,
                targetDir: "src/viewModels",
                mappings: mappings
            };
        };

        //initModalPresenter(): IModalPresenter {
        //    var modal = new StickerModal();
        //    var modalPresenter = new ModalPresenter(modal, this.presenterSettings, this.mainPresenter.routing);
        //    return modalPresenter;
        //}
        Presenter.prototype.initRoutes = function () {
            this.mainPresenter.routing.addRoute("category/{id}", function () {
                var params = [];
                for (var _i = 0; _i < (arguments.length - 0); _i++) {
                    params[_i] = arguments[_i + 0];
                }
                console.log("category navigation", params);
            });
        };

        Presenter.prototype.initPresenterSettings = function (origin) {
            this.presenterSettings = {
                frame: document.getElementById('frame'),
                viewModelInstanceCreator: new InstanceLoader(window, "ViewModels"),
                origin: origin,
                viewLoaderSettings: this.viewLoaderSettings,
                viewModelLoaderSettings: this.viewModelLoaderSettings,
                bindingTarget: document.getElementById('content')
            };
        };
        return Presenter;
    })();
    LostAndFound.Presenter = Presenter;
})(LostAndFound || (LostAndFound = {}));
//# sourceMappingURL=Presenter.js.map
