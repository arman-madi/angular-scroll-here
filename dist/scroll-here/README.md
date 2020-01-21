# Scroll Here

Is an angular library which help you conveniently to scroll a parent container base on a child tag

Automatically will find a scrollable parent
```
<div [ngStyle]="{'height': '60px', 'overflow': 'auto'}">
<div>
  <div>blah blah blah</div> 
  <div>blah blah blah</div>
  <div>blah blah blah</div>
  <div>blah blah blah</div>
  <ar-scroll-here>SCROLL HERE</ar-scroll-here>
  <div>blah blah blah</div>
  <div>blah blah blah</div>
  <div>blah blah blah</div>
  <div>blah blah blah</div>
</div>
</div>
```

You can determine a particular parent to scroll and also give an offset base on the middle of the parent
```
<div #scrollableParent [ngStyle]="{'height': '200px', 'overflow': 'auto'}">
  <div style=" padding: 400px; border: 1px solid;">
    <ar-scroll-here [scrollableParent]="scrollableParent" offset="-50">SCROLL HERE</ar-scroll-here>
  </div>
</div>
```
