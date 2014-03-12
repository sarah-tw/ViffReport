# Viff Examples

[Viff](https://github.com/winsonwq/viff) is an automated testing framework to find virsual differences between web pages in different environments(developing, staging, production) and browsers. Find more in [Viff Product Page](http://twers.github.io/Viff-Service/).

Just list some useful examples as below:

1. **Tiny CSS difference**
2. **Chart difference**
3. **Content difference**
4. **Partial difference**
5. **Event Handling**
6. **Responsive**
7. **Multiple browsers**
8. **Multiple Environments**
9. **Browserstack**
10. **Programmable**

## Examples of finding differences (No.1 - 8)

Install `viff` and `wdm`.

```
// install viff
$ npm install viff -g

// install webdriver manager
$ npm install wdm -g
$ wdm update --standalone

// set up local selenium server on http://localhost:4444
$ wdm start
```

Run the example.config.js to check following examples.

**Tiny CSS difference, Chart difference, Content difference, Partial difference, Event Handling, Responsive, Multiple browsers,
Multiple Environments**.

```
$ viff example/example.config.js
```
[![Play Command Line Record](http://p3.zhimg.com/fc/cd/fccdb994e0e2f69d371ec9e3ee072210_m.jpg)](http://asciinema.org/a/8063)

In `example.config.js`, you could find this part for **Multiple Browsers** and **Multiple Environments**.

```
...
browsers: ['firefox', 'chrome'],
envHosts: {
  build: 'http://localhost:4000/example/build',
  prod: 'http://localhost:4000/example/prod'
},
...
```

And `size()` method for browser responsive testcase. Actually, we just used scripting feature to make the browser to be in a specific size. The same logic used in **Event Handling** example.

```
{
  'Responsive': ['/responsive.html', size(480)]
}
```

## Browserstack example

Run

```
$ viff example/browserstack.iphone.config.js
```

to run a test for comparing `http://www.google.com` in **iPhone 5** and **iPhone 5S**. You could find more browser capabilities in **[Browserstack](https://www.browserstack.com/automate/node)**.

Remember to fill in your `username` and `key` in config file before running it.

```
...
{
  'browserName' : 'iPhone',
  'platform' : 'MAC',
  'device' : 'iPhone 5',
  'browserstack.user': 'your-name',
  'browserstack.key': 'your-key'
},
...
```

If you want to review the output, just open single http server `python -m SimpleHTTPServer` could get the result.

![example result](http://p4.zhimg.com/c0/dd/c0dd87e2022f12eb12af593f98a70ac8_m.jpg)

## Programmable example

Run

```
$ ./example/iphone5shot http://www.google.com
```

to take a screenshot for `http://www.google.com` in iphone 5, and generate a image called `output.png`. You could update the url you want.

![google.com in iphone 5](http://p3.zhimg.com/23/eb/23ebfae3f92bf61a6a36bbcabceb25d0_m.jpg)


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/winsonwq/viff-examples/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

