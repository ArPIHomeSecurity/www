# ArPI-Security web site

Source code of https://arpi-security.info.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

### Static Site Generation (SSG)
This site is configured for Static Site Generation with prerendering enabled.

**Build for production:**
```bash
npm run build:ssg
```

**Serve locally:**
```bash
npm run serve:static
```

**Routes prerendered:**
- `/` - Home page
- `/privacy` - Privacy policy  
- `/terms` - Terms of service

**Deploy:** Upload contents of `dist-prod/browser/` to any static hosting service.

### Development Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

![Build Status](https://github.com/ArPIHomeSecurity/www/actions/workflows/deploy-webpage.yml/badge.svg)

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

<a href="https://www.paypal.me/gkovacs81/">
  <img alt="Support via PayPal" src="https://cdn.rawgit.com/twolfson/paypal-github-button/1.0.0/dist/button.svg"/>
</a>
