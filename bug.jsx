```javascript
// MyComponent.jsx
<div className="bg-gray-200 p-4">
  <div className="flex">
    <div className="w-1/2 bg-red-500 p-2">Div 1</div>
    <div className="w-1/2 bg-blue-500 p-2">Div 2</div>
  </div>
</div>
```
This code results in unexpected layout behavior because the flex container doesn't have explicit height or content to occupy space, leading to unexpected stacking or collapse.