import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {BehaviorSubject, map, Observable} from "rxjs";

export interface User {
  email: string,
  uid: string,
  authenticated: boolean
}

@Injectable()
export class AuthService {
  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  user$: Observable<User | null> = this.userSubject.asObservable();
  private currentUserKey: string = "currentUser";

  constructor(private router: Router) {
    const savedUser = localStorage.getItem(this.currentUserKey);
    if (savedUser) {
      this.setUser(JSON.parse(savedUser));
    }
  }

  get authState() {
    return this.user$.pipe(map(u => u?.authenticated));
  }

  createUser(email: string, password: string): void {
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = existingUsers.find((user: any) => user.email === email);
    if (userExists) {
      console.log("Użytkownik o podanym emailu już istnieje.");
      return;
    }

    const newUser = { email, password };
    existingUsers.push(newUser);

    localStorage.setItem("users", JSON.stringify(existingUsers));
    console.log("Zarejestrowano nowego użytkownika");

    const uniqueUserId: string = Date.now().toString();
    this.setUser({ email, uid: uniqueUserId, authenticated: true });
    this.loginUser(email, password);
  }

  loginUser(email: string, password: string): void {
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const user = existingUsers.find(
      (u:any) => u.email === email && u.password === password
    );

    if (user) {
      console.log("Zalogowano pomyślnie");
      user.authenticated = true;
      console.log(this.user$);
      this.setUser(user);
      this.userSubject.next(user);
      this.router.navigate(["/"]);
      localStorage.setItem(this.currentUserKey, JSON.stringify(user));
    } else {
      console.log("Błąd logowania. Sprawdź email i hasło");
    }
  }

  logoutUser(): void {
    this.setUser(null);
    localStorage.removeItem(this.currentUserKey);
  }

  private setUser(user: User | null): void {
    this.userSubject.next(user);
  }
}
