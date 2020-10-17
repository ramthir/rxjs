import { Observer, BehaviorSubject } from "rxjs";
import { take } from "rxjs/operators";

class TestObserver<T> implements Observer<T> {
  results: (T | string)[] = [];
  next = (value: T) => this.results.push(value);
  error = (err: any) => this.results.push(err);
  complete = () => this.results.push("done");
}

const behaviorSub = new BehaviorSubject<string>("1");
const observer = new TestObserver();
behaviorSub.subscribe(observer);

behaviorSub.next("2");
behaviorSub.complete();

console.log(observer.results);
