jQuery plugin to automatically grow Textareas
=============================================

Getting Started
---------------

### 1. Add a textarea to the page
The id expandable in optional. I use it as the selector in the example below:

    <textarea id="expandable"></textarea>

### 2. Include jQuery and the plugin ( js and css files ) in your page
Change the src to the appropriate location.

    <link type="text/css" rel="stylesheet" href="jquery.sg.expand-min.css">
    <script src="jquery.js"></script>
    <script src="jquery.sg.expand-min.js"></script>

### 3. Call the plugin
Use a selector to chose the textareas where you want to apply the effect and call the plugin.

Eg.

     <script>
     var options = {};
     $('#expandable').expand(options);
     </script>


Options is an object containing the following attributes:

  * `width`: integer. width in pixels.

  * `height`: integer. height in pixels.

