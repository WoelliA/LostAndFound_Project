var ViewModels;
(function (ViewModels) {
    var SubmitItemFormViewModel = (function () {
        function SubmitItemFormViewModel() {
            var _this = this;
            this.title = ko.observable();
            this.categories = ko.observableArray();
            this.bikeCategories = ko.observableArray();
            this.bikeColors = ko.observableArray();
            this.title("Map Title");
            setTimeout(function () {
                return _this.title("Timeout Title");
            }, 2000);
        }
        SubmitItemFormViewModel.prototype.init = function (parameters) {
            this.categories.push(new Category("Fahrrad"));
            this.categories.push(new Category("Accessoir"));
            this.bikeCategories.push(new BikeCategory("Herrenrad"));
            this.bikeCategories.push(new BikeCategory("Damenrad"));
            this.bikeCategories.push(new BikeCategory("Rennrad"));
            this.bikeCategories.push(new BikeCategory("BMX"));
            this.bikeCategories.push(new BikeCategory("E-Bike"));
            this.bikeCategories.push(new BikeCategory("Sonstiges"));
            this.bikeColors.push(new BikeColor("Schwarz"));
            this.bikeColors.push(new BikeColor("Weiss"));
            this.bikeColors.push(new BikeColor("Blau"));
            this.bikeColors.push(new BikeColor("Gruen"));
            this.bikeColors.push(new BikeColor("Gelb"));
            this.bikeColors.push(new BikeColor("Rot"));
            this.bikeColors.push(new BikeColor("Violett"));
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

    var BikeCategory = (function () {
        function BikeCategory(description) {
            this.description = description;
        }
        return BikeCategory;
    })();
    ViewModels.BikeCategory = BikeCategory;
    var BikeColor = (function () {
        // möglich wäre hier ein ColorPicker!!!!
        function BikeColor(bikeColor) {
            this.bikeColor = bikeColor;
        }
        return BikeColor;
    })();
    ViewModels.BikeColor = BikeColor;
})(ViewModels || (ViewModels = {}));
//# sourceMappingURL=submitItemFormViewModel.js.map
