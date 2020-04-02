Submitting a form without page refreshing, using jQuery.

# Usage

1. Import jQuery and jQuery validate

```javascript
<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script src="https://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>
```
  
  2. Download & Import spop.js 
  ```javascript
  <script src="spop.js"></script>
  ```
  3. Call the function with ID or class of your form.
  ```javascript
  submitToSpop('#your-form');
  ```
  
  If succesful, message 
  ```
  Success, data submitted to Spop!
  ```
  will be printed to the console.
