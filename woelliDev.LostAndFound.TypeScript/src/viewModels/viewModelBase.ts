module ViewModels {
    export class ViewModelBase {
        public isloading: KnockoutObservable<boolean> = ko.observable<boolean>(false);
        public title: KnockoutObservable<string> = ko.observable<string>();

        public init(title: string): void {
            this.title(title);
        }
    }
}