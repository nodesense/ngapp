##Reactive Extension for JS

```
Observable - is a value/object that may change values
Subscribe - when the value changes, subscribe shall be notified

---

1 (Observer) to N Susbcriber

Publish once , susbcribe many

Susbcribe for Observable
Add a callback function
Callback function will be invoked whenever there is data update
Unsubscribe
This ensure that the pendings are released

---

total = 0 // total itself is not reactive, just a variable

create a wrapper around total, called it as Subject, Subject is an Observable, Subject inherit from Observable

whenever the value of total get changed, we use subject to publish the data

component can susbcribe and unsubscribe
















```