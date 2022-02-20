import { BehaviorSubject, Observable } from "rxjs";


export class MenuService {

  menuToggle = new BehaviorSubject<boolean>(false)

  setMenuToggle = (props: boolean) => this.menuToggle.next(props)

  getMenuToggle = () => this.menuToggle.asObservable()

}