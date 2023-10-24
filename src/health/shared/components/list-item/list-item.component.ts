import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() item: any;
  @Output() remove: EventEmitter<any> = new EventEmitter<any>();
  toggled: boolean = false;

  toggle(): void {
    this.toggled = !this.toggled;
  }

  removeItem(): void {
    this.remove.emit(this.item);
  }

  getRoute(item: any) {
    return [`../meals`, item.$key];
  }
}
