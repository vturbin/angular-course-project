import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DrodpownDirective {
    @HostBinding('class.open') isOpen = false;
    
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}
