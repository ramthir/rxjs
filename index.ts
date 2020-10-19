import { of, concat } from "rxjs";

const series1$ = of("a", "b");
const series2$ = of("x", "y");

const result$ = concat(series1$, series2$);

result$.subscribe(console.log);
