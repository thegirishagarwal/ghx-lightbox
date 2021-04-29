# Ghx LightBox

This is an Angular wrapper library for the [Ghx LightBox](https://thegirishagarwal.github.io/ghx-lightbox/). To use this library you should get familiar with the Ghx LightBox documentation as well since this documentation only explains details specific to this wrapper.

This documentation is for the latest 5/6.x.x version which requires Angular 5 or newer. For Angular 4 you need to use the latest 4.x.x version. Documentation for the 1.x.x can be found from <a href="https://github.com/thegirishagarwal/ghx-lightbox/">here</a>.


### Quick links

[Example application](https://thegirishagarwal.github.io/ghx-lightbox/)
 |
[StackBlitz example](https://stackblitz.com/github/thegirishagarwal/ghx-lightbox/tree/master)
 |
[Ghx LightBox documentation](https://github.com/thegirishagarwal/ghx-lightbox/)

### Installing and usage

```bash
npm install ghx-lightbox --save
```

##### Load the module for your app (with global configuration):

Providing the global configuration is optional and when used you should only provide the configuration in your root module.

```javascript
import { GhxLightboxModule } from 'ghx-lightbox';


@NgModule({
  ...
  imports: [
    ...
    GhxLightboxModule
  ],
})
```

##### Use it in your HTML template (with custom configuration):

This library provides two ways to create a Ghx LightBox for your project, a component. Component tries to make the usage as simple as possible.

**Single Lightbox usage**

##### Ex. 1
```html
<img src="<Imgage Path>" alt="<Lightbox Caption>" ghxLightbox>
```

##### Ex. 2
```html
<span src="<Imgage Path>" alt="<Lightbox Caption>" ghxLightbox>Lorem ipsum...</span>
```


**Multiple Lightbox usage**

##### Ex. 1
```html
<div ghxLightboxGroup>
  <img src="<Imgage Path>" alt="<Lightbox Caption>" ghxLightbox>
</div>
```
##### Ex. 2
```html
<div ghxLightboxGroup>
  <span src="<Imgage Path>" alt="<Lightbox Caption>" ghxLightbox>Lorem ipsum...</span>
</div>
```

##### Ex. 2
```html
<span src="<Imgage Path>" alt="<Lightbox Caption>" ghxLightbox>Lorem ipsum...<span>
```
For more detailed documentation with all the supported events / options see the the Ghx LightBox documentation.
