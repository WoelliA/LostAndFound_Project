module ViewModels {
    export class LoginViewModel {
        public title: KnockoutObservable<string> = ko.observable<string>();

        constructor() {
            this.title("Map Title");
            setTimeout(() => this.title("Timeout Title"), 2000);
        }

        public init(parameters: any): void {
        }
    }
}