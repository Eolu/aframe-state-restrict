# Entity State Restrictor

This component pauses and hides an entity if it does not contain any of the specified states.

## API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
| states | The name of the states within which this entity will be active. | `'vr', 'non-vr'` |
| pause | If true, will pause the entity when inactive.  | `true` |
| hide | If true, will hide the entity's object3D when inactive.  | `true` |

### Installation

#### Browser Installation

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/1.0.0/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-state-restrict@1.0.0/dist/aframe-state-restrict.min.js"></script>
</head>

<body>
  <a-scene>
    
    <a-entity
      restrict-entity="states: non-vr"
      geometry="primitive: box">
    </a-entity>
    
  </a-scene>
</body>
```

#### NPM Installation

Install via NPM:

```bash
npm install aframe-state-restrict
```

Then register and use.

```js
require('aframe');
require('aframe-state-restrict');
```
