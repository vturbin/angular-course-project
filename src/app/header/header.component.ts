import { Component, EventEmitter, Output} from "@angular/core";

@Component({
    templateUrl: './header.component.html',
    selector: 'app-header'
})
export class HeaderComponent {
    @Output() featureSelected = new EventEmitter<string>();
    collapsed = true;

    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
}