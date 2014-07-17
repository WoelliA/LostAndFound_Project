/// <reference path="../../../../../../github/woellidev.common.typescript/events/event.ts" />
module ViewModels {
    import IEvent = Events.IEvent;
    import Event = Events.Event;

    export class MapViewModel {
        public static current: MapViewModel;
        public zoomChanged: IEvent<ZoomChangedEventArgs>;
        constructor() {
            MapViewModel.current = this;
            this.zoomChanged = new Event<ZoomChangedEventArgs>();
        }

        public init(parameters: any): void {
            setTimeout(() => {
                console.log("triggering zoom changed");
                this.zoomChanged.dispatch(new ZoomChangedEventArgs())
            }, 2000);
        }
    }

    export class ZoomChangedEventArgs {
        public topleft: number;
        public bottomleft: number;
    }
}