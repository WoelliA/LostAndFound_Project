module LostAndFound {
    export class App {
        public static init(): void {
            var presenter = new Presenter(window.location);
        }
    }
}

window.onload = () => {
    LostAndFound.App.init();
};