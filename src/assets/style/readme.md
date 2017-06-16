# Styling directory structure
```
stylesheets/
|
|-- modules/              # Common modules
|   |-- _all.pcss         # Include to get all modules
|   |-- _utility.pcss     # Module name
|   |-- _colors.pcss      # Etc...
|   ...
|
|-- partials/             # Partials
|   |-- _base.sass        # imports for all mixins + global project variables
|   |-- _buttons.pcss     # buttons
|   |-- _figures.pcss     # figures
|   |-- _grids.pcss       # grids
|   |-- _typography.pcss  # typography
|   |-- _reset.pcss       # reset
|   ...
|
|-- vendor/               # CSS or Sass from other projects
|   |-- _colorpicker.pcss
|   |-- _jquery.ui.core.pcss
|   ...
|
`-- main.css            # primary file
```