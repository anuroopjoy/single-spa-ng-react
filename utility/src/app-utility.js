import { BehaviorSubject } from "rxjs";

// Anything exported from this file is importable by other in-browser modules.
export function getData() {
  return Promise.resolve({
    result: 10,
  });
}

export const state$ = new BehaviorSubject({});
