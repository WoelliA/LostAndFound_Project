/// <reference path="../../../../../github/woellidev.common.typescript/presenting/presenting.d.ts" />
/// <reference path="../../../../../github/woellidev.common.typescript/presenting/presenter.ts" />
/// <reference path="../../../../../github/woellidev.common.typescript/presenting/loader.ts" />
/// <reference path="../../../../../github/woellidev.common.typescript/presenting/presenting.ts" />
/// <reference path="../../../../../github/woellidev.common.typescript/presenting/routing.ts" />

module LostAndFound {
    import ILoaderSettings = Presenting.ILoaderSettings;
    import IMainPresenter = Presenting.IMainPresenter;
    import InstanceLoader = Helpers.InstanceLoader;
    import IPresenter = Presenting.IPresenter;
    import IPresenterSettings = Presenting.IPresenterSettings;
    import IModal = Presenting.IModal;
    import IEvent = Events.IEvent;
    import Event = Events.Event;
    import ModalStateChangedEventArgs = Presenting.ModalStateChangedEventArgs;
    import IModalPresenter = Presenting.IModalPresenter;
    import ModalPresenter = Presenting.ModalPresenter;

    export class Presenter {
        private viewLoaderSettings: ILoaderSettings;
        private viewModelLoaderSettings: ILoaderSettings;

        private presenterSettings: IPresenterSettings;

        public mainPresenter: IMainPresenter;
        private modalPresenter: IPresenter;

        constructor(location: Location) {
            var origin = window.location.protocol + "//" + window.location.host;
            this.initLoaderSettings(origin);
            this.initPresenterSettings(origin);
            this.mainPresenter = this.initPresenter();
            //this.modalPresenter = this.initModalPresenter();
            this.initRoutes();
        }

        private initPresenter(): IMainPresenter {
            var body = document.getElementsByTagName('body')[0];
            var mainPresenter = presenting.initMain(this.presenterSettings, body);
            return mainPresenter;
        }

        private initLoaderSettings(origin: string) {
            var mappings = [];
            this.viewLoaderSettings = {
                extension: ".html",
                fileNameEnding: "View",
                rootDir: origin,
                targetDir: "src/views",
                mappings: mappings
            };
            this.viewModelLoaderSettings = {
                extension: ".js",
                fileNameEnding: "ViewModel",
                rootDir: origin,
                targetDir: "src/viewModels",
                mappings: mappings
            };
        }

        //initModalPresenter(): IModalPresenter {
        //    var modal = new StickerModal();
        //    var modalPresenter = new ModalPresenter(modal, this.presenterSettings, this.mainPresenter.routing);
        //    return modalPresenter;
        //}

        initRoutes() {
            this.mainPresenter.routing.addRoute("category/{id}", (...params) => {
                console.log("category navigation", params);
            });
        }

        initPresenterSettings(origin: string) {
            this.presenterSettings = {
                frame: document.getElementById('frame'),
                viewModelInstanceCreator: new InstanceLoader(window, "ViewModels"),
                origin: origin,
                viewLoaderSettings: this.viewLoaderSettings,
                viewModelLoaderSettings: this.viewModelLoaderSettings,
                bindingTarget: document.getElementById('content')
            }
        }
    }

    //export class StickerModal implements IModal {
    //    modal: any;
    //    frame: HTMLElement;
    //    statechanged: IEvent<ModalStateChangedEventArgs>;

    //    constructor() {
    //        this.statechanged = new Event<ModalStateChangedEventArgs>();
    //        this.frame = document.getElementById('modal-frame');
    //        this.modal = document.getElementById('modal');
    //        this.modal.addEventListener('core-overlay-open', (event: any) => {
    //            this.statechanged.dispatch(new ModalStateChangedEventArgs(this.modal.isopen));
    //        });
    //    }

    //    show(): void {
    //        console.log("modal.show");
    //        this.modal.toggle();
    //    }
    //    hide(): void {
    //        console.log("modal.hide");
    //        this.modal.toggle();
    //    }
    //}
} 