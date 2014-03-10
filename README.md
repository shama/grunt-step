# grunt-step

> Add confirmation steps to your Grunt flow.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-step --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-step');
```

## The "step" task

### Options

#### options.option
Type: `String`
Default value: `'ack'`

Which option to enable the confirmation steps.

### Usage Examples

```js
grunt.registerTask('default', ['jshint', 'step', 'nodeunit', 'step', 'uglify']);
```

Then running `grunt --ack` will prompt whether to continue upon each `step` specified above.

#### Custom Option
If you want to use another option then `ack` set the `option` option:

```js
grunt.initConfig({
  step: {
    options: {
      option: 'wait',
    },
  },
});
```

Now `grunt --wait` will trigger the prompts.

#### Disable Option
If you want to disable the need for an option all together, set `option` to false:

```js
grunt.initConfig({
  step: {
    options: {
      option: false,
    },
  },
});
```

Now `grunt` will always trigger the prompts.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 0.2.0 - Add support for custom prompt messages (@jharding)
* 0.1.0 - initial release

## License
Copyright (c) 2013 Kyle Robinson Young  
Licensed under the MIT license.
