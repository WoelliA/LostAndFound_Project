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
