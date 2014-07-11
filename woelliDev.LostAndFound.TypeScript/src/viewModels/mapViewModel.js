var ViewModels;
(function (ViewModels) {
    var MapViewModel = (function () {
        function MapViewModel() {
            var _this = this;
            this.title = ko.observable();
            this.title("Map Title");
            setTimeout(function () {
                return _this.title("Timeout Title");
            }, 2000);
        }
        MapViewModel.prototype.init = function (parameters) {
        };
        return MapViewModel;
    })();
    ViewModels.MapViewModel = MapViewModel;
})(ViewModels || (ViewModels = {}));
//# sourceMappingURL=mapViewModel.js.map
