module ViewModels {
    export class SubmitItemFormViewModel {
        public title: KnockoutObservable<string> = ko.observable<string>();
        public categories: KnockoutObservableArray<Category> = ko.observableArray<Category>();
        constructor() {
            this.title("Map Title");
            setTimeout(() => this.title("Timeout Title"), 2000);
        }

        public init(parameters: any): void {
            for(var i = 0; i < 10; i++){
                this.categories.push(new Category("Category" + i));
        }
        }
    }

    export class Category {
        constructor(public name: string) {

        }
    }
}