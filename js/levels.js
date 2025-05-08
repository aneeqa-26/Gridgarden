var levels = [
    {
      name: 'grid-column-start 1',
      instructions: {
        'en': '<p>Welcome to Grid Garden, where you write CSS code to grow your carrot garden! Water only the areas that have carrots by using the <code>grid-column-start</code> property.</p><p>For example, <code>grid-column-start: 3;</code> will water the area starting at the 3rd vertical grid line, which is another way of saying the 3rd vertical border from the left in the grid.<img src="https://code.org/api/hour/begin_codepip_grid.png"></p>'},
        board: 'c',
        selector: '> :nth-child(1)',
        style: {'grid-column-start': '3'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
        after: "}"
      },
      {
        name: 'grid-column-start 2',
        instructions: {
          'en': '<p>Uh oh, looks like weeds are growing in the corner of your garden. Use <code>grid-column-start</code> to poison them. Note that the weeds start at the 5th vertical grid line.</p>'},

        
        board: 'w',
        selector : '> :nth-child(1)',
        style: {'grid-column-start': '5'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#poison {\n",
        after: "}"
      },
        {
        name: 'grid-column-end 1',
        instructions: {
          'en': '<p>When <code>grid-column-start</code> is used alone, the grid item by default will span exactly one column. However, you can extend the item across multiple columns by adding the <code>grid-column-end</code> property.</p><p>Using <code>grid-column-end</code>, water all of your carrots while avoiding the dirt. We don\'t want to waste any water! Note that the carrots start at the 1st vertical grid line and end at the 4th.</p>'},
          board: 'c',
    classes: {'#garden > *, #plants > *': 'grid-column-start-1'},
    selector: '> :nth-child(1)',
    style: {'grid-column-end': '4'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column-start: 1;\n",
    after: "}"
  },
  {
    name: 'grid-column-end 2',
    instructions: {
      'en': '<p>When pairing <code>grid-column-start</code> and <code>grid-column-end</code>, you might assume that the end value has to be greater than the start value. But this turns out not the case!</p><p>Try setting <code>grid-column-end</code> to a value less than 5 to water your carrots.</p>'},
      board: 'c',
    classes: {'#garden > *, #plants > *': 'grid-column-start-5'},
    selector: '> :nth-child(1)',
    style: {'grid-column-end': '2'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column-start: 5;\n",
    after: "}"
  },
  {
    name: 'grid-column-end 3',
    instructions: {
      'en': '<p>If you want to count grid lines from the right instead of the left, you can give <code>grid-column-start</code> and <code>grid-column-end</code> negative values. For example, you can set it to -1 to specify the first grid line from the right.</p><p>Try setting <code>grid-column-end</code> to a negative value.</p>'},
      board: 'c',
    classes: {'#garden > *, #plants > *': 'grid-column-start-1'},
    selector: '> :nth-child(1)',
    style: {'grid-column-end': '-2'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column-start: 1;\n",
    after: "}"
  },
  {
    name: 'grid-column-start 3',
    instructions: {
      'en': '<p>Now try setting <code>grid-column-start</code> to a negative value.</p>'},
      board: 'w',
      selector: '> :nth-child(1)',
      style: {'grid-column-start': '-3'},
      before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#poison {\n",
      after: "}"
    },
    {
      name: 'grid-column-end 4',
      instructions: {
        'en': '<p>Instead of defining a grid item based on the start and end positions of the grid lines, you can define it based on your desired column width using the <code>span</code> keyword. Keep in mind that <code>span</code> only works with positive values.</p><p>For example, water these carrots with the rule <code>grid-column-end: span 2;</code>.</p>'},

        board: 'c',
        classes: {'#garden > *, #plants > *': 'grid-column-start-2'},
        selector: '> :nth-child(1)',
        style: {'grid-column-end': 'span 2'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column-start: 2;\n",
        after: "}"
      },
      {
        name: 'grid-column-end 5',
        instructions: {
          'en': '<p>Try using <code>grid-column-end</code> with the <code>span</code> keyword again to water your carrots.</p>',},

          board: 'c',
          classes: {'#garden > *, #plants > *': 'grid-column-start-1'},
          selector: '> :nth-child(1)',
          style: {'grid-column-end': 'span 5'},
          before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column-start: 1;\n",
          after: "}"
        },
        {
          name: 'grid-column-start 4',
          instructions: {
            'en': '<p>You can also use the <code>span</code> keyword with <code>grid-column-start</code> to set your item\'s width relative to the end position.</p>',},
            board: 'c',
            classes: {'#garden > *, #plants > *': 'grid-column-end-6'},
            selector: '> :nth-child(1)',
            style: {'grid-column-start': 'span 3'},
            before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
            after: "  grid-column-end: 6;\n}"
          },
          {
            name: 'grid-column 1',
            instructions: {
              'en': '<p>Typing both <code>grid-column-start</code> and <code>grid-column-end</code> every time can get tiring. Fortunately, <code>grid-column</code> is a shorthand property that can accept both values at once, separated by a slash.</p><p>For example, <code>grid-column: 2 / 4;</code> will set the grid item to start on the 2nd vertical grid line and end on the 4th grid line.</p>',},
              board: 'c',
    selector: '> :nth-child(1)',
    style: {'grid-column': '4 / 6'},
    before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
    after: "}"
  },
  {
    name: 'grid-column 2',
    instructions: {
      'en': '<p>Try using <code>grid-column</code> to water these carrots. The <code>span</code> keyword also works with this shorthand property so give it a try!</p>',},
      board: 'c',
      selector: '> :nth-child(1)',
      style: {'grid-column': '2 / 5'},
      before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
      after: "}"
    },
    {
      name: 'grid-row-start 1',
      instructions: {
        'en': '<p>One of the things that sets CSS grids apart from flexbox is that you can easily position items in two dimensions: columns and rows. <code>grid-row-start</code> works much like <code>grid-column-start</code> except along the vertical axis.</p><p>Use <code>grid-row-start</code> to water these carrots.</p>',},
        board: 'c',
        selector: '> :nth-child(1)',
        style: {'grid-row-start': '3'},
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
        after: "}"
      },
      {
        name: 'grid-row-start 2',
        instructions: {
          'en': '<p>Now give the shorthand property <code>grid-row</code> a try.</p>',},
          board: 'c',
          selector: '> :nth-child(1)',
          style: {'grid-row': '3 / 6'},
          before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
          after: "}"
        },
        {
          name: 'grid-column-row 1',
          instructions: {
            'en': '<p>Use <code>grid-column</code> and <code>grid-row</code> at the same time to set position in both dimensions.</p>',},
            board: 'w',
            selector: '> :nth-child(1)',
            style: {'grid-column': '2', 'grid-row': '5'},
            before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#poison {\n",
            after: "}"
          },
          {
            name: 'grid-column-row 2',
            instructions: {
              'en': '<p>You can also use <code>grid-column</code> and <code>grid-row</code> together to span larger areas within the grid. Give it a try!</p>',},

              board: 'c',
              selector: '> :nth-child(1)',
              style: {'grid-column': '2 / 6', 'grid-row': '1 / 6'},
              before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
              after: "}"
            },
            {
              name: 'grid-area 1',
              instructions: {
                'en': '<p>If typing out both <code>grid-column</code> and <code>grid-row</code> is too much for you, there\'s yet another shorthand for that. <code>grid-area</code> accepts four values separated by slashes: <code>grid-row-start</code>, <code>grid-column-start</code>, <code>grid-row-end</code>, followed by <code>grid-column-end</code>.</p><p>One example of this would be <code>grid-area: 1 / 1 / 3 / 6;</code>.</p>',},

                board: 'c',
                selector: '> :nth-child(1)',
                style: {'grid-area': '1 / 2 / 4 / 6'},
                before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
                after: "}"
              },
             
                
    
   
 
    
       
          
            
    ];
            
    var levelWin = {
              name: 'win',
              instructions: {
                'en': '<p>You win! By the power of CSS grid, you were able to grow enough carrots for Froggy to bake his world famous 20-carrot cake. What, were you expecting a different hoppy friend?</p><p>If you enjoyed Grid Garden, be sure to check out <a href="https://codepip.com/games/flexbox-froggy/">Flexbox Froggy</a> to learn about another powerful new feature of CSS layout. You can also find new coding games over at <a href="https://codepip.com">Codepip</a>.</p><p>Want to support Grid Garden? Spread the word to your friends and family about Grid Garden!</p>',},
                board: '',
                classes: {'#garden, #plants, #overlay': 'win'},
                style: {},
                before: "#pond {\n  display: flex;\n",
                after: "}"
              };