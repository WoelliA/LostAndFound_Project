module LAF {
    export class Category {
        constructor(public name: string, public subcategories: Array<SubCat>, public hasUniqueID: boolean) {

        }
    }

    export class BikeColor {
        // möglich wäre hier ein ColorPicker!!!!
        constructor(public bikeColor: string) {
        }
    }

    export class SubCat {
        constructor(public name:String) {
        }
    }

}