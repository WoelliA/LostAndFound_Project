module ViewModels {
    export class ListViewModel {
        public reports: KnockoutObservableArray<Report> = ko.observableArray<Report>();
        public title: KnockoutObservableArray<string> = ko.observableArray<string>();

        constructor() {

        }

        public init(parameters: any): void {
            setTimeout(() => {
                MapViewModel.current.zoomChanged.add((args) => console.log("zoom changed"));
            }, 500);
            for (var i = 0; i < 10; i++) {
                this.reports.push(new Report("Reports" + i, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.", "http://johanneshampel.online.de/wp-content/uploads/2008/01/fahrrad-juli-2006-014.jpg"));
            }
        }
    }

    export class Report {
        constructor(public title:string, public description:string, public imageURL: string) {

        }
    }
}