import { Observer, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

class TestObserver<T> implements Observer<T> {
  results: (T | string)[] = [];
  next = (value: T) => this.results.push(value);
  error = (err: any) => this.results.push(err);
  complete = () => this.results.push("done");
}

const numbers$ = of(1, 2, 3, 4, 5).pipe(
  map(number => {
    if (number === 3) {
      throw "three not allowed";
    } else {
      return number;
    }
  }),
  catchError(err => of("an error occurred"))
);

const observer = new TestObserver();
numbers$.subscribe(observer);

console.log(observer.results);
