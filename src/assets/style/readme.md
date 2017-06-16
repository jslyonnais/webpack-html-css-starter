# Styling directory structure
```
stylesheets/
|
|-- config/                 # Common configuration
|   |-- _reset.pcss         # common Eric Meyer css' reset
|   |-- _variables.pcss     # contain :root variables
|   |-- _base.pcss          # basic style, like <body> and/or <html>
|   |-- _grid.pcss          # website grid
|   ...
|
|-- partials/               # Partials
|   |-- _base.pcss          # imports for all mixins + global project variables
|   |-- _buttons.pcss       # buttons
|   |-- _typography.pcss    # typography
|   ...
|
|-- modules/                # Could be page* of module specific (non reusable resources).
|   |-- _header.pcss        # header
|   |-- _footer.pcss        # footer
|   |-- _finance.pcss       # finance
|   ...
|
|-- vendor/               # CSS or sass from other projects
|   |-- _colorpicker.pcss
|   |-- _jquery.ui.core.pcss
|   ...
|
`-- main.css            # primary file
```

*An HTML module can contain multiple partials and is determine whenever is can be reusable or not. Module can be a page or a part of it.