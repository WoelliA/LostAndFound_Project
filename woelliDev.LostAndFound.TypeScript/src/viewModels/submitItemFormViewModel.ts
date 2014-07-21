/// <reference path="../model/models.ts" />
/// <reference path="../model/lafmodel.ts" />
/// <reference path="../lostandfoundapp.ts" />
module ViewModels {
    import Category = LAF.Category;

    export class SubmitItemFormViewModel extends ViewModelBase {
        public title: KnockoutObservable<string> = ko.observable<string>();
        public categories: KnockoutObservableArray<Category> = ko.observableArray<Category>();
        public selectedCategory: KnockoutObservable<Category> = ko.observable<Category>();
        public selectedCategorySubcategory: KnockoutObservable<LAF.SubCat> = ko.observable<LAF.SubCat>();
        public type: KnockoutObservable<String> = ko.observable<String>();
        public isloading: KnockoutObservable<boolean> = ko.observable<boolean>();

        public init(parameters: any): void {
            super.init("Submit");
            Service.getCategories((cats) => {
                (<Array<Category>>cats).forEach((c) => this.categories.push(c));
            });
        }

        public submit() {
            this.isloading(true);
            Service.createItem({}, () => {
                this.isloading(false);
                console.log("sdfdsfsdfd");
            });
            console.log(this.selectedCategory());
            console.log(this.selectedCategorySubcategory());
        }



    }


}