// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    exclude: [
      "app/order"
    ],
    crossOriginAttribute: false,
    files: [
      '../node_modules/jquery/dist/jquery.min.js',
      '../node_modules/bootstrap/dist/js/bootstrap.min.js',
      {pattern: 'https://www.google.com/recaptcha/api.js?onload=ngx_captcha_onload_callback&render=explicit', type: 'js'},
      'https://www.gstatic.com/recaptcha/api2/v1547447582668/recaptcha__en.js'
    ]
  });
};
