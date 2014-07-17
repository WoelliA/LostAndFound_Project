var ViewModels;
(function (ViewModels) {
    var SubmitItemFormViewModel = (function () {
        function SubmitItemFormViewModel() {
            var _this = this;
            this.title = ko.observable();
            this.categories = ko.observableArray();
            this.title("Map Title");
            setTimeout(function () {
                return _this.title("Timeout Title");
            }, 2000);
        }
        SubmitItemFormViewModel.prototype.init = function (parameters) {
            for (var i = 0; i < 10; i++) {
                this.categories.push(new Category("Category" + i));
            }
        };
        return SubmitItemFormViewModel;
    })();
    ViewModels.SubmitItemFormViewModel = SubmitItemFormViewModel;

    var Category = (function () {
        function Category(name) {
            this.name = name;
        }
        return Category;
    })();
    ViewModels.Category = Category;
})(ViewModels || (ViewModels = {}));
//# sourceMappingURL=submitItemFormViewModel.js.map
