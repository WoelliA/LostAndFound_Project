module LAF {

  
    export interface IService {
         getCategories(callback: Function);
    }
    export class Service implements IService  {
        getCategories(callback: Function) {

        }
    }

    export class DummyService implements IService {

        getCategories(callback: Function) {
            var subCat = new Array < SubCat>();
            var categories = new Array<Category>();
            subCat.push(new SubCat("Herrenrad"));
            subCat.push(new SubCat("Damenrad"));
            subCat.push(new SubCat("Rennrad"));
            subCat.push(new SubCat("BMX"));
            subCat.push(new SubCat("E-Bike"));
            subCat.push(new SubCat("Sonstiges"));
            var subCat2 = new Array<SubCat>();
            subCat2.push(new SubCat("BlaBla"));
            subCat2.push(new SubCat("Blabla2"));
            subCat2.push(new SubCat("Blabla3"));
            categories.push(new Category("Fahrrad", subCat, true));
            categories.push(new Category("Accessoir", subCat2, false));

            callback(categories);
        }
    }
}