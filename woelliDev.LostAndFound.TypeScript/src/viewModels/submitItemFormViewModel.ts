module ViewModels {
    export class SubmitItemFormViewModel {
        public title: KnockoutObservable<string> = ko.observable<string>();
        public categories: KnockoutObservableArray<Category> = ko.observableArray<Category>();
        public bikeCategories: KnockoutObservableArray<BikeCategory> = ko.observableArray<BikeCategory>();
        public bikeColors: KnockoutObservableArray<BikeColor> = ko.observableArray<BikeColor>();
        constructor() {
            this.title("Map Title");
            setTimeout(() => this.title("Timeout Title"), 2000);
        }

        public init(parameters: any): void {
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
        }
    }

    export class Category {
        constructor(public name: string) {

        }
    }

    export class BikeCategory {
        constructor(public description: string) {

        }
    }
    export class BikeColor {
        // möglich wäre hier ein ColorPicker!!!!
        constructor(public bikeColor: string) {
        }
    }
}