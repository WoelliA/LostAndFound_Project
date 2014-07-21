/// <reference path="../libs/typings/foundation/foundation.d.ts" />
/// <reference path="model/lafmodel.ts" />

declare var Service: LAF.IService;
module LostAndFound {
    
    export class App {
        public static init(): void {
            var presenter = new Presenter(window.location);
            (<any>$(document)).foundation();
            Service = new LAF.DummyService();
        }
    }
}

window.onload = () => {
    LostAndFound.App.init();
};