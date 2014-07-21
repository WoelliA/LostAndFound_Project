///#source 1 1 /src/model/models.js
var LAF;
(function (LAF) {
    var Category = (function () {
        function Category(name, subcategories, hasUniqueID) {
            this.name = name;
            this.subcategories = subcategories;
            this.hasUniqueID = hasUniqueID;
        }
        return Category;
    })();
    LAF.Category = Category;

    var BikeColor = (function () {
        // möglich wäre hier ein ColorPicker!!!!
        function BikeColor(bikeColor) {
            this.bikeColor = bikeColor;
        }
        return BikeColor;
    })();
    LAF.BikeColor = BikeColor;

    var SubCat = (function () {
        function SubCat(name) {
            this.name = name;
        }
        return SubCat;
    })();
    LAF.SubCat = SubCat;
})(LAF || (LAF = {}));
//# sourceMappingURL=models.js.map

///#source 1 1 /src/model/LAFModel.js
var LAF;
(function (LAF) {
    var Service = (function () {
        function Service() {
        }
        Service.prototype.getCategories = function (callback) {
        };
        Service.prototype.createItem = function (settings, callback) {
        };
        return Service;
    })();
    LAF.Service = Service;

    var DummyService = (function () {
        function DummyService() {
        }
        DummyService.prototype.getCategories = function (callback) {
            var subCat = new Array();
            var categories = new Array();
            subCat.push(new LAF.SubCat("Herrenrad"));
            subCat.push(new LAF.SubCat("Damenrad"));
            subCat.push(new LAF.SubCat("Rennrad"));
            subCat.push(new LAF.SubCat("BMX"));
            subCat.push(new LAF.SubCat("E-Bike"));
            subCat.push(new LAF.SubCat("Sonstiges"));
            var subCat2 = new Array();
            subCat2.push(new LAF.SubCat("BlaBla"));
            subCat2.push(new LAF.SubCat("Blabla2"));
            subCat2.push(new LAF.SubCat("Blabla3"));
            categories.push(new LAF.Category("Fahrrad", subCat, true));
            categories.push(new LAF.Category("Accessoir", subCat2, false));

            callback(categories);
        };

        DummyService.prototype.createItem = function (settings, callback) {
            setTimeout(callback, 2000);
        };
        return DummyService;
    })();
    LAF.DummyService = DummyService;
})(LAF || (LAF = {}));
//# sourceMappingURL=LAFModel.js.map

