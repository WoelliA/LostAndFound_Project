/// <reference path="../libs/typings/foundation/foundation.d.ts" />


module LostAndFound {
    export class App {
        public static init(): void {
            var presenter = new Presenter(window.location);
            (<any>$(document)).foundation();
        }
    }
}

window.onload = () => {
    LostAndFound.App.init();
};