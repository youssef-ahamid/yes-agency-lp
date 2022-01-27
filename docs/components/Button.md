# Button

Buttons provide a clickable element which can be used in forms or anywhere that needs simple, standard button functionality. They may display text, icons, or both. Buttons can be styled with several attributes to look a specific way.

<br/>

## Usage

```svelte
<script>
	import Button from './../components/base/Button.svelte';
</script>

<Button round purple text="submit" to="/about" />
```

<br/>

## props

The data that can be passed down to buttons in order to manipulate its behavior

### shape

There are 3 shapes any button can take, `round`, `ghost`, & `underlined`

> Note: only one shape should be chosen

<br/>

- #### `round`
  Displays button with rounded background

Type: <strong>Boolean</strong>

<br/>

- #### `underlined`
  Displays button with an underline

Type: <strong>Boolean</strong>

<br/>

- #### `ghost`
  Displays button with no background and no underline

Type: <strong>Boolean</strong>

<br/>

### color

This button component has 7 different color options:

> Note: only one color should be chosen

<br/>

- #### `primary`
  ![#EDF7F6](https://via.placeholder.com/15/EDF7F6/000000?text=+) #EDF7F6

Type: <strong>Boolean</strong>

<br/>

- #### `secondary`
  ![#161626](https://via.placeholder.com/15/161626/000000?text=+) #161626

Type: <strong>Boolean</strong>

<br/>

- #### `tertiary`
  ![#FCDC4D](https://via.placeholder.com/15/FCDC4D/000000?text=+) #FCDC4D

Type: <strong>Boolean</strong>

<br/>

- #### `green`
  ![#00A676](https://via.placeholder.com/15/00A676/000000?text=+) #00A676

Type: <strong>Boolean</strong>

<br/>

- #### `blue`
  ![#226CE0](https://via.placeholder.com/15/226CE0/000000?text=+) #226CE0

Type: <strong>Boolean</strong>

<br/>

- #### `purple`
  ![#C455A8](https://via.placeholder.com/15/C455A8/000000?text=+) #C455A8

Type: <strong>Boolean</strong>

<br/>

- #### `orange`
  ![#FC5130](https://via.placeholder.com/15/FC5130/000000?text=+) #FC5130

Type: <strong>Boolean</strong>

<br/>

### content

- #### `text`
  The text content that will be displayed inside of the button

Type: <strong>String</strong>

<br/>

- #### `icon` (optional)
  The icon that will be displayed inside of the button

Type: <strong>String</strong>

<br/>

### routing

- #### `to`
  The location to redirect to on click

Type: <strong>String</strong>

<br/>
