/// <reference path="../model/models.ts" />
/// <reference path="../lostandfoundapp.ts" />
var ViewModels;
(function (ViewModels) {
    var SubmitItemFormViewModel = (function () {
        function SubmitItemFormViewModel() {
            var _this = this;
            this.title = ko.observable();
            this.categories = ko.observableArray();
            this.selectedCategory = ko.observable();
            this.selectedCategorySubcategory = ko.observable();
            this.title("Map Title");
            setTimeout(function () {
                return _this.title("Timeout Title");
            }, 2000);
        }
        SubmitItemFormViewModel.prototype.init = function (parameters) {
            var _this = this;
            Service.getCategories(function (cats) {
                cats.forEach(function (c) {
                    return _this.categories.push(c);
                });
            });
        };

        SubmitItemFormViewModel.prototype.submit = function () {
            console.log(this.selectedCategory());
            console.log(this.selectedCategorySubcategory());
        };
        return SubmitItemFormViewModel;
    })();
    ViewModels.SubmitItemFormViewModel = SubmitItemFormViewModel;
})(ViewModels || (ViewModels = {}));
//# sourceMappingURL=submitItemFormViewModel.js.map
