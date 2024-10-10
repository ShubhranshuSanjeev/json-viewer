/* 
  --base00: Default Background 
  --base01: Lighter Background (Used for status bars, line number and folding marks)
  --base02: Selection Background
  --base03: Comments, Invisibles, Line Highlighting 
  --base04: Dark Foreground (Used for status bars) 
  --base05: Default Foreground, Caret, Delimiters, Operators 
  --base06: Light Foreground (Not often used) 
  --base07: Light Background (Not often used) 
  --base08: Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted 
  --base09: Integers, Boolean, Constants, XML Attributes, Markup Link Url 
  --base0A: Classes, Markup Bold, Search Text Background 
  --base0B: Strings, Inherited Class, Markup Code, Diff Inserted 
  --base0C: Support, Regular Expressions, Escape Characters, Markup Quotes 
  --base0D: Functions, Methods, Attribute IDs, Headings 
  --base0E: Keywords, Storage, Selector, Markup Italic, Diff Changed 
  --base0F: Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?> 
*/

/* source: https://github.com/gammons/base16-obsidian */
const themes = {
  "default-light": [
    "#ffffff",
    "#e8e8e8",
    "#d8d8d8",
    "#b8b8b8",
    "#585858",
    "#383838",
    "#282828",
    "#181818",
    "#ab4642",
    "#dc9656",
    "#ab4642",
    "#a1b56c",
    "#86c1b9",
    "#7cafc2",
    "#ba8baf",
    "#a16946",
  ],
}

export const availableThemes = Object.keys(themes)

export const themeStyles = (nameOrObject) => {
  let theme
  if (typeof nameOrObject === "string") {
    if (themes[nameOrObject] === undefined) {
      throw new Error(`${nameOrObject} not found`)
    }
    theme = themes[nameOrObject].reduce((map, v, i) => {
      const key = `base0${i.toString(16).toUpperCase()}`
      map[key] = v
      return map
    }, {})
  } else {
    theme = nameOrObject
  }

  return `.container{${Object.keys(theme)
    .map((key) => `--${key}: ${theme[key]};`)
    .join("")}}`
}
