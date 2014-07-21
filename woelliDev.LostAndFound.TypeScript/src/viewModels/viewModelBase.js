var ViewModels;
(function (ViewModels) {
    var ViewModelBase = (function () {
        function ViewModelBase() {
            this.isloading = ko.observable(false);
            this.title = ko.observable();
        }
        ViewModelBase.prototype.init = function (title) {
            this.title(title);
        };
        return ViewModelBase;
    })();
    ViewModels.ViewModelBase = ViewModelBase;
})(ViewModels || (ViewModels = {}));
//# sourceMappingURL=viewModelBase.js.map
