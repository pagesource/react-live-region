# react-live-region
A small react component for better web accessibility support for screen reader

## Installation
```
$ npm i react-live-region --save
```

## Usage
```html
import ReactLiveRegion from 'react-live-region'


<ReactLiveRegion text="Success: announce message" />
```

## Configuration
*@param* `text`_(String)_ - desire message to announce __required__


*@param* `timeout`_(Number)_ - time in millisecond to announce message __default: 100__

*@param* `setting`_(String)_ - aria-live = polite or assertive __default: "polite"__

*@param* `atomic`_(Boolean)_ ensures that each time the live region is updated, the entirety of the content is announced in full __default: "false"__

## Use case
Conditionally show/hide to announce message
```javascript
{ someCondition && <ReactLiveRegion text="Error: Invalid" />}
```
