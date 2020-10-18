import { Observer, BehaviorSubject, of } from "rxjs";
import { take } from "rxjs/operators";

class TestObserver<T> implements Observer<T> {
  results: (T | string)[] = [];
  next = (value: T) => this.results.push(value);
  error = (err: any) => this.results.push(err);
  complete = () => this.results.push("done");
}

const numbers$ = of(1, 2, 3, 4, 5);

const observer = new TestObserver();
numbers$.subscribe(observer);

console.log(observer.results);
