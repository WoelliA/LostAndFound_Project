module ViewModels {
    export class LoginViewModel {
        public title: KnockoutObservable<string> = ko.observable<string>();

        constructor() {
            this.title("Login-View");
            setTimeout(() => this.title("Timeout Title"), 2000);
        }

        public init(parameters: any): void {
        }
    }
}