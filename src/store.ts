import {Observable, BehaviorSubject, pluck, distinctUntilChanged} from "rxjs";

import {User} from "./auth/shared/services/auth/auth.service";

export interface State {
  user?: User,
  [key: string]: any
}

const state: State = {
  user: undefined
};

export class Store {

  private subject: BehaviorSubject<State> = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }

  set(name: string, state: any) {
    this.subject.next({...this.value, [name]: state});
  }

}
