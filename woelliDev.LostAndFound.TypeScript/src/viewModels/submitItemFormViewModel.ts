/// <reference path="../model/models.ts" />
/// <reference path="../lostandfoundapp.ts" />
module ViewModels {
    import Category = LAF.Category;

    export class SubmitItemFormViewModel {
        public title: KnockoutObservable<string> = ko.observable<string>();
        public categories: KnockoutObservableArray<Category> = ko.observableArray<Category>();
        public selectedCategory: KnockoutObservable<Category> = ko.observable<Category>();
        public selectedCategorySubcategory: KnockoutObservable<LAF.SubCat> = ko.observable<LAF.SubCat>();

        constructor() {
            this.title("Map Title");
            setTimeout(() => this.title("Timeout Title"), 2000);
        }

        public init(parameters: any): void {
            Service.getCategories((cats) => {
                (<Array<Category>>cats).forEach((c) => this.categories.push(c));
            });

        }

        public submit() {
            console.log(this.selectedCategory());
            console.log(this.selectedCategorySubcategory());
        }



    }

   
}