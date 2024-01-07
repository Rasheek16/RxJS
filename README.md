# RxJS Operators, Scheduler, and Subject Examples

This repository provides a collection of examples showcasing various RxJS operators, schedulers, and subjects. The code is organized into three main folders: `operators`, `scheduler`, and `subject`, each focusing on different aspects of RxJS.

## Operators

### Conditional Operators (`operators/conditionalOp`)

#### Publish Operator
The `publish` operator transforms a cold observable into a hot observable, facilitating the sharing of data among multiple consumers.

### Conversion Operators (`operators/ConversionOp`)

#### Last Value From
The `last` operator emits only the final value produced by the source observable, useful when interested only in the last emitted value.

### Creation Operators (`operators/CreationOp`)

#### From
The `from` operator converts various objects and data types into observables.

#### From Event
The `fromEvent` operator creates an observable from DOM events, such as clicks.

#### Interval Operator
The `interval` operator generates an observable that emits sequential integers at a specified interval.

### Error Handling Operators (`operators/ErrorHandligOp`)

#### CatchError and Retry
The `catchError` operator intercepts errors emitted by the source observable. The `retry` operator resubscribes to the source observable a specified number of times in case of errors.

### Filtering Operators (`operators/FilteringOp`)

#### DebounceTime
The `debounceTime` operator filters out values emitted by the source observable that occur within a specified time interval.

#### First, Take, and Last
The `first`, `take`, and `last` operators allow you to filter the values emitted by the source observable.

### Join Operators (`operators/JoinOp`)

#### CombineLatest
The `combineLatest` operator combines the latest values from multiple observables into an array.

### Transformation Operators (`operators/transformation`)

#### Buffer, MergeMap, Scan
The `buffer` operator periodically gathers values emitted by the source observable into arrays. `mergeMap` is used to flatten the arrays, and `scan` calculates the cumulative sum of the values.

### Utility Operators (`operators/UtilityOp`)

#### Timeout
The `timeout` operator sets a maximum time for the source observable to complete.

## Scheduler (`scheduler`)

Schedulers in RxJS allow you to control the execution context of observables. Explore examples demonstrating the use of schedulers in RxJS.

## Subject (`subject`)

Subjects are a special type of observable in RxJS that allows values to be multicasted to multiple observers. Discover an example demonstrating the use of subjects.

Feel free to explore each folder for more details on how to leverage RxJS in your projects.