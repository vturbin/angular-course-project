import { Component} from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
    templateUrl: './header.component.html',
    selector: 'app-header'
})
export class HeaderComponent {

    constructor(private dataStorageService: DataStorageService){}

    collapsed = true;

    onSaveData() {
        this.dataStorageService.storeRecipes();
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe();
    }
}