import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import {User} from "../../../auth/shared/services/auth/auth.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  @Input() user: User | null = null;
  @Output() logout: EventEmitter<any> = new EventEmitter<any>();

  logoutUser(): void {
    this.logout.emit();
  }
}
