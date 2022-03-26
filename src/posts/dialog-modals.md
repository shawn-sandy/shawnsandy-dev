---
title: Native HTML5 Dialogs (aka Modals) are FUN!
subtitle: 'Native HTML5 Modals (Dialogs) are finally here and available across all ever green browsers and they are fun!'
date: 2022-03-25
coverImage: ['dialog.png']
tags: ['posts', 'tools', accessibility']
---


<!-- image -->
!['Accesslint github site']({{ hlp.sharp.img(['dialog.png'])}})

Your heard me right native HTML5 dialogs are here and available across all evergreen browsers and they are fun. Well actually its the `<dialog>` element [you check out the info here](). Warning it does require a bit of javascript to work, but most of the functionality you need to create a modal wil come out of the box.


### Creating a Modal Dialog

> The `<dialog>` HTML element represents a dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.


Creating a modals with the `dialog` element is pretty simple compared to what we had to do before to get a modal on the page, I will walk you through the process.

#### HTML

The HTML5 `dialog` is just and empty container and comes hidden by default you can make it visible by adding the `open` attribute to the element and styling the content. The beauty of this is that it provides a blank canvas for you to work with unlike some of the other HTML elements that requires you to hide the default elements to customize.

Here is very simple example - just a heading some text and a button to open the modal.



```html
<div>
  <button type="button" onclick="openDialog('#dialog-elm',this)">
    Open Dialog
  </button>
  <dialog id="dialog-elm">
    <h3>Example modal</h3>

    <p>
      Native HTML5 Modals (Dialogs) are finally here and available across all
      ever green browsers and they are fun!
    </p>
    <button class="btn btn-close" onclick="closeDialog(this)">Close</button>
  </dialog>
</div>
```


!['Modal preview']({{ hlp.sharp.img(['modal-example.png'])}})


<a href="https://codepen.io/shawn-sandy/pen/XWVMRgz" target="_blank" rel="">Check out a code pen demo here</a>

#### JS

The `javascript` used is this example is pretty straight forward, you also have access to `dialog.show()`, `dialog.hide() and `dialog.destroy()` methods to extend the dialog element.

```js
 function openDialog(target, elm) {
    console.log(target, elm)
    document.querySelector(target).showModal()
  }
  function closeDialog(elm) {
    elm.closest('dialog').close()
  }
```

#### CSS

This is where I had the most fun, I used CSS props to make styling the Dialog dynamic and added `::backdrop` pseudo-element that allows you to style the background of the element with minimal effort.

> The `::backdrop` CSS pseudo-element is a box the size of the viewport which is rendered immediately beneath any element being presented in fullscreen mode. This includes both elements which have been placed in fullscreen mode using the Fullscreen API and <dialog> elements.

```css
dialog {
    --diag-bg: whitesmoke;
    --diag-bg-img: none;
    --diag-cl: inherit;
    --diag-x: 1.5rem;
    --diag-y: 1.5rem;
    --bk-drop: rgba(0, 0, 0, 0.5);

    background-color: var(--diag-bg);
    color: var(--diag-cl);
    background-image: var(--diag-bg-img);
    padding-inline: var(--diag-x);
    padding-block: var(--diag-y);
  }
  dialog::backdrop {
    --bk-drop: rgba(0, 0, 0, 0.5);
    background-color: var(--bk-drop);
  }
  ```


#### Accessibility

