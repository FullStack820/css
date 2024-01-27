# CSS

- Cascading Style Sheets
- Not a programming language
- Used for website layout and design
- Can be extended with Sass/Less

## 3 methods for adding CSS

- Inline CSS (Directly in the html element (NO!)) - you add a style attribute directly into the HTML tag.
- Internal CSS (Using <style> tags within a single document)
- External CSS (Linking an external .css file)

You can use `id` and `class` to grab a particular HTML5 tag or element.

`a { background-color: yellow; }`

```

a   - (selector)
'{' - declaration start
'}' - declaration end
'background-color' - property
':' - property/value seperator
'yellow' - value
';' - declaration end

```

## Box Model

content - padding (top, bottom, right and left) - border(top, bottom, right, left) - margin (top, bottom, right, left)

```
p{
    margin-top: 5px;
    margin-right: 10px;
    margin-bottom: 5px;
    margin-left: 10px
}

p{
    margin: 5px 10px 5px 10px;
}

p{
    margin: 5px 10px
}
```