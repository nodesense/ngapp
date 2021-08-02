# setup 

```
git clone https://github.com/nodesense/ngapp

cd ngapp


ng serve
```


# backend apis


https://github.com/nodesense/restful-server



---

PWA/Service works needs https based url. not working for http/plain
PWA/Service Workers are allowed if the domain is localhost

PWA/Service Workers are enabled only for prod

package.json, scripts section

```
ng add @angular/pwa
```


```




"build": "ng build --prod",
"webserver":"http-server -c-1 -p 8880 ./dist/ngapp",
```

```
npm i http-server
npm run build
npm run webserver
```

Open the browser, check for http://localhost:8880

