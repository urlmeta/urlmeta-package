## URLMeta

This is package is a wrapper over [URLMeta API](https://urlmeta.org).

## Install

```
npm install urlmeta
```

require it:

```
var urlmeta = require("urlmeta");
```

## Usage

`urlmeta` is the only function available to this package.

`urlmeta(options, callback);`

It accepts options as either a `string` or an `object` like:

```javascript
{
  url: 'https://urlmeta.org'
}
```

`options` can have only two keys.

e.g.:

```javascript
{
  url: 'https://urlmeta.org',
  onlyHead: true
}
```

`callback` will be called with two arguments. Error (if any) will be the first, result will be second.

Both arguments will be of type `object`. Result will contain the complete [API response](https://urlmeta.org/dev-api.html#response).

## Examples

To fetch a URL's meta, simply pass the URL.

```javascript
urlmeta('https://urlmeta.org', function(err, result) {
	if(err)
		console.log(err);
		
	console.log(result);
});
```

Example output:

```javascript
{
  result: {
    status: "OK"
  },
  meta: {
    url: "https://urlmeta.org/",
    type: "text/html",
    title: "URL Meta",
    description: "URL Meta solves the common developer problem: scrape the web. It gives you the detail about a URL and it is Free.",
    image: "https://urlmeta.org/assets/img/urlmeta-image.jpg",
    favicon: "https://urlmeta.org/assets/img/favicon.png"
  }
}
```

For `onlyHead` request:


```javascript
urlmeta({
  url: 'https://urlmeta.org/assets/img/favicon.png',
  onlyHead: true
}, function(err, result) {
	if(err)
		console.log(err);
		
	console.log(result);
});
```
Example Output:

```javascript
{
	result: {
		status: 'OK',
		onlyHead: true
   },
   meta: {
   		url: 'http://urlmeta.org/assets/img/favicon.png',
	   type: 'image/png',
   		size: '9325'
   }
}
```


Please read [API docs](https://urlmeta.org/dev-api.html) for detailed usage instruction.