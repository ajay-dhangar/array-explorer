webpackJsonp(
  [1],
  {
    "/7gC": function (e, a) {
      e.exports = { short: "nl", long: "Dutch", createdBy: "glenngijsberts" };
    },
    "/TCW": function (e, a) {
      e.exports = { short: "es", long: "Spanish", createdBy: "Gonzalo2310" };
    },
    "059H": function (e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = {
          state: {
            selectedMethod: "",
            adding: [
              {
                name: "splice",
                shortDesc: "ä¸€ä¸ªæˆ–å¤šä¸ªå…ƒç´ åˆ°æ•°ç»„",
                desc: "æ·»åŠ ã€åˆ é™¤æˆ–æ›¿æ¢æ•°ç»„ä¸­çš„å…ƒç´ ã€‚",
                example:
                  "arr.splice(2, 0, 'tacos');<br>\n        console.log(arr);",
                output: "[5, 1, 'tacos', 8]",
              },
              {
                name: "push",
                shortDesc: "å…ƒç´ åˆ°æ•°ç»„çš„æœ«å°¾",
                desc: "å°†ä¸€ä¸ªæˆ–å¤šä¸ªå…ƒç´ æ·»åŠ åˆ°æ•°ç»„çš„æœ«å°¾ï¼Œå¹¶è¿”å›žæ•°ç»„çš„æ–°é•¿åº¦ã€‚",
                example: "arr.push(2);<br>\n        console.log(arr);",
                output: "[5, 1, 8, 2]",
              },
              {
                name: "unshift",
                shortDesc: "å…ƒç´ åˆ°æ•°ç»„çš„å¼€å¤´",
                desc: "å°†ä¸€ä¸ªæˆ–å¤šä¸ªå…ƒç´ æ·»åŠ åˆ°æ•°ç»„çš„å¼€å¤´ï¼Œå¹¶è¿”å›žæ•°ç»„çš„æ–°é•¿åº¦ã€‚",
                example: "arr.unshift(2, 7);<br>\n        console.log(arr);",
                output: "[2, 7, 5, 1, 8]",
              },
              {
                name: "concat",
                shortDesc: "å…¶ä»–æ•°ç»„æˆ–å€¼åˆ°è¿™ä¸ªæ•°ç»„",
                desc: "è¿”å›žç”±è¿™ä¸ªæ•°ç»„ä¸Žå…¶ä»–æ•°ç»„æˆ–å€¼ç»„æˆçš„æ–°æ•°ç»„ã€‚",
                example:
                  "let arr2 = ['a', 'b', 'c'];<br>\n        let arr3 = arr.concat(arr2);<br>\n        console.log(arr3);",
                output: "[5, 1, 8, 'a', 'b', 'c']",
              },
            ],
            removing: [
              {
                name: "splice",
                shortDesc: "æ•°ç»„ä¸­ä¸€ä¸ªæˆ–å¤šä¸ªå…ƒç´ ",
                desc: "æ·»åŠ ã€åˆ é™¤æˆ–æ›¿æ¢æ•°ç»„ä¸­çš„å…ƒç´ ã€‚",
                example: "arr.splice(2, 1);<br>\n        console.log(arr);",
                output: "[5, 1]",
              },
              {
                name: "pop",
                shortDesc: "æ•°ç»„çš„æœ€åŽä¸€ä¸ªå…ƒç´ ",
                desc: "ä»Žæ•°ç»„ä¸­åˆ é™¤æœ€åŽä¸€ä¸ªå…ƒç´ å¹¶è¿”å›žè¯¥å…ƒç´ ã€‚",
                example: "arr.pop();<br>\n        console.log(arr);",
                output: "[5, 1]",
              },
              {
                name: "shift",
                shortDesc: "æ•°ç»„çš„ç¬¬ä¸€ä¸ªå…ƒç´ ",
                desc: "ä»Žæ•°ç»„ä¸­ç§»é™¤ç¬¬ä¸€ä¸ªå…ƒç´ å¹¶è¿”å›žè¯¥å…ƒç´ ã€‚",
                example: "arr.shift();<br>\n        console.log(arr);",
                output: "[1, 8]",
              },
              {
                name: "slice",
                shortDesc: "ä¸€ä¸ªæˆ–å¤šä¸ªæ‰èƒ½ä½¿ç”¨ï¼Œä¿æŒåŽŸæ•°ç»„ä¸å˜ã€‚",
                desc: "<code>slice()</code>æ–¹æ³•è¿”å›žä¸€ä¸ªæ–°çš„æ•°ç»„ï¼Œæ˜¯å¯¹åŽŸæ•°ç»„éƒ¨åˆ†çš„æµ…æ‹·è´ã€‚å¯ä»¥åªä¼ å…¥<code> end </code>ç»“æŸä½ç½®å‚æ•°ï¼ˆ<code> begin </code>å¼€å§‹ä½ç½®å°†é»˜è®¤ä¸º 0ï¼‰ï¼Œæˆ–è€…éƒ½ä¼ å…¥<code> slice(begin, end) </code>ã€‚åŽŸæ•°ç»„ä¸ä¼šè¢«ä¿®æ”¹ã€‚",
                example:
                  "let slicedArr = arr.slice(1);<br>\n        console.log(arr);<br>\n        console.log(slicedArr);",
                output: "[5, 1, 8]<br>\n        [1, 8]",
              },
            ],
            string: [
              {
                name: "join",
                shortDesc: "æŠŠæ•°ç»„ä¸­çš„æ‰€æœ‰å…ƒç´ è½¬æ¢ä¸ºå­—ç¬¦ä¸²",
                desc: "æŠŠæ•°ç»„ä¸­çš„æ‰€æœ‰å…ƒç´ è½¬æ¢ä¸ºå­—ç¬¦ä¸²ã€‚å¯ä»¥æŒ‰åŽŸæ ·ï¼Œæˆ–è€…åœ¨ä¸­é—´åŠ å…¥<code>elements.join('-')</code>è¿”å›ž<code>foo-bar</code>",
                example: "console.log(arr.join());",
                output: '"5,1,8"',
              },
              {
                name: "toString",
                shortDesc: "è¿”å›žä¸€ä¸ªè¡¨ç¤ºæ•°ç»„çš„å­—ç¬¦ä¸²ã€‚",
                desc: "è¿”å›žè¡¨ç¤ºæ•°ç»„å’Œå®ƒå…ƒç´ çš„å­—ç¬¦ä¸²ã€‚",
                example: "console.log(arr.toString());",
                output: '"5,1,8"',
              },
              {
                name: "toLocaleString",
                shortDesc: "è¿”å›žè¡¨ç¤ºè¯¥æ•°ç»„çš„æœ¬åœ°åŒ–å­—ç¬¦ä¸²ã€‚",
                desc: "è¿™ä¸ªæœ‰ç‚¹æ€ªã€‚è¿”å›žè¡¨ç¤ºæ•°ç»„åŠå…¶å…ƒç´ çš„æœ¬åœ°åŒ–å­—ç¬¦ä¸²ã€‚è¿™å¯¹æ—¥æœŸå’Œè´§å¸æ˜¯éžå¸¸æœ‰ç”¨ï¼Œæœ‰ä¸€äº›å¥‡æ€ªçš„åŽŸç”ŸæŠ½è±¡ï¼Œæ‰€ä»¥æœ€å¥½ä½¿ç”¨æ—¶å‚è€ƒæ–‡æ¡£ã€‚",
                example:
                  "let date = [new Date()];<br>\n        const arrString = arr.toLocaleString();<br>\n        const dateString = date.toLocaleString();<br>\n        console.log(arrString, dateString);",
                output: '"5,1,8 12/26/2017, 6:54:49 PM"',
              },
            ],
            ordering: [
              {
                name: "reverse",
                shortDesc: "åè½¬æ•°ç»„ä¸­çš„å…ƒç´ é¡ºåºã€‚",
                desc: "åè½¬æ•°ç»„ä¸­å…ƒç´ çš„é¡ºåº - ç¬¬ä¸€ä¸ªå˜æˆæœ€åŽä¸€ä¸ªï¼Œæœ€åŽä¸€ä¸ªå˜æˆç¬¬ä¸€ä¸ªã€‚",
                example: "arr.reverse();<br>\n        console.log(arr);",
                output: "[8, 1, 5]",
              },
              {
                name: "sort",
                shortDesc: "å¯¹æ•°ç»„ä¸­å…ƒç´ è¿›è¡ŒæŽ’åºã€‚",
                desc: "å¯¹æ•°ç»„ä¸­çš„å…ƒç´ è¿›è¡ŒæŽ’åºå¹¶è¿”å›žæ•°ç»„ã€‚",
                example: "arr.sort();<br>\n        console.log(arr);",
                output: "[1, 5, 8]",
              },
            ],
            other: [
              {
                name: "length",
                shortDesc: "æŸ¥è¯¢æ•°ç»„çš„é•¿åº¦",
                desc: "è¿”å›žæ•°ç»„ä¸­å…ƒç´ çš„æ•°ç›®ã€‚",
                example: "console.log(arr.length);",
                output: "3",
              },
              {
                name: "fill",
                shortDesc: "ç”¨é™æ€å€¼å¡«å……æ•°ç»„çš„æ‰€æœ‰å…ƒç´ ",
                desc: "ç”¨ä¸€ä¸ªé™æ€å€¼ä»Žå¼€å§‹ç´¢å¼•åˆ°ç»“æŸç´¢å¼•å¡«å……æ•°ç»„çš„æ‰€æœ‰å…ƒç´ ã€‚",
                example: "arr.fill(2);<br>\n        console.log(arr);",
                output: "[2, 2, 2]",
              },
              {
                name: "copyWithin",
                shortDesc: "å¤åˆ¶æ•°ç»„ä¸­çš„ä¸€ç³»åˆ—æ•°ç»„å…ƒç´ ã€‚",
                desc: "å¤åˆ¶æ•°ç»„ä¸­çš„ä¸€ç³»åˆ—æ•°ç»„å…ƒç´ ã€‚å¯ä»¥åªä¼ å…¥<code> end </code>ç»“æŸä½ç½®å‚æ•°ï¼ˆ<code> begin </code>å¼€å§‹ä½ç½®å°†é»˜è®¤ä¸º 0ï¼‰ï¼Œæˆ–è€…éƒ½ä¼ å…¥<code> copyWithin(begin, end) </code>",
                example: "arr.copyWithin(1);<br>\n        console.log(arr);",
                output: "[5, 5, 1]",
              },
            ],
            iterate: [
              {
                name: "forEach",
                shortDesc: "ä¸ºæ¯ä¸ªå…ƒç´ éƒ½æ‰§è¡Œä¸€æ¬¡å›žè°ƒå‡½æ•°ã€‚",
                desc: "The forEach() æ–¹æ³•ä¸ºæ¯ä¸ªå…ƒç´ éƒ½æ‰§è¡Œä¸€æ¬¡å›žè°ƒå‡½æ•°ã€‚",
                example:
                  "arr.forEach((element) => {<br>\n        <span>&nbsp;&nbsp;</span>console.log(element)<br>\n        });",
                output: "5<br>\n        1<br>\n        8",
              },
              {
                name: "map",
                shortDesc:
                  "å›žè°ƒå‡½æ•°å¤„ç†æ¯ä¸ªå…ƒç´ å¹¶åˆ©ç”¨è¿”å›žä¸€ä¸ªæ–°æ•°ç»„",
                desc: "é€šè¿‡æŒ‡å®šå‡½æ•°å¤„ç†æ•°ç»„çš„æ¯ä¸ªå…ƒç´ ï¼Œå¹¶è¿”å›žå¤„ç†åŽçš„æ•°ç»„ã€‚",
                example:
                  "let map = arr.map(x => x + 1);<br>\n        console.log(map);",
                output: "[6, 2, 9]",
              },
              {
                name: "entries",
                shortDesc: "åˆ›å»ºä¸€ä¸ªè¿­ä»£å™¨å¯¹è±¡",
                desc: "entries() è¿”å›žä¸€ä¸ªéåŽ†å™¨å¯¹è±¡ï¼Œç”¨æ¥éåŽ†[é”®å, é”®å€¼]ç»„æˆçš„æ•°ç»„ã€‚è¿­ä»£å™¨æœ‰å¾ˆå¤šç”¨é€”ï¼Œè¿˜æœ‰å…¶ä»–ä¸Žä¹‹ç»“åˆä½¿ç”¨çš„æ–¹æ³•ï¼Œå¦‚<code>values</code> å’Œ <code>keys</code>æ–¹æ³•",
                example:
                  "let iterator = arr.entries();<br>\n        console.log(iterator.next().value);",
                output:
                  '[0, 5]<br>\n        <span class="comment">// the 0 is the index,</span><br>\n        <span class="comment">// the 5 is the first number</span>',
              },
            ],
            find: {
              single: [
                {
                  name: "includes",
                  shortDesc: "æŸä¸ªå…ƒç´ æ˜¯å¦å­˜åœ¨",
                  desc: "ç¡®å®šæ•°ç»„æ˜¯å¦åŒ…å«æŸä¸ªå…ƒç´ ï¼Œå¹¶æ ¹æ®éœ€è¦è¿”å›žtrueæˆ–falseã€‚",
                  example: "console.log(arr.includes(1));",
                  output: "true",
                },
                {
                  name: "indexOf",
                  shortDesc: "ç»™å®šå…ƒç´ çš„ç¬¬ä¸€ä¸ªç´¢å¼•",
                  desc: "è¿”å›žæ•°ç»„ä¸­å¯ä»¥æ‰¾åˆ°ç»™å®šå…ƒç´ çš„ç¬¬ä¸€ä¸ªç´¢å¼•ï¼Œå¦‚æžœä¸å­˜åœ¨åˆ™è¿”å›ž-1ã€‚",
                  example: "console.log(arr.indexOf(5));",
                  output: "0",
                },
                {
                  name: "lastIndexOf",
                  shortDesc: "ç»™å®šå…ƒç´ çš„æœ€åŽä¸€ä¸ªç´¢å¼•",
                  desc: "è¿”å›žä¸€ä¸ªç»™å®šå…ƒç´ æœ€åŽå‡ºçŽ°çš„ä½ç½®ï¼Œå¦‚æžœä¸å­˜åœ¨åˆ™è¿”å›ž-1ã€‚",
                  example: "console.log(arr.lastIndexOf(5));",
                  output: "0",
                },
                {
                  name: "find",
                  shortDesc: "æ»¡è¶³æ¡ä»¶çš„ç¬¬ä¸€ä¸ªå…ƒç´ ",
                  desc: "å¦‚æžœæ•°ç»„ä¸­çš„å…ƒç´ æ»¡è¶³æä¾›çš„å›žè°ƒå‡½æ•°ï¼Œåˆ™è¿”å›žæ•°ç»„ä¸­æ‰¾åˆ°çš„å€¼ã€‚å¦‚æžœæœªæ‰¾åˆ°ï¼Œåˆ™è¿”å›žundefinedã€‚ç±»ä¼¼äºŽ<code>findIndex()</code>ï¼Œä½†å®ƒè¿”å›žçš„æ˜¯é¡¹ç›®è€Œä¸æ˜¯ç´¢å¼•ã€‚",
                  example:
                    "let isTiny = (el) => el < 2;<br>\n          console.log(arr.find(isTiny));",
                  output: "1",
                },
                {
                  name: "findIndex",
                  shortDesc: "æ»¡è¶³æ¡ä»¶çš„ç¬¬ä¸€ä¸ªå…ƒç´ çš„ç´¢å¼•",
                  desc: "è¿”å›žæ•°ç»„ä¸­æ»¡è¶³æä¾›çš„å›žè°ƒå‡½æ•°çš„ç¬¬ä¸€ä¸ªå…ƒç´ çš„ç´¢å¼•ï¼Œå¦åˆ™è¿”å›ž-1ï¼Œä¸Ž<code> find() </ code>ç±»ä¼¼ï¼Œä½†å®ƒè¿”å›žç´¢å¼•è€Œä¸æ˜¯é¡¹ç›®ã€‚",
                  example:
                    "let isBig = (el) => el > 6;<br>\n          console.log(arr.findIndex(isBig));",
                  output: "2",
                },
                {
                  name: "reduce",
                  shortDesc: "ä»Žå¤´åˆ°å°¾å°†æ•°ç»„å…ƒç´ è®¡ç®—ä¸ºä¸€ä¸ªå€¼",
                  desc: "æŽ¥æ”¶ä¸€ä¸ªå‡½æ•°ä½œä¸ºç´¯åŠ å™¨ï¼Œæ•°ç»„ä¸­çš„æ¯ä¸ªå€¼ï¼ˆä»Žå·¦åˆ°å³ï¼‰å¼€å§‹ç¼©å‡ï¼Œæœ€ç»ˆè®¡ç®—ä¸ºä¸€ä¸ªå€¼ã€‚",
                  example:
                    "let reducer = (a, b) => a + b;<br>\n          <span>&nbsp;&nbsp;</span>console.log(arr.reduce(reducer));",
                  output: "14",
                },
                {
                  name: "reduceRight",
                  shortDesc: "ä»Žå°¾åˆ°å¤´å°†æ•°ç»„å…ƒç´ è®¡ç®—ä¸ºä¸€ä¸ªå€¼ã€‚",
                  desc: "æŽ¥æ”¶ä¸€ä¸ªå‡½æ•°ä½œä¸ºç´¯åŠ å™¨ï¼Œæ•°ç»„ä¸­çš„æ¯ä¸ªå€¼ï¼ˆä»Žå³åˆ°å·¦ï¼‰å¼€å§‹ç¼©å‡ï¼Œæœ€ç»ˆè®¡ç®—ä¸ºä¸€ä¸ªå€¼ã€‚",
                  example:
                    "[arr, [0, 1]].reduceRight((a, b) => {<br>\n          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>\n          }, [])",
                  output: "[0, 1, 5, 1, 8]",
                },
              ],
              many: [
                {
                  name: "filter",
                  shortDesc: "è¿”å›žç¬¦åˆæ¡ä»¶æ‰€æœ‰å…ƒç´ çš„æ•°ç»„",
                  desc: "åˆ›å»ºä¸€ä¸ªæ–°çš„æ•°ç»„ï¼Œæ–°æ•°ç»„ä¸­çš„å…ƒç´ æ˜¯é€šè¿‡æ£€æŸ¥æŒ‡å®šæ•°ç»„ä¸­ç¬¦åˆæ¡ä»¶çš„æ‰€æœ‰å…ƒç´ ã€‚",
                  example:
                    "let filtered = arr.filter(el => el > 4);<br>\n          console.log(filtered)",
                  output: "[5, 8]",
                },
                {
                  name: "every",
                  shortDesc: "æ¯ä¸ªå…ƒç´ æ˜¯å¦éƒ½ç¬¦åˆæ¡ä»¶",
                  desc: "å¦‚æžœæ•°ç»„ä¸­çš„æ¯ä¸ªå…ƒç´ æ»¡è¶³æŒ‡å®šå‡½æ•°ï¼Œåˆ™è¿”å›žtrueã€‚",
                  example:
                    "let isSmall = (el) => el < 10;<br>\n          console.log(arr.every(isSmall));",
                  output: "true",
                },
                {
                  name: "some",
                  shortDesc: "è‡³å°‘æœ‰ä¸€ä¸ªå…ƒç´ ç¬¦åˆæŒ‡å®šæ¡ä»¶",
                  desc: "å¦‚æžœæ•°ç»„ä¸­çš„è‡³å°‘ä¸€ä¸ªå…ƒç´ æ»¡è¶³æŒ‡å®šå‡½æ•°ï¼Œåˆ™è¿”å›žtrueã€‚",
                  example:
                    "let biggerThan4 = (el) => el > 4;<br>\n          console.log(arr.some(biggerThan4));",
                  output: "true",
                },
              ],
            },
          },
        });
    },
    "0iGN": function (e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = {
          state: {
            selectedMethod: "",
            adding: [
              {
                name: "splice",
                shortDesc: "Ø¹Ù†ØµØ± Ø£Ùˆ Ø£ÙƒØ«Ø± Ù„Ù„Ù…ØµÙÙˆÙØ©",
                desc: "ØªØ¶ÙŠÙ Ùˆ/Ø£Ùˆ ØªØ­Ø°Ù Ø¹Ù†Ø§ØµØ± Ù…Ù† Ø§Ù„Ù…ØµÙÙˆÙØ©.",
                example:
                  "arr.splice(2, 0, 'tacos');<br>\n        console.log(arr);",
                output: "[5, 1, 'tacos', 8]",
              },
              {
                name: "push",
                shortDesc: "Ø¹Ù†Ø§ØµØ± Ø¥Ù„Ù‰ Ù†Ù‡Ø§ÙŠØ© Ø§Ù„Ù…ØµÙÙˆÙØ©",
                desc: "Ø¥Ø¶Ø§ÙØ© Ø¹Ù†ØµØ± Ø£Ùˆ Ø£ÙƒØ«Ø± Ø¥Ù„Ù‰ Ù†Ù‡Ø§ÙŠØ© Ø§Ù„Ù…ØµÙÙˆÙØ© ÙˆØªØ¹ÙŠØ¯ Ø§Ù„Ø·ÙˆÙ„ Ø§Ù„Ø¬Ø¯ÙŠØ¯ Ù„Ù„Ù…ØµÙÙˆÙØ©.",
                example: "arr.push(2);<br>\n        console.log(arr);",
                output: "[5, 1, 8, 2]",
              },
              {
                name: "unshift",
                shortDesc: "Ø¹Ù†Ø§ØµØ± Ø¥Ù„Ù‰ Ø¨Ø¯Ø§ÙŠØ© Ø§Ù„Ù…ØµÙÙˆÙØ©",
                desc: "Ø¥Ø¶Ø§ÙØ© Ø¹Ù†ØµØ± Ø£Ùˆ Ø£ÙƒØ«Ø± Ø¥Ù„Ù‰ Ø¨Ø¯Ø§ÙŠØ© Ø§Ù„Ù…ØµÙÙˆÙØ© ÙˆØªØ¹ÙŠØ¯ Ø§Ù„Ø·ÙˆÙ„ Ø§Ù„Ø¬Ø¯ÙŠØ¯ Ù„Ù„Ù…ØµÙÙˆÙØ©.",
                example: "arr.unshift(2, 7);<br>\n        console.log(arr);",
                output: "[2, 7, 5, 1, 8]",
              },
              {
                name: "concat",
                shortDesc:
                  "Ù‡Ø°Ù‡ Ø§Ù„Ù…ØµÙÙˆÙØ© Ø¥Ù„Ù‰ Ù…ØµÙÙˆÙØ© Ø£Ùˆ Ø£ÙƒØ«Ø± Ùˆ/Ø£Ùˆ Ù‚ÙŠÙ…Ø© Ø£Ùˆ Ø£ÙƒØ«Ø±",
                desc: "ØªØ¹ÙŠØ¯ Ø§Ù„Ù…ØµÙÙˆÙØ© Ø§Ù„Ù…ÙƒÙˆÙ†Ø© Ù…Ù† Ù‡Ø°Ù‡ Ø§Ù„Ù…ØµÙˆÙØ© Ù…Ø¹ Ù…ØµÙÙˆÙØ© Ø£Ùˆ Ø£ÙƒØ«Ø± Ùˆ/Ø£Ùˆ Ù‚ÙŠÙ…Ø© Ø£ÙƒØ«Ø± Ø§Ù„Ø£Ø®Ø±Ù‰.",
                example:
                  "let arr2 = ['a', 'b', 'c'];<br>\n        let arr3 = arr.concat(arr2);<br>\n        console.log(arr3);",
                output: "[5, 1, 8, 'a', 'b', 'c']",
              },
            ],
            removing: [
              {
                name: "splice",
                shortDesc: "Ø¹Ù†ØµØ± Ø£Ùˆ Ø£ÙƒØ«Ø± Ù…Ù† Ø§Ù„Ù…ØµÙÙˆÙØ©",
                desc: "ØªØ¶ÙŠÙ Ùˆ/Ø£Ùˆ ØªØ­Ø°Ù Ø¹Ù†Ø§ØµØ± Ù…Ù† Ø§Ù„Ù…ØµÙÙˆÙØ©.",
                example: "arr.splice(2, 1);<br>\n        console.log(arr);",
                output: "[5, 1]",
              },
              {
                name: "pop",
                shortDesc: "Ø§Ù„Ø¹Ù†ØµØ± Ø§Ù„Ø£Ø®ÙŠØ± ÙÙŠ Ø§Ù„Ù…ØµÙÙˆÙØ©",
                desc: "ØªØ­Ø°Ù Ø§Ù„Ø¹Ù†ØµØ± Ø§Ù„Ø£Ø®ÙŠØ± ÙÙŠ Ø§Ù„Ù…ØµÙÙˆÙØ© ÙˆØªØ¹ÙŠØ¯ Ù‡Ø°Ø§ Ø§Ù„Ø¹Ù†ØµØ±.",
                example: "arr.pop();<br>\n        console.log(arr);",
                output: "[5, 1]",
              },
              {
                name: "shift",
                shortDesc: "Ø§Ù„Ø¹Ù†ØµØ± Ø§Ù„Ø£ÙˆÙ„ Ù…Ù† Ø§Ù„Ù…ØµÙÙˆÙØ©",
                desc: "ØªØ­Ø°Ù Ø§Ù„Ø¹Ù†ØµØ± Ø§Ù„Ø£ÙˆÙ„ Ù…Ù† Ø§Ù„Ù…ØµÙÙˆÙØ© ÙˆØªØ¹ÙŠØ¯ Ù‡Ø°Ø§ Ø§Ù„Ø¹Ù†ØµØ±.",
                example: "arr.shift();<br>\n        console.log(arr);",
                output: "[1, 8]",
              },
              {
                name: "slice",
                shortDesc:
                  "Ø¹Ù†ØµØ± Ø£Ùˆ Ø£ÙƒØ«Ø± Ù…Ù† Ø§Ù„Ù…ØµÙÙˆÙØ© Ù„Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… ØŒ ØªØ§Ø±ÙƒØ© Ø§Ù„Ù…ØµÙÙˆÙØ© Ø§Ù„Ø£ØµÙ„ÙŠØ© ÙƒÙ…Ø§ Ù‡ÙŠ",
                desc: "Ø§Ù„Ø¯Ø§Ù„Ø© <code>slice()</code> ØªØ¹ÙŠØ¯ Ù†Ø³Ø®Ø© Ù…ØµØºØ±Ø© Ù„Ø¬Ø²Ø¡ Ù…Ù† Ù…ØµÙÙˆÙØ© Ø¥Ù„Ù‰ Ø¹Ù†ØµØ± Ù…ØµÙÙˆÙØ© Ø¬Ø¯ÙŠØ¯ . Ø¨Ø¥Ù…ÙƒØ§Ù†Ùƒ Ø¥Ù…Ø§ ØªØ­Ø¯ÙŠØ¯ Ø§Ù„Ø¹Ù†ØµØ± Ø§Ù„Ø£Ø®ÙŠØ± ( Ø­ÙŠØ« Ø£Ù† Ø§Ù„Ø¹Ù†ØµØ± Ø§Ù„Ø£ÙˆÙ„ Ø§Ù„Ø§ÙØªØ±Ø§Ø¶ÙŠ Ø³ÙŠÙƒÙˆÙ† ØµÙØ± ) Ø£Ùˆ Ø¨Ø¥Ù…ÙƒØ§Ù†Ùƒ ØªØ­Ø¯ÙŠØ¯ Ø§Ù„Ø¨Ø¯Ø§ÙŠØ© ÙˆØ§Ù„Ù†Ù‡Ø§ÙŠØ©, Ù…ÙØµÙˆÙ„ÙŠÙ† Ø¨ÙØ§ØµÙ„Ø© , comma-separated. Ø§Ù„Ù…ØµÙÙˆÙØ© Ø§Ù„Ø£ØµÙ„ÙŠØ© Ù„Ù† ÙŠØªÙ… ØªØ¹Ø¯ÙŠÙ„Ù‡Ø§.",
                example:
                  "let slicedArr = arr.slice(1);<br>\n        console.log(arr);<br>\n        console.log(slicedArr);",
                output: "[5, 1, 8]<br>\n        [1, 8]",
              },
            ],
            string: [
              {
                name: "join",
                shortDesc:
                  "Ø¯Ù…Ø¬ Ø¬Ù…ÙŠØ¹ Ø¹Ù†Ø§ØµØ± Ø§Ù„Ù…ØµÙÙˆÙØ© ÙÙŠ Ø³Ù„Ø³Ù„Ø© Ù†ØµÙŠØ© ÙˆØ§Ø­Ø¯Ø©",
                desc: "Ø¯Ù…Ø¬ Ø¬Ù…ÙŠØ¹ Ø¹Ù†Ø§ØµØ± Ø§Ù„Ù…ØµÙÙˆÙØ© ÙÙŠ Ø³Ù„Ø³Ù„Ø© Ù†ØµÙŠØ© . Ø¨Ø¥Ù…ÙƒØ§Ù†Ùƒ Ø¯Ù…Ø¬Ù‡Ù… Ù…Ø¹ Ø¨Ø¹Ø¶ ÙƒÙ…Ø§Ù‡Ù… Ø£Ùˆ Ù…Ø¹ ÙØ§ØµÙ„ Ø¨ÙŠÙ†Ù‡Ù…, <code>elements.join(' -\n          ')</code> ØªØ¹Ø·ÙŠÙƒ <code>foo-bar</code>",
                example: "console.log(arr.join());",
                output: '"5,1,8"',
              },
              {
                name: "toString",
                shortDesc:
                  "ØªØ¹ÙŠØ¯ Ø³Ù„Ø³Ù„Ø© Ù†ØµÙŠØ© ØªÙ…Ø«Ù„ Ù‡Ø°Ù‡ Ø§Ù„Ù…ØµÙÙˆÙØ©.",
                desc: "ØªØ¹ÙŠØ¯ Ø³Ù„Ø³Ù„Ø© Ù†ØµÙŠØ© ØªÙ…Ø«Ù„ Ø§Ù„Ù…ØµÙÙˆÙØ© ÙˆØ¹Ù†Ø§ØµØ±Ù‡Ø§.",
                example: "console.log(arr.toString());",
                output: '"5,1,8"',
              },
              {
                name: "toLocaleString",
                shortDesc:
                  "ØªØ¹ÙŠØ¯ Ø³Ù„Ø³Ù„Ø© Ù†ØµÙŠØ© (Ù…Ø­Ù„ÙŠØ©- ØªÙ…Ø«Ù„ Ø§Ù„Ø¨Ù„Ø¯ Ø§Ù„Ø­Ø§Ù„ÙŠ ) ØªÙ…Ø«Ù„ Ø§Ù„Ù…ØµÙÙˆÙØ©.",
                desc: "Ù‡Ø°Ù‡ Ø§Ù„Ø¯Ø§Ù„Ø© ÙÙŠÙ‡Ø§ Ù‚Ù„ÙŠÙ„ Ù…Ù† Ø§Ù„Ø¬Ù†ÙˆÙ†. ØªØ¹ÙŠØ¯ Ø³Ù„Ø³Ù„Ø© Ù†ØµÙŠØ© (Ù…Ø­Ù„ÙŠØ©- ØªÙ…Ø«Ù„ Ø§Ù„Ø¨Ù„Ø¯ Ø§Ù„Ø­Ø§Ù„ÙŠ ) ØªÙ…Ø«Ù„ Ø§Ù„Ù…ØµÙÙˆÙØ© ÙˆØ¹Ù†Ø§ØµØ±Ù‡Ø§. Ù‡Ø°Ù‡ Ø§Ù„Ø¯Ø§Ù„Ø© Ù…ÙÙŠØ¯Ø© Ù„Ù„ØªÙˆØ§Ø±ÙŠØ® ÙˆØ§Ù„Ø¹Ù…Ù„Ø§Øª ÙˆÙƒØ°Ù„Ùƒ Ø¨Ø¹Ø¶ Ø§Ù„Ø§Ø®ØªØµØ§Ø±Ø§Øª Ø§Ù„Ù…Ø­Ù„ÙŠØ© Ø§Ù„ØºØ±ÙŠØ¨Ø©, Ù„Ø°Ù„Ùƒ ÙŠØ³ØªØ­Ø³Ù† Ù…Ø±Ø§Ø¬Ø¹Ø© Ø§Ù„ØªÙˆØ«ÙŠÙ‚ Ø§Ù„Ø®Ø§Øµ Ø¨Ù‡Ø§",
                example:
                  "let date = [new Date()];<br>\n        arr.toLocaleString();<br>\n        date.toLocaleString();<br>\n        console.log(arr, date);",
                output: '"5,1,8 12/26/2017, 6:54:49 Ù…"',
              },
            ],
            ordering: [
              {
                name: "reverse",
                shortDesc: "ØªØ¹ÙƒØ³ ØªØ±ØªÙŠØ¨ Ø¹Ù†Ø§ØµØ± Ø§Ù„Ù…ØµÙÙˆÙØ©",
                desc: "ØªØ¹ÙƒØ³ ØªØ±ØªÙŠØ¨ Ø¹Ù†Ø§ØµØ± Ø§Ù„Ù…ØµÙÙˆÙØ© Ø¨Ù…ÙƒØ§Ù†Ù‡Ù… - Ø¨Ø­ÙŠØ« Ø§Ù„Ø£ÙˆÙ„ ÙŠØµØ¨Ø­ Ø§Ù„Ø£Ø®ÙŠØ± ÙˆØ§Ù„Ø£Ø®ÙŠØ± ÙŠØµØ¨Ø­ Ø§Ù„Ø£ÙˆÙ„.",
                example: "arr.reverse();<br>\n        console.log(arr);",
                output: "[8, 1, 5]",
              },
              {
                name: "sort",
                shortDesc: "ØªØ±ØªÙŠØ¨ Ø¹Ù†Ø§ØµØ± Ø§Ù„Ù…ØµÙÙˆÙØ©",
                desc: "ØªØ±ØªØ¨ Ø¹Ù†Ø§ØµØ± Ø§Ù„Ù…ØµÙÙˆÙØ© Ø§Ù„Ù…Ø­Ø¯Ø¯Ø© ÙˆØªØ±Ø¬Ø¹ Ù…ØµÙÙˆÙØ© Ù…Ø±ØªØ¨Ø©.",
                example: "arr.sort();<br>\n        console.log(arr);",
                output: "[1, 5, 8]",
              },
            ],
            other: [
              {
                name: "length",
                shortDesc: "Ù…Ø¹Ø±ÙØ© Ø·ÙˆÙ„ Ø§Ù„Ù…ØµÙÙˆÙØ©",
                desc: "ØªØ¹ÙŠØ¯ Ø¹Ø¯Ø¯ Ø§Ù„Ø¹Ù†Ø§ØµØ± ÙÙŠ Ù‡Ø°Ù‡ Ø§Ù„Ù…ØµÙÙˆÙØ©.",
                example: "console.log(arr.length);",
                output: "3",
              },
              {
                name: "fill",
                shortDesc:
                  "ØªØ¹Ø¨ÙŠØ© Ø¬Ù…ÙŠØ¹ Ø¹Ù†Ø§ØµØ± Ø§Ù„Ù…ØµÙÙˆÙØ© Ø¨Ù‚ÙŠÙ…Ø© Ø«Ø§Ø¨ØªØ©",
                desc: "ØªÙ‚ÙˆÙ… Ø¨ØªØ¹Ø¨Ø¦Ø© Ø¬Ù…ÙŠØ¹ Ø¹Ù†Ø§ØµØ± Ø§Ù„Ù…ØµÙÙˆÙØ© Ø§Ø¨ØªØ¯Ø§Ø¡Ù‹ Ù…Ù† Ø¹Ù†ÙˆØ§Ù† Ø§Ù„Ø¨Ø¯Ø§ÙŠØ© Ø¥Ù„Ù‰ Ø¹Ù†ÙˆØ§Ù† Ø§Ù„Ù†Ù‡Ø§ÙŠØ© Ø¨Ù‚ÙŠÙ… .",
                example: "arr.fill(2);<br>\n        console.log(arr);",
                output: "[2, 2, 2]",
              },
              {
                name: "copyWithin",
                shortDesc:
                  "Ù†Ø³Ø® Ø³Ù„Ø³Ù„Ø© Ù…Ù† Ø¹Ù†Ø§ØµØ± Ø§Ù„Ù…ØµÙÙˆÙØ© Ø¶Ù…Ù† Ø§Ù„Ù…ØµÙÙˆÙØ©.",
                desc: "ØªÙ‚ÙˆÙ… Ø¨Ù†Ø³Ø® Ø³Ù„Ø³Ù„Ø© Ù…Ù† Ø¹Ù†Ø§ØµØ± Ø§Ù„Ù…ØµÙˆÙØ© Ø¶Ù…Ù† Ø§Ù„Ù…ØµÙÙˆÙØ© Ù†ÙØ³Ù‡Ø§ . Ø¨Ø¥Ù…ÙƒØ§Ù†Ùƒ ØªØ­Ø¯ÙŠØ¯ Ø§Ù„Ø¹Ù†ØµØ± Ø§Ù„Ø£Ø®ÙŠØ± ÙÙ‚Ø· ( Ø­ÙŠØ« Ø§Ù„Ø¹Ù†ØµØ± Ø§Ù„Ø£ÙˆÙ„ Ø³ÙŠÙƒÙˆÙ† Ø§Ù„Ø§ÙØªØ±Ø§Ø¶ÙŠ ØµÙØ± ) Ø£Ùˆ Ø¨Ø¥Ù…ÙƒØ§Ù†Ùƒ ØªØ­Ø¯ÙŠØ¯ Ø§Ù„Ø¹Ù†ØµØ± Ø§Ù„Ø£ÙˆÙ„ ÙˆØ§Ù„Ø£Ã—ÙŠØ± Ù…ÙØµÙˆÙ„ÙŠÙ† Ø¨ÙØ§ØµÙ„Ø© , comma-separated.",
                example: "arr.copyWithin(1);<br>\n        console.log(arr);",
                output: "[5, 5, 1]",
              },
            ],
            iterate: [
              {
                name: "forEach",
                shortDesc:
                  "ØªÙ†ÙÙŠØ° Ø¯Ø§Ù„Ø© Ø³Ø£Ù‚ÙˆÙ… Ø¨Ø¥Ù†Ø´Ø§Ø¡ (for each) Ù„Ù„Ø¹Ù†ØµØ±",
                desc: "Ø¯Ø§Ù„Ø© Ø§Ù„Ù€ forEach() ØªÙ‚ÙˆÙ… Ø¨ØªÙ†ÙÙŠØ° Ø¯Ø§Ù„Ø© Ù…Ø¹ÙŠÙ†Ø© Ù…Ø±Ø© ÙˆØ§Ø­Ø¯ Ù„ÙƒÙ„ Ù…Ù† Ø¹Ù†Ø§ØµØ± Ø§Ù„Ù…ØµÙÙˆÙØ©.",
                example:
                  "arr.forEach((element) => {<br>\n        <span>&nbsp;&nbsp;</span>console.log(element)<br>\n        });",
                output: "5<br>\n        1<br>\n        8",
              },
              {
                name: "map",
                shortDesc:
                  " ØªÙ‚ÙˆÙ… Ø¨Ø¥Ù†Ø´Ø§Ø¡ Ù…ØµÙÙˆÙØ© Ø¬Ø¯ÙŠØ¯Ø© Ù…Ù† ÙƒÙ„ Ø¹Ù†ØµØ± Ø¨Ø¥Ø³ØªØ®Ø¯Ø§Ù… Ø¯Ø§Ù„Ø© Ø£Ù‚ÙˆÙ… Ø¨Ø¥Ù†Ø´Ø§Ø¡Ù‡Ø§",
                desc: "ØªÙ‚ÙˆÙ… Ø¨Ø¥Ù†Ø´Ø§Ø¡ Ù…ØµÙÙˆÙØ© Ø¬Ø¯ÙŠØ¯Ø© Ø¨Ø¥Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„Ù†ØªÙŠØ¬Ø©  Ø§Ù„Ø±Ø§Ø¬Ø¹Ø© Ù…Ù† Ø§Ø³ØªØ¯Ø¹Ø§Ø¡ Ø¯Ø§Ù„Ø© Ù…Ø¹ÙŠÙ†Ø© Ø¹Ù„Ù‰ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø¹Ù†Ø§ØµØ± ÙÙŠ Ù‡Ø°Ù‡ Ø§Ù„Ù…ØµÙÙˆÙØ©.",
                example:
                  "let map = arr.map(x => x + 1);<br>\n        console.log(map);",
                output: "[6, 2, 9]",
              },
              {
                name: "entries",
                shortDesc: "ØªÙ†Ø´ Ø¹Ù†ØµØ± ØªÙƒØ±Ø§Ø±  (iterator object)",
                desc: "ØªØ¹ÙŠØ¯ Ø¹Ù†ØµØ± ØªÙƒØ±Ø§Ø± Ø¬Ø¯ÙŠØ¯ Ù„Ù„Ù…ØµÙÙˆÙØ© ÙˆØ§Ù„Ø°ÙŠ ÙŠØ­ØªÙˆÙŠ Ø¹Ù„Ù‰ Ø£Ø²ÙˆØ§Ø¬ Ø§Ù„Ù€ key/value Ù„ÙƒÙ„ Ø¹Ù†ÙˆØ§Ù† (index) ÙÙŠ Ù‡Ø°Ù‡ Ø§Ù„Ù…ØµÙÙˆÙØ©. ØªÙˆØ¬Ø¯ Ø§Ø³ØªØ®Ø¯Ø§Ù…Ø§Øª ÙƒØ«ÙŠØ±Ø© Ù„Ù„ØªÙƒØ±Ø§Ø±Ø§Øª (iterators), ÙˆÙƒØ°Ù„Ùƒ Ø¯ÙˆØ§Ù„ Ø£Ø®Ø±Ù‰ ØªØ³ØªØ®Ø¯Ù… Ù…Ø¹Ù‡Ø§, Ù…Ø«Ù„ <code>values</code> Ùˆ <code>keys</code>",
                example:
                  "let iterator = arr.entries();<br>\n        console.log(iterator.next().value);",
                output:
                  '[0, 5]<br>\n        <span class="comment">// the 0 is the index,</span><br>\n        <span class="comment">// the 5 is the first number</span>',
              },
            ],
            find: {
              single: [
                {
                  name: "includes",
                  shortDesc:
                    "ØªØ¹ÙŠØ¯ Ø¥Ø°Ø§ ÙƒØ§Ù† Ø¹Ù†ØµØ± Ù…Ø¹ÙŠÙ† Ù…ÙˆØ¬ÙˆØ¯",
                  desc: "ØªÙ‚Ø±Ø± ÙÙŠÙ…Ø§ Ø¥Ø°Ø§ ÙƒØ§Ù†Øª Ù…ØµÙÙˆÙØ© Ù…Ø¹ÙŠÙ†Ø© ØªØ­ØªÙˆÙŠ Ø¹Ù„Ù‰ Ø¹Ù†ØµØ± Ù…Ø¹ÙŠÙ† ØŒ ÙˆØªØ¹ÙŠØ¯ true Ø£Ùˆ false Ø¨Ù…Ø§ ÙŠÙ†Ø§Ø³Ø¨ Ø§Ù„Ø­Ø§Ù„Ø©.",
                  example: "console.log(arr.includes(1));",
                  output: "true",
                },
                {
                  name: "indexOf",
                  shortDesc: "Ø§Ù„Ø¹Ù†ÙˆØ§Ù† Ø§Ù„Ø£ÙˆÙ„ Ù„Ø¹Ù†ØµØ± Ù…Ø¹ÙŠÙ†",
                  desc: "ØªØ¹ÙŠØ¯ Ø£ÙˆÙ„ Ø¹Ù†ÙˆØ§Ù† Ø­ÙŠØ« ÙŠÙ…ÙƒÙ† Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„Ù‰ Ø¹Ù†ØµØ± Ù…Ø¹ÙŠÙ† ÙÙŠ Ù…ØµÙÙˆÙØ©, Ø£Ùˆ -1 Ø¥Ø°Ø§ Ù„Ù… ÙŠØªÙ… Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„ÙŠÙ‡.",
                  example: "console.log(arr.indexOf(5));",
                  output: "0",
                },
                {
                  name: "lastIndexOf",
                  shortDesc: "Ø§Ù„Ø¹Ù†ÙˆØ§Ù† Ø§Ù„Ø£Ø®ÙŠØ± Ù„Ø¹Ù†ØµØ± Ù…Ø¹ÙŠÙ†",
                  desc: "ØªØ¹ÙŠØ¯ Ø¢Ø®Ø± ( Ø£ÙƒØ¨Ø± ) Ø¹Ù†ÙˆØ§Ù† Ù„Ø¹Ù†ØµØ± Ù…Ø¹ÙŠÙ† Ø¶Ù…Ù† Ù…ØµÙÙˆÙØ© Ù…Ø³Ø§ÙˆÙŠ Ù„Ù„Ù‚ÙŠÙ…Ø© Ø§Ù„Ù…Ø­Ø¯Ø¯Ø© , Ø£Ùˆ -1 Ø¥Ø°Ø§ ÙƒØ§Ù† ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯.",
                  example: "console.log(arr.lastIndexOf(5));",
                  output: "0",
                },
                {
                  name: "find",
                  shortDesc: "Ø£ÙˆÙ„ Ø¹Ù†ØµØ± ÙŠØ·Ø§Ø¨Ù‚ Ø´Ø±Ø· Ù…Ø¹ÙŠÙ†",
                  desc: "ØªØ¹ÙŠØ¯ Ø§Ù„Ù‚ÙŠÙ…Ø© Ø§Ù„ØªÙŠ ØªÙ… Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„ÙŠÙ‡Ø§ ÙÙŠ Ø§Ù„Ù…ØµÙˆÙØ© ØŒ Ø¥Ø°Ø§ ÙˆØ¬Ø¯ Ø¹Ù†ØµØ± ÙŠØ·Ø§Ø¨Ù‚  Ù„Ø¯Ø§Ù„Ø© Ø§Ù„ÙØ­Øµ Ø§Ù„Ù…Ø¹ÙŠÙ†Ø© Ø£Ùˆ ØºÙŠØ± Ù…Ø¹Ø±Ù ( undefined ) Ø¥Ø°Ø§ Ù„Ù… ÙŠØªÙ… Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„ÙŠÙ‡. Ù…Ø´Ø§Ø¨Ù‡Ø© Ù„Ù€ <code>findIndex()</code>, ÙˆÙ„ÙƒÙ†Ù‡Ø§ ØªØ¹ÙŠØ¯ Ø§Ù„Ø¹Ù†ØµØ± Ø¹ÙˆØ¶Ø§ Ø¹Ù† Ø§Ù„Ø¹Ù†ÙˆØ§Ù† (index).",
                  example:
                    "let isTiny = (el) => el < 2;<br>\n          console.log(arr.find(isTiny));",
                  output: "1",
                },
                {
                  name: "findIndex",
                  shortDesc:
                    "Ø£ÙˆÙ„ Ø¹Ù†ÙˆØ§Ù† (index) Ù„Ù„Ø¹ØµØ± Ø§Ù„Ø°ÙŠ ÙŠØ·Ø§Ø¨Ù‚ Ø´Ø±Ø· Ù…Ø¹ÙŠÙ†",
                  desc: "ØªØ¹ÙŠØ¯ Ø£ÙˆÙ„ Ø¹Ù†ÙˆØ§Ù† (index) Ù„Ø¹Ù†ØµØ± Ù…Ø¹ÙŠÙ† ÙÙŠ Ù…ØµÙÙˆÙØ© Ø¥Ø°Ø§ Ø·Ø§Ø¨Ù‚ Ø¯Ø§Ù„Ø© Ø§Ù„ÙØ­Øµ Ø§Ù„Ù…Ø¹ÙŠÙ†Ø© . Ø£Ùˆ  -1 Ø¥Ø°Ø§ Ù„Ù… ÙŠØ·Ø§Ø¨Ù‚. Ù…Ù…Ø§Ø«Ù„Ø© Ù„Ù€ <code>find()</code>, ÙˆÙ„ÙƒÙ†Ù‡Ø§ ØªØ¹ÙŠØ¯ Ø§Ù„Ø¹Ù†ÙˆØ§Ù† (index) Ø¹ÙˆØ¶Ø§ Ø¹Ù† Ø§Ù„Ø¹Ù†ØµØ±.",
                  example:
                    "let isBig = (el) => el > 6;<br>\n          console.log(arr.findIndex(isBig));",
                  output: "2",
                },
                {
                  name: "reduce",
                  shortDesc:
                    "Ù‚ÙŠÙ…Ø© Ø¨ÙˆØ§Ø³Ø·Ø© ØªØµØºÙŠØ± Ø§Ù„Ù…ØµÙÙˆÙØ© ØŒ Ù…Ù† Ø§Ù„Ø¨Ø¯Ø§ÙŠØ© Ù„Ù„Ù†Ù‡Ø§ÙŠØ©",
                  desc: "Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.",
                  example:
                    "let reducer = (a, b) => a + b;<br>\n          <span>&nbsp;&nbsp;</span>console.log(arr.reduce(reducer));",
                  output: "14",
                },
                {
                  name: "reduceRight",
                  shortDesc:
                    "Ù‚ÙŠÙ…Ø© Ø¨ÙˆØ§Ø³Ø·Ø© ØªØµØºÙŠØ± Ø§Ù„Ù…ØµÙÙˆÙØ© ØŒ Ù…Ù† Ø§Ù„Ù†Ù‡Ø§ÙŠØ© Ø¥Ù„Ù‰ Ø§Ù„Ø¨Ø¯Ø§ÙŠØ©",
                  desc: "Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.",
                  example:
                    "[arr, [0, 1]].reduceRight((a, b) => {<br>\n          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>\n          }, [])",
                  output: "[0, 1, 5, 1, 8]",
                },
              ],
              many: [
                {
                  name: "filter",
                  shortDesc:
                    "Ù‚ÙŠÙ… Ø¨Ù†Ø§Ø¡ Ø¹Ù„Ù‰ Ø´Ø±Ø· Ø£Ù‚ÙˆÙ… Ø¨ØªØ­Ø¯ÙŠØ¯Ù‡",
                  desc: "ØªØ¹ÙŠØ¯ Ù…ØµÙÙˆÙØ© Ø¬Ø¯ÙŠØ¯ ØªØ­ØªÙˆÙ‰ Ø¹Ù„Ù‰ Ø¬Ù…ÙŠØ¹ Ø¹Ù†Ø§ØµØ± Ù‡Ø°Ù‡ Ø§Ù„Ù…ØµÙÙˆÙØ© Ø§Ù„ØªÙŠ Ù†ØªÙŠØ¬Ø© Ø¯Ø§Ù„Ø© Ø§Ù„ØªØ±Ø´ÙŠØ­ true.",
                  example:
                    "let filtered = arr.filter(el => el > 4);<br>\n          console.log(filtered)",
                  output: "[5, 8]",
                },
                {
                  name: "every",
                  shortDesc:
                    "ÙÙŠÙ…Ø§ Ø¥Ø°Ø§  ÙƒØ§Ù†Øª Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø¹Ù†Ø§ØµØ± ØªØ·Ø§Ø¨Ù‚ Ø´Ø±Ø· Ù…Ø¹ÙŠÙ† Ø£Ùˆ Ù„Ø§",
                  desc: "ØªØ¹ÙŠØ¯ (true) Ø¥Ø°Ø§ ÙƒØ§Ù†Øª Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù‚ÙŠÙ… ØªØ·Ø§Ø¨Ù‚ Ø¯Ø§Ù„Ø© Ø§Ù„ÙØ­Øµ.",
                  example:
                    "let isSmall = (el) => el < 10;<br>\n          console.log(arr.every(isSmall));",
                  output: "true",
                },
                {
                  name: "some",
                  shortDesc:
                    "ÙÙŠÙ…Ø§ Ø¥Ø°Ø§ Ø·Ø§Ø¨Ù‚ Ø¹Ù†ØµØ± ÙˆØ§Ø­Ø¯ Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„ Ø´Ø±Ø· Ù…Ø¹ÙŠÙ† Ø£Ùˆ Ù„Ø§",
                  desc: "ØªØ¹ÙŠØ¯ (true) Ø¥Ø°Ø§ Ø·Ø§Ø¨Ù‚ Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„ Ø¹Ù†ØµØ± ÙˆØ§Ø­Ø¯ Ù…Ù† Ù‡Ø°Ù‡ Ø§Ù„Ù…ØµÙÙˆÙØ© Ù„Ø¯Ø§Ù„Ø© Ø§Ù„ÙØ­Øµ.",
                  example:
                    "let biggerThan4 = (el) => el > 4;<br>\n          console.log(arr.some(biggerThan4));",
                  output: "true",
                },
              ],
            },
          },
        });
    },
    "73lx": function (e, a) {},
    "7Duw": function (e, a) {
      e.exports = { short: "pt", long: "Portuguese", createdBy: "welll" };
    },
    "7OGC": function (e, a) {},
    "7Zqp": function (e, a) {
      e.exports = {
        short: "ru",
        long: "Russian",
        createdBy: "TheElderMindseeker",
      };
    },
    BKTo: function (e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = {
          state: {
            selectedMethod: "",
            adding: [
              {
                name: "splice",
                shortDesc: "satu atau lebih elemen ke sebuah array",
                desc: "Menambah dan/atau menghilangkan satu atau lebih elemen dari sebuah array.",
                example:
                  "arr.splice(2, 0, 'tacos');<br>\n        console.log(arr);",
                output: "[5, 1, 'tacos', 8]",
              },
              {
                name: "push",
                shortDesc:
                  "satu atau lebih elemen pada posisi akhir dari sebuah array",
                desc: "Menambah satu atau lebih elemen pada posisi akhir dari sebuah array dan mengembalikan panjang array yang baru.",
                example: "arr.push(2);<br>\n        console.log(arr);",
                output: "[5, 1, 8, 2]",
              },
              {
                name: "unshift",
                shortDesc:
                  "satu atau lebih elemen pada posisi awal dari sebuah array",
                desc: "Menambah satu atau lebih elemen pada posisi awal dari sebuah array dan mengembalikan panjang array yang baru.",
                example: "arr.unshift(2, 7);<br>\n        console.log(arr);",
                output: "[2, 7, 5, 1, 8]",
              },
              {
                name: "concat",
                shortDesc:
                  "array yang dipanggil ke satu atau lebih array dan/atau nilai lain",
                desc: "Mengembalikan sebuah array yang terdiri dari array yang dipanggil dan digabung dengan satu atau lebih array dan/atau nilai lain.",
                example:
                  "let arr2 = ['a', 'b', 'c'];<br>\n        let arr3 = arr.concat(arr2);<br>\n        console.log(arr3);",
                output: "[5, 1, 8, 'a', 'b', 'c']",
              },
            ],
            removing: [
              {
                name: "splice",
                shortDesc: "satu atau lebih elemen dari sebuah array",
                desc: "Menambah dan/atau menghapus satu atau lebih elemen dari sebuah array.",
                example: "arr.splice(2, 1);<br>\n        console.log(arr);",
                output: "[5, 1]",
              },
              {
                name: "pop",
                shortDesc: "elemen terakhir dari array",
                desc: "Menghapus elemen terakhir dari sebuah array dan mengembalikan elemen tersebut.",
                example: "arr.pop();<br>\n        console.log(arr);",
                output: "[5, 1]",
              },
              {
                name: "shift",
                shortDesc: "elemen pertama dari array",
                desc: "Menghapus elemen pertama dari sebuah array dan mengembalikan elemen tersebut.",
                example: "arr.shift();<br>\n        console.log(arr);",
                output: "[1, 8]",
              },
              {
                name: "slice",
                shortDesc:
                  "satu atau lebih elemen secara berurutan untuk digunakan, tanpa memodifikasi array asli",
                desc: "Metode <code>slice()</code> mengembalikan shallow copy dari suatu bagian array ke sebuah objek array baru. Anda dapat memberi spesifikasi elemen akhirnya saja (di mana posisi awal akan dimulai dari nol) atau kedua posisi awal dan akhir, dengan koma sebagai pemisahnya. Array yang asli tidak akan dimodifikasi.",
                example:
                  "let slicedArr = arr.slice(1);<br>\n        console.log(arr);<br>\n        console.log(slicedArr);",
                output: "[5, 1, 8]<br>\n        [1, 8]",
              },
            ],
            string: [
              {
                name: "join",
                shortDesc:
                  "menggabungkan semua elemen dari sebuah array menjadi sebuah string",
                desc: "menggabungkan semua elemen dari sebuah array menjadi sebuah string. Anda juga dapat menggabungkannya dengan menggunakan sebuah pemisah di antara elemen-elemen tersebut. Sebagai contoh, <code>elements.join(' -\n          ')</code> akan menghasilkan <code>foo-bar</code>",
                example: "console.log(arr.join());",
                output: '"5,1,8"',
              },
              {
                name: "toString",
                shortDesc:
                  "mengembalikan sebuah string yang merepresentasikan array",
                desc: "Mengembalikan sebuah string yang merepresentasikan array dan elemen-elemen array tersebut.",
                example: "console.log(arr.toString());",
                output: '"5,1,8"',
              },
              {
                name: "toLocaleString",
                shortDesc:
                  "mengembalikan sebuah string yang telah dilokalisasi yang merepresentasikan array",
                desc: "Mengembalikan sebuah string yang telah dilokalisasi yang merepresentasikan array beserta elemen-elemennya. Metode ini berguna untuk tanggal-tanggal dan mata uang, serta memiliki abstraksi native yang cukup aneh, sehingga sebaiknya Anda membaca dokumentasinya ketika menggunakannya.",
                example:
                  "let date = [new Date()];<br>\n        const arrString = arr.toLocaleString();<br>\n        const dateString = date.toLocaleString();<br>\n        console.log(arrString, dateString);",
                output: '"5,1,8 12/26/2017, 6:54:49 PM"',
              },
            ],
            ordering: [
              {
                name: "reverse",
                shortDesc: "membalikkan urutan dari array",
                desc: "Mengembalikan urutan dari elemen-elemen yang ada pada array di tempat â€” elemen pertama menjadi yang terakhir, dan elemen yang terakhir menjadi yang pertama.",
                example: "arr.reverse();<br>\n        console.log(arr);",
                output: "[8, 1, 5]",
              },
              {
                name: "sort",
                shortDesc: "mengurutkan item-item pada array",
                desc: "Mengurutkan elemen-elemen dari sebuah array di tempat dan mengembalikan array tersebut.",
                example: "arr.sort();<br>\n        console.log(arr);",
                output: "[1, 5, 8]",
              },
            ],
            other: [
              {
                name: "length",
                shortDesc: "menemukan panjang dari array",
                desc: "Mengembalikan jumlah elemen pada array.",
                example: "console.log(arr.length);",
                output: "3",
              },
              {
                name: "fill",
                shortDesc:
                  "mengisi semua elemen dari array dengan sebuah nilai statis",
                desc: "Mengisi semua elemen dari sebuah array mulai dari indeks awal sampai indeks terakhir dengan sebuah nilai statis.",
                example: "arr.fill(2);<br>\n        console.log(arr);",
                output: "[2, 2, 2]",
              },
              {
                name: "copyWithin",
                shortDesc:
                  "menyalin sebuah urutan dari elemen-elemen array di dalam array",
                desc: "Menyalin sebuah urutan dari elemen-elemen array di dalam array. Anda dapat memberi spesifikasi elemen akhirnya saja (di mana posisi awal akan dimulai dari nol) atau kedua posisi awal dan akhir, dengan koma sebagai pemisahnya.",
                example: "arr.copyWithin(1);<br>\n        console.log(arr);",
                output: "[5, 5, 1]",
              },
            ],
            iterate: [
              {
                name: "forEach",
                shortDesc:
                  "mengeksekusi sebuah fungsi yang saya buat untuk masing-masing elemen",
                desc: "Metode forEach() mengeksekusi fungsi yang diberikan, satu kali untuk masing-masing elemen pada array.",
                example:
                  "arr.forEach((element) => {<br>\n        <span>&nbsp;&nbsp;</span>console.log(element)<br>\n        });",
                output: "5<br>\n        1<br>\n        8",
              },
              {
                name: "map",
                shortDesc:
                  "membuat array baru dari masing-masing elemen dengan menggunakan fungsi yang saya buat",
                desc: "Membuat sebuah array baru. Array baru ini berisi hasil-hasil pemanggilan fungsi yang diberikan pada setiap elemen di dalam array.",
                example:
                  "let map = arr.map(x => x + 1);<br>\n        console.log(map);",
                output: "[6, 2, 9]",
              },
              {
                name: "entries",
                shortDesc: "membuat sebuah objek iterator",
                desc: "Mengembalikan sebuah objek Array Iterator baru yang berisi pasangan-pasangan key/value untuk masing-masing indeks di dalam array. Ada banyak kegunaan iterator beserta metode-metode yang berhubungan dengan iterator, seperti <code>values</code> dan <code>keys</code>",
                example:
                  "let iterator = arr.entries();<br>\n        console.log(iterator.next().value);",
                output:
                  '[0, 5]<br>\n        <span class="comment">// the 0 is the index,</span><br>\n        <span class="comment">// the 5 is the first number</span>',
              },
            ],
            find: {
              single: [
                {
                  name: "includes",
                  shortDesc: "apakah terdapat suatu elemen tertentu",
                  desc: "Menentukan apakah sebuah array berisi suatu elemen tertentu. Apabila ada, ia akan mengembalikan true. Sebaliknya, ia akan mengembalikan false.",
                  example: "console.log(arr.includes(1));",
                  output: "true",
                },
                {
                  name: "indexOf",
                  shortDesc: "indeks pertama dari sebuah item tertentu",
                  desc: "Mengembalikan indeks pertama di mana suatu elemen yang diberikan dapat ditemukan di dalam array. Ia akan mengembalikan -1 apabila elemen tersebut tidak ada di dalam array.",
                  example: "console.log(arr.indexOf(5));",
                  output: "0",
                },
                {
                  name: "lastIndexOf",
                  shortDesc: "indeks terakhir dari sebuah item tertentu",
                  desc: "Mengembalikan indeks terakhir (terbesar) dari sebuah elemen di dalam array yang sama dengan suatu nilai yang telah ditentukan. Ia akan mengembalikan -1 apabila tidak ada elemen dengan nilai tersebut yang ditemukan.",
                  example: "console.log(arr.lastIndexOf(5));",
                  output: "0",
                },
                {
                  name: "find",
                  shortDesc: "elemen pertama yang memenuhi sebuah kondisi",
                  desc: "Mengembalikan nilai yang ditemukan pada array, apabila elemen tersebut memenuhi fungsi testing yang diberikan atau undefined apabila tidak ditemukan. Serupa dengan <code>findIndex()</code>, namun metode ini mengembalikan item.",
                  example:
                    "let isTiny = (el) => el < 2;<br>\n          console.log(arr.find(isTiny));",
                  output: "1",
                },
                {
                  name: "findIndex",
                  shortDesc:
                    "indeks pertama dari sebuah item yang memenuhi sebuah kondisi",
                  desc: "Mengembalikan indeks dari elemen pertama pada array yang memenuhi fungsi testing yang diberikan. Apabila tidak ada elemen yang memenuhi kondisi tersebut, maka metode ini akan mengembalikan nilai -1. Serupa dengan <code>find()</code>, namun metode ini mengembalikan indeks dari item.",
                  example:
                    "let isBig = (el) => el > 6;<br>\n          console.log(arr.findIndex(isBig));",
                  output: "2",
                },
                {
                  name: "reduce",
                  shortDesc:
                    "sebuah nilai dengan cara mereduksi array yang dipanggil, dari awal sampai akhir",
                  desc: "Mengaplikasikan sebuah fungsi terhadap sebuah akumulator dan masing-masing nilai dari array (dari kiri ke kanan) untuk mereduksinya menjadi sebuah nilai.",
                  example:
                    "let reducer = (a, b) => a + b;<br>\n          <span>&nbsp;&nbsp;</span>console.log(arr.reduce(reducer));",
                  output: "14",
                },
                {
                  name: "reduceRight",
                  shortDesc:
                    "sebuah nilai dengan cara mereduksi array yang dipanggil, dari akhir sampai awal",
                  desc: "Mengaplikasikan sebuah fungsi terhadap sebuah akumulator dan masing-masing nilai dari array (dari kanan ke kiri) untuk mereduksinya menjadi sebuah nilai.",
                  example:
                    "[arr, [0, 1]].reduceRight((a, b) => {<br>\n          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>\n          }, [])",
                  output: "[0, 1, 5, 1, 8]",
                },
              ],
              many: [
                {
                  name: "filter",
                  shortDesc:
                    "satu atau lebih nilai berdasarkan kondisi yang saya buat",
                  desc: "Membuat sebuah array baru, di mana array baru tersebut terdiri dari seluruh elemen pada array yang memenuhi kondisi yang diberikan.",
                  example:
                    "let filtered = arr.filter(el => el > 4);<br>\n          console.log(filtered)",
                  output: "[5, 8]",
                },
                {
                  name: "every",
                  shortDesc:
                    "apakah semua item memenuhi suatu kondisi atau tidak",
                  desc: "Mengembalikan true apabila semua elemen pada array memenuhi fungsi testing yang diberikan.",
                  example:
                    "let isSmall = (el) => el < 10;<br>\n          console.log(arr.every(isSmall));",
                  output: "true",
                },
                {
                  name: "some",
                  shortDesc:
                    "apakah setidaknya sebuah item memenuhi sebuah kondisi",
                  desc: "Mengembalikan true apabila setidaknya sebuah elemen pada array memenuhi fungsi testing yang diberikan.",
                  example:
                    "let biggerThan4 = (el) => el > 4;<br>\n          console.log(arr.some(biggerThan4));",
                  output: "true",
                },
              ],
            },
          },
        });
    },
    BYe3: function (e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = {
          state: {
            selectedMethod: "",
            adding: [
              {
                name: "splice",
                shortDesc: "elemento(s) no array",
                desc: "Adiciona e/ou remove elementos do array.",
                example:
                  "arr.splice(2, 0, 'tacos');<br>\n        console.log(arr);",
                output: "[5, 1, 'tacos', 8]",
              },
              {
                name: "push",
                shortDesc: "elementos no final do array",
                desc: "Adiciona um ou mais elementos no final do array e retorna o novo tamanho do array.",
                example: "arr.push(2);<br>\n        console.log(arr);",
                output: "[5, 1, 8, 2]",
              },
              {
                name: "unshift",
                shortDesc: "elementos no inÃ­cio do array",
                desc: "Adiciona um ou mais elementos no inÃ­cio do array e retorna o novo tamanho do array.",
                example: "arr.unshift(2, 7);<br>\n        console.log(arr);",
                output: "[2, 7, 5, 1, 8]",
              },
              {
                name: "concat",
                shortDesc: "este array a outro(s) array(s) e/ou valor(es)",
                desc: "Retorna um novo array incluindo este array concatenado de outro(s) arrays e/ou valor(es).",
                example:
                  "let arr2 = ['a', 'b', 'c'];<br>\n        let arr3 = arr.concat(arr2);<br>\n        console.log(arr3);",
                output: "[5, 1, 8, 'a', 'b', 'c']",
              },
            ],
            removing: [
              {
                name: "splice",
                shortDesc: "elemento(s) no array",
                desc: "Adiciona e/ou remove elementos do array.",
                example: "arr.splice(2, 1);<br>\n        console.log(arr);",
                output: "[5, 1]",
              },
              {
                name: "pop",
                shortDesc: "o Ãºltimo elemento do array",
                desc: "Remove o Ãºltimo elemento do array e retorna o elemento.",
                example: "arr.pop();<br>\n        console.log(arr);",
                output: "[5, 1]",
              },
              {
                name: "shift",
                shortDesc: "o primeiro elemento do array",
                desc: "Remove o primeiro elemento do array e retorna o elemento.",
                example: "arr.shift();<br>\n        console.log(arr);",
                output: "[1, 8]",
              },
              {
                name: "slice",
                shortDesc:
                  "um ou mais elementos, mantendo o array original sem alteraÃ§Ãµes",
                desc: "O mÃ©todo <code>slice()</code> retorna uma cÃ³pia rasa de parte do array em um novo objeto array. VocÃª pode especificar apenas o Ã­ndice final (deixando o Ã­ndice inicial assumir o valor padrÃ£o zero), ou ambos, o Ã­ndice inicial e o Ã­ndice final separados por vÃ­rgula. O array original nÃ£o serÃ¡ modificado.",
                example:
                  "let slicedArr = arr.slice(1);<br>\n        console.log(arr);<br>\n        console.log(slicedArr);",
                output: "[5, 1, 8]<br>\n        [1, 8]",
              },
            ],
            string: [
              {
                name: "join",
                shortDesc: "unir todos os elementos do array em uma string.",
                desc: "Une todos elementos do array em uma string. VocÃª pode unir todos os itens sem delimitadores, ou com algum delimitador entre os elementos, <code>elements.join(' -\n          ')</code> retorna <code>foo-bar</code>",
                example: "console.log(arr.join());",
                output: '"5,1,8"',
              },
              {
                name: "toString",
                shortDesc: "retornar uma string representando o array.",
                desc: "Retorna uma string representando um array e seus elementos.",
                example: "console.log(arr.toString());",
                output: '"5,1,8"',
              },
              {
                name: "toLocaleString",
                shortDesc:
                  "retornar uma string localizada representando o array.",
                desc: "Retorna uma string localizada representando um array e seus elementos. Ã‰ muito Ãºtil para datas e moedas com caracterÃ­sticas especÃ­ficas do locale, recomendo consultar a documentaÃ§Ã£o quando utilizar esta funÃ§Ã£o.",
                example:
                  "let date = [new Date()];<br>\n        const arrString = arr.toLocaleString();<br>\n        const dateString = date.toLocaleString();<br>\n        console.log(arrString, dateString);",
                output: '"5,1,8 12/26/2017, 6:54:49 PM"',
              },
            ],
            ordering: [
              {
                name: "reverse",
                shortDesc: "inverter a ordem do array",
                desc: "Inverte a ordem dos elementos do array modificando o array â€” o primeiro elemento se torna o Ãºltimo, e o Ãºltimo se torna o primeiro.",
                example: "arr.reverse();<br>\n        console.log(arr);",
                output: "[8, 1, 5]",
              },
              {
                name: "sort",
                shortDesc: "ordenar os itens do array",
                desc: "Orderna os itens do array modificando o array e retorna o prÃ³prio array.",
                example: "arr.sort();<br>\n        console.log(arr);",
                output: "[1, 5, 8]",
              },
            ],
            other: [
              {
                name: "length",
                shortDesc: "retornar o comprimento do array",
                desc: "Retorna o nÃºmero de elementos existentes no array.",
                example: "console.log(arr.length);",
                output: "3",
              },
              {
                name: "fill",
                shortDesc:
                  "preencher todos os elementos do array com um valor estÃ¡tico",
                desc: "Preenche todos os elementos do array de um Ã­ndice inicial atÃ© um Ã­ndice final com valores estÃ¡ticos.",
                example: "arr.fill(2);<br>\n        console.log(arr);",
                output: "[2, 2, 2]",
              },
              {
                name: "copyWithin",
                shortDesc: "copiar parte do array dentro do mesmo array.",
                desc: "Copia parte do array para outra localizaÃ§Ã£o dentro deste mesmo array e o retorna, sem alterar seu tamanho. VocÃª pode especificar o Ã­ndice final (deixando o Ã­ndice inicial assumir o valor padrÃ£o zero), ou ambos, o Ã­ndice inicial e o Ã­ndice final separados por vÃ­rgula",
                example: "arr.copyWithin(1);<br>\n        console.log(arr);",
                output: "[5, 5, 1]",
              },
            ],
            iterate: [
              {
                name: "forEach",
                shortDesc: "executando uma funÃ§Ã£o sobre cada elemento",
                desc: "O mÃ©todo <code>forEach()</code> executa uma funÃ§Ã£o fornecida como parÃ¢metro para cada elemento do array.",
                example:
                  "arr.forEach((element) => {<br>\n        <span>&nbsp;&nbsp;</span>console.log(element)<br>\n        });",
                output: "5<br>\n        1<br>\n        8",
              },
              {
                name: "map",
                shortDesc:
                  "criando um novo array a partir de cada elemento transformado via uma funÃ§Ã£o",
                desc: "Cria um novo array com o resultado da chamada da funÃ§Ã£o para cada elemento no array.",
                example:
                  "let map = arr.map(x => x + 1);<br>\n        console.log(map);",
                output: "[6, 2, 9]",
              },
              {
                name: "entries",
                shortDesc: "criando um objeto iterator",
                desc: "Retorna um novo objeto do tipo Array Iterator que contÃ©m pares de chave/valor para cada Ã­ndice do array. HÃ¡ diversos usos para iterators, assim como hÃ¡ outros mÃ©todos anÃ¡logos, como o mÃ©todo <code>values</code> e o mÃ©todo <code>keys</code>",
                example:
                  "let iterator = arr.entries();<br>\n        console.log(iterator.next().value);",
                output:
                  '[0, 5]<br>\n        <span class="comment">// o 0 Ã© o Ã­ndice,</span><br>\n        <span class="comment">// o 5 Ã© o primeiro nÃºmero</span>',
              },
            ],
            find: {
              single: [
                {
                  name: "includes",
                  shortDesc: "se um dado elemento existe",
                  desc: "Verifica se um array contÃ©m um certo elemento, retornando true ou false.",
                  example: "console.log(arr.includes(1));",
                  output: "true",
                },
                {
                  name: "indexOf",
                  shortDesc: "o primeiro Ã­ndice de um elemento",
                  desc: "Retorna o primeiro Ã­ndice no qual um dado elemento pode ser encontrado no array, ou retorna -1 se nÃ£o existe o item.",
                  example: "console.log(arr.indexOf(5));",
                  output: "0",
                },
                {
                  name: "lastIndexOf",
                  shortDesc: "o Ãºltimo Ã­ndice de um elemento",
                  desc: "Retorna o Ãºltimo (maior) Ã­ndice no qual um dado elemento pode ser encontrado no array, ou retorna -1 se nÃ£o existe o item.",
                  example: "console.log(arr.lastIndexOf(5));",
                  output: "0",
                },
                {
                  name: "find",
                  shortDesc: "o primeiro elemento que satisfaz a condiÃ§Ã£o",
                  desc: "Retorna o valor econtrado no array, se um elemento no array satisfaz o teste da funÃ§Ã£o fornecida como parÃ¢metro, ou retorna undefined se nÃ£o encontrado. Similar ao mÃ©todo <code>findIndex()</code>, porÃ©m esta funÃ§Ã£o retorna o item ao invÃ©s do Ã­ndice.",
                  example:
                    "let isTiny = (el) => el < 2;<br>\n          console.log(arr.find(isTiny));",
                  output: "1",
                },
                {
                  name: "findIndex",
                  shortDesc:
                    "o primeiro Ã­ndice de um elemento que satisfaz a condiÃ§Ã£o",
                  desc: "Retorna o Ã­ndice do primeiro elemento no array que satisfaz o teste da funÃ§Ã£o fornecida como parÃ¢metro. SenÃ£o, o valor -1 Ã© retornado. Similar ao mÃ©todo <code>find()</code>, porÃ©m esta funÃ§Ã£o retorna o Ã­ndice ao invÃ©s do item.",
                  example:
                    "let isBig = (el) => el > 6;<br>\n          console.log(arr.findIndex(isBig));",
                  output: "2",
                },
                {
                  name: "reduce",
                  shortDesc:
                    "um valor atravÃ©s da reduÃ§Ã£o do array, inÃ­cio ao fim",
                  desc: "Aplica uma funÃ§Ã£o sobre um acumulador e cada elemento do array (da esquerda para direita) atÃ© reduzir a um Ãºnico valor.",
                  example:
                    "let reducer = (a, b) => a + b;<br>\n          <span>&nbsp;&nbsp;</span>console.log(arr.reduce(reducer));",
                  output: "14",
                },
                {
                  name: "reduceRight",
                  shortDesc:
                    "um valor atravÃ©s da reduÃ§Ã£o do array, fim ao Ã­nicio",
                  desc: "Aplica uma funÃ§Ã£o sobre um acumulador e cada elemento do array (da direta para esquerda) atÃ© reduzir a um Ãºnico valor.",
                  example:
                    "[arr, [0, 1]].reduceRight((a, b) => {<br>\n          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>\n          }, [])",
                  output: "[0, 1, 5, 1, 8]",
                },
              ],
              many: [
                {
                  name: "filter",
                  shortDesc: "um valor baseado numa condiÃ§Ã£o que eu criei",
                  desc: "Cria um novo array com todos os elementos do array que satisfazem o teste da funÃ§Ã£o fornecida como parÃ¢metro.",
                  example:
                    "let filtered = arr.filter(el => el > 4);<br>\n          console.log(filtered)",
                  output: "[5, 8]",
                },
                {
                  name: "every",
                  shortDesc: "se todos elementos satisfazem uma condiÃ§Ã£o",
                  desc: "Retorna true se todos elementos no array satisfazem o teste da funÃ§Ã£o fornecida como parÃ¢metro.",
                  example:
                    "let isSmall = (el) => el < 10;<br>\n          console.log(arr.every(isSmall));",
                  output: "true",
                },
                {
                  name: "some",
                  shortDesc:
                    "se pelo menos algum elemento satisfaz uma condiÃ§Ã£o",
                  desc: "Retorna true se pelo menos um elemento no array satisfaz o teste da funÃ§Ã£o fornecida como parÃ¢metro.",
                  example:
                    "let biggerThan4 = (el) => el > 4;<br>\n          console.log(arr.some(biggerThan4));",
                  output: "true",
                },
              ],
            },
          },
        });
    },
    C3Ql: function (e, a) {
      e.exports = { short: "ar", long: "Arabic", createdBy: "salahaa1" };
    },
    DERJ: function (e, a, n) {
      var r = {
        "./ar": "0iGN",
        "./ar/": "0iGN",
        "./ar/index": "0iGN",
        "./ar/index.js": "0iGN",
        "./ar/meta": "C3Ql",
        "./ar/meta.json": "C3Ql",
        "./bg": "WbDD",
        "./bg/": "WbDD",
        "./bg/index": "WbDD",
        "./bg/index.js": "WbDD",
        "./bg/meta": "WYaq",
        "./bg/meta.json": "WYaq",
        "./cz": "vsdj",
        "./cz/": "vsdj",
        "./cz/index": "vsdj",
        "./cz/index.js": "vsdj",
        "./cz/meta": "Kx46",
        "./cz/meta.json": "Kx46",
        "./de": "I9nf",
        "./de/": "I9nf",
        "./de/index": "I9nf",
        "./de/index.js": "I9nf",
        "./de/meta": "dLso",
        "./de/meta.json": "dLso",
        "./en": "cACW",
        "./en/": "cACW",
        "./en/index": "cACW",
        "./en/index.js": "cACW",
        "./en/meta": "mJJP",
        "./en/meta.json": "mJJP",
        "./es": "lx7K",
        "./es/": "lx7K",
        "./es/index": "lx7K",
        "./es/index.js": "lx7K",
        "./es/meta": "/TCW",
        "./es/meta.json": "/TCW",
        "./fr": "YsDL",
        "./fr/": "YsDL",
        "./fr/index": "YsDL",
        "./fr/index.js": "YsDL",
        "./fr/meta": "W+34",
        "./fr/meta.json": "W+34",
        "./id": "BKTo",
        "./id/": "BKTo",
        "./id/index": "BKTo",
        "./id/index.js": "BKTo",
        "./id/meta": "GRBw",
        "./id/meta.json": "GRBw",
        "./index": "vdRI",
        "./index.js": "vdRI",
        "./nl": "oBQB",
        "./nl/": "oBQB",
        "./nl/index": "oBQB",
        "./nl/index.js": "oBQB",
        "./nl/meta": "/7gC",
        "./nl/meta.json": "/7gC",
        "./pt": "BYe3",
        "./pt/": "BYe3",
        "./pt/index": "BYe3",
        "./pt/index.js": "BYe3",
        "./pt/meta": "7Duw",
        "./pt/meta.json": "7Duw",
        "./ru": "tprR",
        "./ru/": "tprR",
        "./ru/index": "tprR",
        "./ru/index.js": "tprR",
        "./ru/meta": "7Zqp",
        "./ru/meta.json": "7Zqp",
        "./sr": "VITF",
        "./sr/": "VITF",
        "./sr/index": "VITF",
        "./sr/index.js": "VITF",
        "./sr/meta": "KNmn",
        "./sr/meta.json": "KNmn",
        "./zh_cn": "059H",
        "./zh_cn/": "059H",
        "./zh_cn/index": "059H",
        "./zh_cn/index.js": "059H",
        "./zh_cn/meta": "EQ+A",
        "./zh_cn/meta.json": "EQ+A",
      };
      function t(e) {
        return n(o(e));
      }
      function o(e) {
        var a = r[e];
        if (!(a + 1)) throw new Error("Cannot find module '" + e + "'.");
        return a;
      }
      (t.keys = function () {
        return Object.keys(r);
      }),
        (t.resolve = o),
        (e.exports = t),
        (t.id = "DERJ");
    },
    "EQ+A": function (e, a) {
      e.exports = {
        short: "zh_cn",
        long: "Chinese (Simplified)",
        createdBy: "proYang and g-plane",
      };
    },
    F8CQ: function (e, a) {},
    GRBw: function (e, a) {
      e.exports = { short: "id", long: "Indonesian", createdBy: "galuhsahid" };
    },
    I9nf: function (e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = {
          state: {
            selectedMethod: "",
            adding: [
              {
                name: "splice",
                shortDesc: "Elemente in einen Array",
                desc: "FÃ¼gt Elemente zu einem Array hinzu oder entfernt welche.",
                example:
                  "arr.splice(2, 0, 'tacos');<br>\n        console.log(arr);",
                output: "[5, 1, 'tacos', 8]",
              },
              {
                name: "push",
                shortDesc: "Elemente an das Ende eines Arrays",
                desc: "HÃ¤ngt ein oder mehrere Elemente an einen Array an und gibt die neue LÃ¤nge des Arrays zurÃ¼ck.",
                example: "arr.push(2);<br>\n        console.log(arr);",
                output: "[5, 1, 8, 2]",
              },
              {
                name: "unshift",
                shortDesc: "Elemente an den Anfang eines Arrays",
                desc: "FÃ¼gt ein oder mehrere Elemente an den Anfang eines Arrays an und gibt die neue LÃ¤nge des Arrays zurÃ¼ck.",
                example: "arr.unshift(2, 7);<br>\n        console.log(arr);",
                output: "[2, 7, 5, 1, 8]",
              },
              {
                name: "concat",
                shortDesc: "diesen Array zu anderen Arrays und/oder Werten.",
                desc: "Gibt einen neuen Array bestehend aus diesem Array zusammen mit anderen Array(s) und/oder Werten zurÃ¼ck.",
                example:
                  "let arr2 = ['a', 'b', 'c'];<br>\n        let arr3 = arr.concat(arr2);<br>\n        console.log(arr3);",
                output: "[5, 1, 8, 'a', 'b', 'c']",
              },
            ],
            removing: [
              {
                name: "splice",
                shortDesc: "Elemente aus einem Array",
                desc: "FÃ¼gt Elemente einem Array hinzu und/oder entfernt welche.",
                example: "arr.splice(2, 1);<br>\n        console.log(arr);",
                output: "[5, 1]",
              },
              {
                name: "pop",
                shortDesc: "das letzte Element eines Arrays",
                desc: "Entfernt das letzte Element eines Arrays und gibt es zurÃ¼ck.",
                example: "arr.pop();<br>\n        console.log(arr);",
                output: "[5, 1]",
              },
              {
                name: "shift",
                shortDesc: "das erste Element eines Arrays",
                desc: "Entfernt das erste Element eines Arrays und gibt es zurÃ¼ck.",
                example: "arr.shift();<br>\n        console.log(arr);",
                output: "[1, 8]",
              },
              {
                name: "slice",
                shortDesc:
                  "mindestens ein Element fÃ¼r eine Aufgabe, ohne den eigentlichen Array zu verÃ¤ndern",
                desc: "Die <code>slice()</code>-Methode schreibt eine flache Kopie eines Teils des Arrays in ein neues Array-Objekt. Man kann entweder nur den Index fÃ¼r das letzte Elemente (dann wird der Index fÃ¼r das erste Element auf 0 gesetzt) oder sowohl den Index fÃ¼r das erste und das letzte Element kommagetrennt angeben. Der Original-Array wird nicht verÃ¤ndert.",
                example:
                  "let slicedArr = arr.slice(1);<br>\n        console.log(arr);<br>\n        console.log(slicedArr);",
                output: "[5, 1, 8]<br>\n        [1, 8]",
              },
            ],
            string: [
              {
                name: "join",
                shortDesc:
                  "alle Elemente eines Arrays in einen String zusammenfÃ¼hren.",
                desc: "FÃ¼hrt alle Elemente eines Arrays in einem String zusammen. Man kann die Elemente entweder mit oder ohne Trennzeichen zusammenfÃ¼hren. <code>elements.join(' -\n          ')</code> gibt <code>foo-bar</code>",
                example: "console.log(arr.join());",
                output: '"5,1,8"',
              },
              {
                name: "toString",
                shortDesc:
                  "einen String, der den Array reprÃ¤sentiert, zurÃ¼ckgegeben.",
                desc: "Gibt einen String, der den Array und alle darin enthaltenen Elemente beinhaltet, zurÃ¼ck.",
                example: "console.log(arr.toString());",
                output: '"5,1,8"',
              },
              {
                name: "toLocaleString",
                shortDesc:
                  "einen an die Sprache angepassten String, der den Array reprÃ¤sentiert, zurÃ¼ckgeben.",
                desc: "Diese Methode ist ein bisschen komisch. Sie gibt einen an die Sprache angepassten String, der den Array und alle seine Elemente beinhaltet, zurÃ¼ck. Dies ist sehr nÃ¼tzlich fÃ¼r Datumsangaben und WÃ¤hrungen, hat aber einige seltsame Verhaltensweisen, so dass du am besten die genaue Dokumentation durchlesen solltest.",
                example:
                  "let date = [new Date()];<br>\n        const arrString = arr.toLocaleString();<br>\n        const dateString = date.toLocaleString();<br>\n        console.log(arrString, dateString);",
                output: '"5,1,8 12/26/2017, 6:54:49 PM"',
              },
            ],
            ordering: [
              {
                name: "reverse",
                shortDesc: "die Reihenfolge eines Arrays umkehren",
                desc: "Kehrt die Reihenfolge der Elemente in einem Array um, das erste wird zum letzten Element, das letzte zum ersten.",
                example: "arr.reverse();<br>\n        console.log(arr);",
                output: "[8, 1, 5]",
              },
              {
                name: "sort",
                shortDesc: "die Elemente in einem Array sortieren",
                desc: "Sortiert die Elemente eines Arrays in aufsteigender Reihenfolge.",
                example: "arr.sort();<br>\n        console.log(arr);",
                output: "[1, 5, 8]",
              },
            ],
            other: [
              {
                name: "length",
                shortDesc: "die LÃ¤nge eines Arrays herausfinden",
                desc: "Gibt die Zahl aller Elemente in einem Array zurÃ¼ck.",
                example: "console.log(arr.length);",
                output: "3",
              },
              {
                name: "fill",
                shortDesc:
                  "allen Elementen eines Arrays einen bestimmten Wert zuweisen",
                desc: "Weist alle Elementen in einem Array vom Start- bis zum Endindex einen bestimmten Wert zu.",
                example: "arr.fill(2);<br>\n        console.log(arr);",
                output: "[2, 2, 2]",
              },
              {
                name: "copyWithin",
                shortDesc:
                  "einen Folge von Elementen des Arrays innerhalb des Arrays kopieren.",
                desc: "Kopiert eine Reihe von Elementen des Arrays innerhalb des Arrays. Du kannst entweder nur das letzte Element (dann wird der Startindex auf 0 gesetzt) oder sowohl das erste als auch das letzte kommagetrennt festlegen.",
                example: "arr.copyWithin(1);<br>\n        console.log(arr);",
                output: "[5, 5, 1]",
              },
            ],
            iterate: [
              {
                name: "forEach",
                shortDesc:
                  "wobei ich eine selbstdefinierte Funktion auf jedes Elemente anwende",
                desc: "Die <code>forEach()</code>-Methode wendet eine gegebene Funktion auf jedes Element im Array an.",
                example:
                  "arr.forEach((element) => {<br>\n        <span>&nbsp;&nbsp;</span>console.log(element)<br>\n        });",
                output: "5<br>\n        1<br>\n        8",
              },
              {
                name: "map",
                shortDesc:
                  "einen neuen Array basierend auf einer auf alle Elemente angewendeten Funktion",
                desc: "Erstellt einen neuen Array, dessen Elemente auf dem gegebenem Array, auf die eine gegebene Funktion angewendet wurde, basieren.",
                example:
                  "let map = arr.map(x => x + 1);<br>\n        console.log(map);",
                output: "[6, 2, 9]",
              },
              {
                name: "entries",
                shortDesc: "ein Iterator-Objekt erstellen",
                desc: "Gibt ein Iterator-Objekt zurÃ¼ck, das zu jedem Index den Wert des Elements beinhaltet. Es gibt eine Vielzahl an Anwendungen fÃ¼r Iteratoren und andere Methoden, die in Verbindung mit Iteratoren genutzt werden, wie <code>key</code> oder <code>value</code>.",
                example:
                  "let iterator = arr.entries();<br>\n        console.log(iterator.next().value);",
                output:
                  '[0, 5]<br>\n        <span class="comment">// the 0 is the index,</span><br>\n        <span class="comment">// the 5 is the first number</span>',
              },
            ],
            find: {
              single: [
                {
                  name: "includes",
                  shortDesc: ", ob ein bestimmtes Element im Array vorkommt",
                  desc: "Existiert ein bestimmtes Element im Array, wird true, ansonsten false, zurÃ¼ckgegeben.",
                  example: "console.log(arr.includes(1));",
                  output: "true",
                },
                {
                  name: "indexOf",
                  shortDesc: ", was der erste Index eines Elements ist",
                  desc: "Gibt den ersten Index, an dem das Element gefunden werden kann, zurÃ¼ck, oder -1, falls es nicht vorkommt.",
                  example: "console.log(arr.indexOf(5));",
                  output: "0",
                },
                {
                  name: "lastIndexOf",
                  shortDesc: "den letzten Index eines Elements",
                  desc: "Gibt den letzten (grÃ¶ÃŸten) Index zurÃ¼ck, an dem ein Element gefunden werden kann, oder -1, falls es nicht im Array vorkommt.",
                  example: "console.log(arr.lastIndexOf(5));",
                  output: "0",
                },
                {
                  name: "find",
                  shortDesc: "das erste Element, das eine Bedingung erfÃ¼llt",
                  desc: "Gibt das erste gefundene Element aus dem Array zurÃ¼ck, das die gegebene Bedingung erfÃ¼llt, wenn mindestens ein Element die gegebene Bedingung erfÃ¼llt, sonst wird undefined zurÃ¼ckgegeben. Ã„hnlich zu <code>findIndex()</code>, aber <code>find()</code> gibt das Element und nicht den Index zurÃ¼ck.",
                  example:
                    "let isTiny = (el) => el < 2;<br>\n          console.log(arr.find(isTiny));",
                  output: "1",
                },
                {
                  name: "findIndex",
                  shortDesc:
                    "den ersten Index eines Elements, das eine Bedingung erfÃ¼llt",
                  desc: "Gibt den Index des ersten Elements im Array, das die gegebene Bedingung erfÃ¼llt, zurÃ¼ck. ErfÃ¼llt kein Element die Bedingung, wird -1 zurÃ¼ckgegeben. Ã„hnlich zu <code>find()</code>, aber <code>findIndex()</code> gibt den Index statt des Elements zurÃ¼ck.",
                  example:
                    "let isBig = (el) => el > 6;<br>\n          console.log(arr.findIndex(isBig));",
                  output: "2",
                },
                {
                  name: "reduce",
                  shortDesc:
                    "den Array auf einen einzigen Wert reduzieren, von links nach rechts",
                  desc: "Reduziert das Array auf einen einzigen Wert, indem es jeweils zwei Elemente (von links nach rechts) durch eine angegebene Funktion reduziert.",
                  example:
                    "let reducer = (a, b) => a + b;<br>\n          <span>&nbsp;&nbsp;</span>console.log(arr.reduce(reducer));",
                  output: "14",
                },
                {
                  name: "reduceRight",
                  shortDesc:
                    "den Array auf einen einzigen Wert reduzieren, von rechts nach links",
                  desc: "Wendet eine Funktion gegen einen Akkumulator auf jeden Wert des Arrays (von rechts nach links) an und reduziert es um einen einzelnen Wert.",
                  example:
                    "[arr, [0, 1]].reduceRight((a, b) => {<br>\n          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>\n          }, [])",
                  output: "[0, 1, 5, 1, 8]",
                },
              ],
              many: [
                {
                  name: "filter",
                  shortDesc:
                    "Werte basierend auf einer selbsterstellten Bedingung finden.",
                  desc: "Erstellt einen neuen Array mit allen Elementen des Strings, die eine gegebene Bedingung erfÃ¼llen.",
                  example:
                    "let filtered = arr.filter(el => el > 4);<br>\n          console.log(filtered)",
                  output: "[5, 8]",
                },
                {
                  name: "every",
                  shortDesc:
                    "herausfinden, ob alle Elemente des Arrays eine Bedingung erfÃ¼llen.",
                  desc: "Gibt true zurÃ¼ck, wenn alle Elemente des Arrays eine gegebene Bedingung erfÃ¼llen.",
                  example:
                    "let isSmall = (el) => el < 10;<br>\n          console.log(arr.every(isSmall));",
                  output: "true",
                },
                {
                  name: "some",
                  shortDesc:
                    "herausfinden, ob mindestens ein Element des Arrays eine Bedingung erfÃ¼llt",
                  desc: "Gibt true zurÃ¼ck, wenn zumindest ein Element des Arrays eine gegebene Bedingung erfÃ¼llt.",
                  example:
                    "let biggerThan4 = (el) => el > 4;<br>\n          console.log(arr.some(biggerThan4));",
                  output: "true",
                },
              ],
            },
          },
        });
    },
    KNmn: function (e, a) {
      e.exports = { short: "sr", long: "Serbian", createdBy: "bdimitrovski" };
    },
    Kx46: function (e, a) {
      e.exports = { short: "cz", long: "Czech", createdBy: "xgebi" };
    },
    MqxC: function (e, a) {},
    NHnr: function (e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var r = n("7+uW"),
        t = n("Dd8w"),
        o = n.n(t),
        s = n("vdRI"),
        l =
          (n("NYxO"),
          {
            name: "method-base",
            props: { urlPath: { type: String, default: "length" } },
          }),
        i = {
          render: function () {
            var e = this.$createElement,
              a = this._self._c || e;
            return a("div", [
              a("h2", [this._t("title")], 2),
              this._v(" "),
              a("p", { staticClass: "desc" }, [this._t("desc")], 2),
              this._v(" "),
              a("p", { staticClass: "link" }, [
                a("em", [
                  a(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/" +
                          this.urlPath,
                        target: "_blank",
                      },
                    },
                    [this._v("see the docs â†’")]
                  ),
                ]),
              ]),
            ]);
          },
          staticRenderFns: [],
        };
      var d = {
          components: {
            MethodBase: n("VU/8")(
              l,
              i,
              !1,
              function (e) {
                n("73lx");
              },
              "data-v-0dd77848",
              null
            ).exports,
          },
          props: {
            methodType: { type: String, required: !1 },
            options: { type: Array, required: !0 },
          },
          data: function () {
            return { selected: "" };
          },
          computed: {
            isSelected: function () {
              return this.$store.state.selectedMethod;
            },
          },
          watch: {
            selected: function () {
              this.$store.commit("selectionMethod", this.selected);
            },
          },
        },
        c = {
          render: function () {
            var e = this,
              a = e.$createElement,
              n = e._self._c || a;
            return n(
              "div",
              [
                n("p", [
                  n("label", { attrs: { for: "methodoptions" } }, [
                    e._v(
                      e._s(e.$t("methodOptions", "I need to")) +
                        " " +
                        e._s(
                          e.methodType && e.$t("methodTypes." + e.methodType)
                        )
                    ),
                  ]),
                  e._v(" "),
                  n(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.selected,
                          expression: "selected",
                        },
                      ],
                      attrs: { id: "methodoptions", name: "select" },
                      on: {
                        change: function (a) {
                          var n = Array.prototype.filter
                            .call(a.target.options, function (e) {
                              return e.selected;
                            })
                            .map(function (e) {
                              return "_value" in e ? e._value : e.value;
                            });
                          e.selected = a.target.multiple ? n : n[0];
                        },
                      },
                    },
                    [
                      n(
                        "option",
                        { attrs: { value: "", disabled: "", selected: "" } },
                        [e._v("...")]
                      ),
                      e._v(" "),
                      e._l(e.options, function (a) {
                        return n(
                          "option",
                          { key: a.desc, domProps: { value: a } },
                          [e._v("\n        " + e._s(a.shortDesc) + "\n      ")]
                        );
                      }),
                    ],
                    2
                  ),
                ]),
                e._v(" "),
                n(
                  "method-base",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.isSelected,
                        expression: "isSelected",
                      },
                    ],
                    attrs: { urlPath: e.selected.name },
                  },
                  [
                    "length" === e.selected.name
                      ? n("span", { attrs: { slot: "title" }, slot: "title" }, [
                          e._v("Array." + e._s(e.selected.name)),
                        ])
                      : n("span", { attrs: { slot: "title" }, slot: "title" }, [
                          e._v("Array." + e._s(e.selected.name) + "()"),
                        ]),
                    e._v(" "),
                    n("span", {
                      attrs: { slot: "desc" },
                      domProps: { innerHTML: e._s(e.selected.desc) },
                      slot: "desc",
                    }),
                  ]
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var u = {
          components: {
            MethodChoice: n("VU/8")(
              d,
              c,
              !1,
              function (e) {
                n("V7ti");
              },
              "data-v-c134480e",
              null
            ).exports,
          },
          data: function () {
            return { selectedFilter: "", selectedFind: "" };
          },
          computed: o()(
            {},
            (function (e) {
              var a = {};
              return (
                e.forEach(function (e) {
                  return (a[e] = function (a) {
                    var n = a.$store.state.curLanguage;
                    return a.$store.state[n][e];
                  });
                }),
                a
              );
            })([
              "adding",
              "removing",
              "iterate",
              "string",
              "ordering",
              "other",
              "find",
            ]),
            {
              options: function () {
                return this.$t("primaryOptions");
              },
            }
          ),
          watch: {
            selectedFilter: function () {
              this.$store.commit("resetSelection");
            },
            selectedFind: function () {
              this.$store.commit("resetSelection");
            },
          },
        },
        m = {
          render: function () {
            var e = this,
              a = e.$createElement,
              n = e._self._c || a;
            return n("div", [
              n("label", { attrs: { for: "firstmethod" } }, [
                e._v(
                  e._s(e.$t("firstMethod", "I have an array, I would like to"))
                ),
              ]),
              e._v(" "),
              n(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: e.selectedFilter,
                      expression: "selectedFilter",
                    },
                  ],
                  attrs: { id: "firstmethod", name: "select" },
                  on: {
                    change: function (a) {
                      var n = Array.prototype.filter
                        .call(a.target.options, function (e) {
                          return e.selected;
                        })
                        .map(function (e) {
                          return "_value" in e ? e._value : e.value;
                        });
                      e.selectedFilter = a.target.multiple ? n : n[0];
                    },
                  },
                },
                [
                  n(
                    "option",
                    { attrs: { value: "", disabled: "", selected: "" } },
                    [e._v("...")]
                  ),
                  e._v(" "),
                  e._l(e.options, function (a) {
                    return n(
                      "option",
                      { key: a.name, domProps: { value: a } },
                      [e._v("\n      " + e._s(a) + "\n    ")]
                    );
                  }),
                ],
                2
              ),
              e._v(" "),
              e.selectedFilter === e.options[0]
                ? n(
                    "div",
                    [
                      n("method-choice", {
                        attrs: { options: e.adding, methodType: "add" },
                      }),
                    ],
                    1
                  )
                : e.selectedFilter === e.options[1]
                ? n(
                    "div",
                    [
                      n("method-choice", {
                        attrs: { options: e.removing, methodType: "remove" },
                      }),
                    ],
                    1
                  )
                : e.selectedFilter === e.options[3]
                ? n(
                    "div",
                    [
                      n("method-choice", {
                        attrs: { options: e.iterate, methodType: "iterate by" },
                      }),
                    ],
                    1
                  )
                : e.selectedFilter === e.options[2]
                ? n("div", [
                    n("p", [
                      n("label", { attrs: { for: "findmethod" } }, [
                        e._v(e._s(e.$t("findMethod", "I'm trying to find"))),
                      ]),
                      e._v(" "),
                      n(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: e.selectedFind,
                              expression: "selectedFind",
                            },
                          ],
                          attrs: { id: "findMethod", name: "select" },
                          on: {
                            change: function (a) {
                              var n = Array.prototype.filter
                                .call(a.target.options, function (e) {
                                  return e.selected;
                                })
                                .map(function (e) {
                                  return "_value" in e ? e._value : e.value;
                                });
                              e.selectedFind = a.target.multiple ? n : n[0];
                            },
                          },
                        },
                        [
                          n(
                            "option",
                            {
                              attrs: { value: "", disabled: "", selected: "" },
                            },
                            [e._v("...")]
                          ),
                          e._v(" "),
                          n("option", { attrs: { value: "single" } }, [
                            e._v(e._s(e.$t("singleItem", "one item"))),
                          ]),
                          e._v(" "),
                          n("option", { attrs: { value: "many" } }, [
                            e._v(e._s(e.$t("manyItems", "one or many items"))),
                          ]),
                        ]
                      ),
                    ]),
                    e._v(" "),
                    "single" === e.selectedFind
                      ? n(
                          "div",
                          [
                            n("method-choice", {
                              attrs: {
                                options: e.find.single,
                                methodType: "find",
                              },
                            }),
                          ],
                          1
                        )
                      : "many" === e.selectedFind
                      ? n(
                          "div",
                          [
                            n("method-choice", {
                              attrs: {
                                options: e.find.many,
                                methodType: "find",
                              },
                            }),
                          ],
                          1
                        )
                      : e._e(),
                  ])
                : e.selectedFilter === e.options[5]
                ? n(
                    "div",
                    [n("method-choice", { attrs: { options: e.ordering } })],
                    1
                  )
                : e.selectedFilter === e.options[4]
                ? n(
                    "div",
                    [n("method-choice", { attrs: { options: e.string } })],
                    1
                  )
                : e.selectedFilter === e.options[6]
                ? n(
                    "div",
                    [n("method-choice", { attrs: { options: e.other } })],
                    1
                  )
                : e._e(),
            ]);
          },
          staticRenderFns: [],
        };
      var p = n("VU/8")(
          u,
          m,
          !1,
          function (e) {
            n("F8CQ");
          },
          "data-v-6974d5e0",
          null
        ).exports,
        h = {
          render: function () {
            var e = this.$createElement,
              a = this._self._c || e;
            return a("div", [
              a(
                "a",
                {
                  staticClass: "github-corner",
                  attrs: {
                    href: "https://github.com/ajay-dhangar",
                    "aria-label": "View source on Github",
                  },
                },
                [
                  a(
                    "svg",
                    {
                      staticStyle: {
                        fill: "#48DF84",
                        color: "#fff",
                        position: "absolute",
                        top: "0",
                        border: "0",
                        right: "0",
                      },
                      attrs: {
                        width: "80",
                        height: "80",
                        viewBox: "0 0 250 250",
                        "aria-hidden": "true",
                      },
                    },
                    [
                      a("path", {
                        attrs: {
                          d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z",
                        },
                      }),
                      a("path", {
                        staticClass: "octo-arm",
                        staticStyle: { "transform-origin": "130px 106px" },
                        attrs: {
                          d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
                          fill: "currentColor",
                        },
                      }),
                      a("path", {
                        staticClass: "octo-body",
                        attrs: {
                          d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
                          fill: "currentColor",
                        },
                      }),
                    ]
                  ),
                ]
              ),
            ]);
          },
          staticRenderFns: [],
        };
      var g = n("VU/8")(
          null,
          h,
          !1,
          function (e) {
            n("VPtu");
          },
          "data-v-ba6985fe",
          null
        ).exports,
        b = {
          data: function () {
            return {
              selectedLanguage: this.$store.state.curLanguage,
              languages: this.$store.state.languages,
            };
          },
          watch: {
            selectedLanguage: function (e) {
              console.log("new lang", e),
                this.$store.commit("changeLanguage", e),
                this.$store.commit("resetSelection");
            },
          },
        },
        f = {
          render: function () {
            var e = this,
              a = e.$createElement,
              n = e._self._c || a;
            return n("div", { staticClass: "localization-dropdown" }, [
              e._v("\n  Language: \n  "),
              n(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: e.selectedLanguage,
                      expression: "selectedLanguage",
                    },
                  ],
                  on: {
                    change: function (a) {
                      var n = Array.prototype.filter
                        .call(a.target.options, function (e) {
                          return e.selected;
                        })
                        .map(function (e) {
                          return "_value" in e ? e._value : e.value;
                        });
                      e.selectedLanguage = a.target.multiple ? n : n[0];
                    },
                  },
                },
                e._l(e.languages, function (a, r) {
                  return n("option", { domProps: { value: r } }, [
                    e._v(e._s(a.long)),
                  ]);
                })
              ),
            ]);
          },
          staticRenderFns: [],
        };
      var v = n("VU/8")(
          b,
          f,
          !1,
          function (e) {
            n("vF68");
          },
          "data-v-bc478c74",
          null
        ).exports,
        y = n("+Uzz"),
        x = {
          methods: {
            typeOut: function () {
              var e = new SplitText(this.$refs.ex, { type: "chars" }),
                a = new SplitText(this.$refs.ex2, { type: "chars" }),
                n = new y.TimelineMax();
              n.add("start"),
                n.to(this.$refs.ex, 0.1, { opacity: 1 }),
                n.staggerFromTo(
                  e.chars,
                  0.1,
                  {
                    opacity: 0,
                    scale: 0,
                    color: "#aeded4",
                    transformOrigin: "50% 50%",
                  },
                  {
                    opacity: 1,
                    scale: 1,
                    color: "#fff",
                    transformOrigin: "50% 50%",
                    ease: y.Power4.easeOut,
                  },
                  0.03,
                  "start+=0"
                ),
                n.staggerTo(
                  e.chars,
                  0.1,
                  { color: "#aeded4", ease: y.Back.easeIn },
                  0.03,
                  "start+=0.1"
                ),
                n.to(this.$refs.ex2, 0.1, { opacity: 1 }),
                n.staggerFromTo(
                  a.chars,
                  0.1,
                  {
                    opacity: 0,
                    scale: 0,
                    color: "#aeded4",
                    transformOrigin: "50% 50%",
                  },
                  {
                    opacity: 1,
                    scale: 1,
                    color: "#fff",
                    transformOrigin: "50% 50%",
                    ease: y.Power4.easeOut,
                  },
                  0.03,
                  "start1+=0"
                ),
                n.staggerTo(
                  a.chars,
                  0.1,
                  { color: "#ecc2a4", ease: y.Back.easeIn },
                  0.03,
                  "start1+=0.1"
                );
            },
          },
          computed: {
            selectedUsage: function () {
              return this.$store.state.selectedMethod;
            },
          },
          watch: {
            selectedUsage: function () {
              var e = this;
              this.selectedUsage &&
                (TweenMax.set([this.$refs.ex, this.$refs.ex2], { opacity: 0 }),
                setTimeout(function () {
                  e.typeOut();
                }, 500));
            },
          },
        },
        k = {
          render: function () {
            var e = this.$createElement,
              a = this._self._c || e;
            return a("aside", [
              a("div", { staticClass: "usage-code usage1" }, [
                a("p", [
                  a("span", [this._v("let arr = [5, 1, 8];")]),
                  a("br"),
                  this._v(" "),
                  this.selectedUsage
                    ? a("span", {
                        ref: "ex",
                        staticClass: "exampleoutput",
                        domProps: {
                          innerHTML: this._s(this.selectedUsage.example),
                        },
                      })
                    : this._e(),
                ]),
              ]),
              this._v(" "),
              this.selectedUsage
                ? a("div", { staticClass: "usage2" }, [
                    a("h3", { staticStyle: { "margin-top": "50px" } }, [
                      this._v("Output"),
                    ]),
                    this._v(" "),
                    a("div", { staticClass: "usage-code" }, [
                      a("p", [
                        a("span", {
                          ref: "ex2",
                          staticClass: "exampleoutput2",
                          domProps: {
                            innerHTML: this._s(this.selectedUsage.output),
                          },
                        }),
                      ]),
                    ]),
                  ])
                : this._e(),
            ]);
          },
          staticRenderFns: [],
        };
      var D = {
          components: {
            AppMethodPrimary: p,
            AppGithubCorner: g,
            LocaleSwitcher: v,
            AppCode: n("VU/8")(
              x,
              k,
              !1,
              function (e) {
                n("MqxC");
              },
              null,
              null
            ).exports,
          },
        },
        j = {
          render: function () {
            var e = this.$createElement,
              a = this._self._c || e;
            return a(
              "div",
              { attrs: { id: "app" } },
              [
                a("app-github-corner"),
                this._v(" "),
                a("LocaleSwitcher"),
                this._v(" "),
                a("main", [
                  a(
                    "section",
                    { staticClass: "a" },
                    [
                      a("h1", [this._v("JavaScript Array Explorer")]),
                      this._v(" "),
                      this._m(0),
                      this._v(" "),
                      a("app-method-primary"),
                    ],
                    1
                  ),
                  this._v(" "),
                  a(
                    "section",
                    { staticClass: "b" },
                    [
                      a("h3", { staticClass: "usage" }, [this._v("Usage")]),
                      this._v(" "),
                      a("app-code"),
                    ],
                    1
                  ),
                ]),
              ],
              1
            );
          },
          staticRenderFns: [
            function () {
              var e = this.$createElement,
                a = this._self._c || e;
              return a("p", { staticClass: "subtitle" }, [
                a("em", [
                  this._v(
                    "Find the array method you need without digging through the docs"
                  ),
                ]),
              ]);
            },
          ],
        };
      var z = n("VU/8")(
          D,
          j,
          !1,
          function (e) {
            n("7OGC");
          },
          null,
          null
        ).exports,
        S = n("P6sg");
      r.a.use(S.a),
        (r.a.config.productionTip = !1),
        new r.a({
          el: "#app",
          store: s.store,
          template: "<App/>",
          components: { App: z },
        });
    },
    V7ti: function (e, a) {},
    VITF: function (e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = {
          state: {
            selectedMethod: "",
            adding: [
              {
                name: "splice",
                shortDesc: "element/elemente u niz",
                desc: "Dodaje i/ili uklanja elemente iz niza.",
                example:
                  "arr.splice(2, 0, 'tacos');<br>\n        console.log(arr);",
                output: "[5, 1, 'tacos', 8]",
              },
              {
                name: "push",
                shortDesc: "elemente na kraj niza",
                desc: "Dodaje jedan ili viÅ¡e elemenata na kraj niza i vraÄ‡a novu duÅ¾inu niza.",
                example: "arr.push(2);<br>\n        console.log(arr);",
                output: "[5, 1, 8, 2]",
              },
              {
                name: "unshift",
                shortDesc: "elemente na poÄetak niza",
                desc: "Dodaje jedan ili viÅ¡e elemenata na poÄetak niza i vraÄ‡a novu duÅ¾inu niza.",
                example: "arr.unshift(2, 7);<br>\n        console.log(arr);",
                output: "[2, 7, 5, 1, 8]",
              },
              {
                name: "concat",
                shortDesc:
                  "ovaj niz sa drugim nizom/nizovima i/ili vrednoÅ¡Ä‡u/vrednostima",
                desc: "VraÄ‡a novi niz koji se sastoji od ovog niza i drugog niza/nizova i/ili vrednosti.",
                example:
                  "let arr2 = ['a', 'b', 'c'];<br>\n        let arr3 = arr.concat(arr2);<br>\n        console.log(arr3);",
                output: "[5, 1, 8, 'a', 'b', 'c']",
              },
            ],
            removing: [
              {
                name: "splice",
                shortDesc: "element/elemente iz niza",
                desc: "Dodaje i/ili uklanja elemente iz niza.",
                example: "arr.splice(2, 1);<br>\n        console.log(arr);",
                output: "[5, 1]",
              },
              {
                name: "pop",
                shortDesc: "poslednji element niza",
                desc: "Uklanja poslednji element iz niza i vraÄ‡a taj element.",
                example: "arr.pop();<br>\n        console.log(arr);",
                output: "[5, 1]",
              },
              {
                name: "shift",
                shortDesc: "prvi element niza",
                desc: "Uklanja prvi element iz niza i vraÄ‡a taj element.",
                example: "arr.shift();<br>\n        console.log(arr);",
                output: "[1, 8]",
              },
              {
                name: "slice",
                shortDesc:
                  "jedan ili viÅ¡e elemenata za upotrebu, ostavljajuÄ‡i niz onakvim kakav jeste",
                desc: "<code>Slice()</code> metod vraÄ‡a plitku kopiju porcije niza u novi objekat niza. MoÅ¾ete odrediti ili krajnji element (gde Ä‡e poÄetak podrazumevano biti nula) ili i poÄetnu i krajnju vrednost, odvojene zarezom. Originalni niz Ä‡e ostati neizmenjen.",
                example:
                  "let slicedArr = arr.slice(1);<br>\n        console.log(arr);<br>\n        console.log(slicedArr);",
                output: "[5, 1, 8]<br>\n        [1, 8]",
              },
            ],
            string: [
              {
                name: "join",
                shortDesc: "pridruÅ¾im sve elemente niza u jedan string.",
                desc: "PridruÅ¾uje sve elemente niza u jedan string. MoÅ¾ete ih pridruÅ¾iti zajedno onakve kakvi jesi, ili sa neÄim izmeÄ‘u, npr. <code>elements.join(' -\n          ')</code> proizvodi <code>foo-bar</code>",
                example: "console.log(arr.join());",
                output: '"5,1,8"',
              },
              {
                name: "toString",
                shortDesc: "vratim string koji predstavlja niz.",
                desc: "VraÄ‡a string koji predstavlja niz i njegove elemente.",
                example: "console.log(arr.toString());",
                output: '"5,1,8"',
              },
              {
                name: "toLocaleString",
                shortDesc: "vratim lokalizovan string koji predstavlja niz.",
                desc: "Ovo je pomalo Äudno. VraÄ‡a lokalizovan string koji predstavlja niz i njegove vrednosti. Ovo je veoma korisno za datume i valute, i ima neke Äudne prirodne apstrakcije, tako da je najbolje konsultovati dokumentaciju pri njegovom koriÅ¡Ä‡enju.",
                example:
                  "let date = [new Date()];<br>\n        const arrString = arr.toLocaleString();<br>\n        const dateString = date.toLocaleString();<br>\n        console.log(arrString, dateString);",
                output: '"5,1,8 12/26/2017, 6:54:49 PM"',
              },
            ],
            ordering: [
              {
                name: "reverse",
                shortDesc: "okrenem redosled niza",
                desc: "PreokreÄ‡e redosled elemenata datog niza â€” prvi element postaje zadnji, a zadnji postaje prvi.",
                example: "arr.reverse();<br>\n        console.log(arr);",
                output: "[8, 1, 5]",
              },
              {
                name: "sort",
                shortDesc: "sortiram elemente niza",
                desc: "Sortira elemente datog niza i vraÄ‡a niz.",
                example: "arr.sort();<br>\n        console.log(arr);",
                output: "[1, 5, 8]",
              },
            ],
            other: [
              {
                name: "length",
                shortDesc: "pronaÄ‘em duÅ¾inu niza",
                desc: "VraÄ‡a broj elemenata datog niza.",
                example: "console.log(arr.length);",
                output: "3",
              },
              {
                name: "fill",
                shortDesc: "popunim sve elemente niza statiÄkom vrednoÅ¡Ä‡u",
                desc: "Popunjava sve elemente niza od poÄetnog indeksa do krajnjeg indeksa sa statiÄkom vrednoÅ¡Ä‡u.",
                example: "arr.fill(2);<br>\n        console.log(arr);",
                output: "[2, 2, 2]",
              },
              {
                name: "copyWithin",
                shortDesc: "kopiram sekvencu elemenata nizu unutar niza.",
                desc: "Kopira sekvencu elemenata niza unutar niza. MoÅ¾ete odrediti ili krajnji element (gde Ä‡e poÄetak podrazumevano biti nula) ili i poÄetnu i krajnju vrednost, odvojene zarezom.",
                example: "arr.copyWithin(1);<br>\n        console.log(arr);",
                output: "[5, 5, 1]",
              },
            ],
            iterate: [
              {
                name: "forEach",
                shortDesc:
                  "izvrÅ¡avanju funkcije koju Ä‡u da kreiram za svaki element",
                desc: "forEach() metod izvrÅ¡ava datu funkciju nad svakim elementom niza jedanput.",
                example:
                  "arr.forEach((element) => {<br>\n        <span>&nbsp;&nbsp;</span>console.log(element)<br>\n        });",
                output: "5<br>\n        1<br>\n        8",
              },
              {
                name: "map",
                shortDesc:
                  "kreiranju novog niza od svakog elementa sa funkcijom koju kreiram",
                desc: "Kreira novi niz sa rezultatima pozvane funkcije nad svakim elementom u ovom nizu.",
                example:
                  "let map = arr.map(x => x + 1);<br>\n        console.log(map);",
                output: "[6, 2, 9]",
              },
              {
                name: "entries",
                shortDesc: "kreiranjem iterator objekta",
                desc: "VraÄ‡a novi Array Iterrator objekat koji sadrÅ¾i key/value parove za svaki indeks u nizu. Postoji dosta upotreba iteratora, kao i drugih metoda u sprezi sa njima, kao npr. <code>values</code> i <code>keys</code>",
                example:
                  "let iterator = arr.entries();<br>\n        console.log(iterator.next().value);",
                output:
                  '[0, 5]<br>\n        <span class="comment">// the 0 is the index,</span><br>\n        <span class="comment">// the 5 is the first number</span>',
              },
            ],
            find: {
              single: [
                {
                  name: "includes",
                  shortDesc: "ako postoji odreÄ‘eni element",
                  desc: "Ustanovljava da li niz sadrÅ¾i odreÄ‘eni element, vraÄ‡ajuÄ‡u true ili false vrednosti.",
                  example: "console.log(arr.includes(1));",
                  output: "true",
                },
                {
                  name: "indexOf",
                  shortDesc: "prvi indeks odreÄ‘enog elementa",
                  desc: "VraÄ‡a prvi indeks na kom se dati element moÅ¾e pronaÄ‡i u nizu, ili -1 ako on nije prisutan.",
                  example: "console.log(arr.indexOf(5));",
                  output: "0",
                },
                {
                  name: "lastIndexOf",
                  shortDesc: "zadnji indeks odreÄ‘enog elementa",
                  desc: "VraÄ‡a zadnji (najveÄ‡i) indeks odreÄ‘enog elementa u nizu koji je jednak odreÄ‘enoj vrednosti, ili -1 ako nijedan nije pronaÄ‘en.",
                  example: "console.log(arr.lastIndexOf(5));",
                  output: "0",
                },
                {
                  name: "find",
                  shortDesc: "prvi element koji zadovoljava odreÄ‘en uslov",
                  desc: "VraÄ‡a pronaÄ‘enu vrednost unutar niza, ako element u nizu zadovoljava datu test funkciju ili undefined ako nije pronaÄ‘en. SliÄno kao <code>findIndex()</code>, s tim Å¡to vraÄ‡a vrednost umesto indeks.",
                  example:
                    "let isTiny = (el) => el < 2;<br>\n          console.log(arr.find(isTiny));",
                  output: "1",
                },
                {
                  name: "findIndex",
                  shortDesc:
                    "prvi indeks elementa koji zadovoljava odreÄ‘en uslov",
                  desc: "VraÄ‡a indeks prvog elementa u nizu koji zadovoljava datu test funkciju. U suprotnom vraÄ‡a -1. SliÄno kao <code>find()</code>, s tim Å¡to vraÄ‡a indeks umesto vrednosti.",
                  example:
                    "let isBig = (el) => el > 6;<br>\n          console.log(arr.findIndex(isBig));",
                  output: "2",
                },
                {
                  name: "reduce",
                  shortDesc: "vrednost redukujuÄ‡i niz, od poÄetka do kraja",
                  desc: "Primenjuje funkciju na akumulator i svaku vrednost niza (sa leva na desno) kako bi je smanjio na jednu vrednost.",
                  example:
                    "let reducer = (a, b) => a + b;<br>\n          <span>&nbsp;&nbsp;</span>console.log(arr.reduce(reducer));",
                  output: "14",
                },
                {
                  name: "reduceRight",
                  shortDesc: "vrednost redukujuÄ‡i niz, od kraja do poÄetka",
                  desc: "Primenjuje funkciju na akumulator i svaku vrednost niza (sa desna na levo) kako bi je smanjio na jednu vrednost.",
                  example:
                    "[arr, [0, 1]].reduceRight((a, b) => {<br>\n          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>\n          }, [])",
                  output: "[0, 1, 5, 1, 8]",
                },
              ],
              many: [
                {
                  name: "filter",
                  shortDesc: "vrednosti na osnovu uslova koji ja zadam",
                  desc: "Kreira novi niz sa svim elementima ovog niza za koji data filter funkcija vraÄ‡a true.",
                  example:
                    "let filtered = arr.filter(el => el > 4);<br>\n          console.log(filtered)",
                  output: "[5, 8]",
                },
                {
                  name: "every",
                  shortDesc:
                    "da li svaki element zadovoljava odreÄ‘en uslov ili ne",
                  desc: "VraÄ‡a true ako svaki element u ovom nizu zadovoljava datu test funkciju",
                  example:
                    "let isSmall = (el) => el < 10;<br>\n          console.log(arr.every(isSmall));",
                  output: "true",
                },
                {
                  name: "some",
                  shortDesc:
                    "da li barem jedan element zadovoljava odreÄ‘en uslov ili ne",
                  desc: "VraÄ‡a true ako barem jedan element u ovom nizu zadovoljava datu test funkciju",
                  example:
                    "let biggerThan4 = (el) => el > 4;<br>\n          console.log(arr.some(biggerThan4));",
                  output: "true",
                },
              ],
            },
          },
        });
    },
    VPtu: function (e, a) {},
    "W+34": function (e, a) {
      e.exports = { short: "fr", long: "French", createdBy: "julienmartin" };
    },
    WYaq: function (e, a) {
      e.exports = { short: "bg", long: "Bulgarian", createdBy: "imbyurhan" };
    },
    WbDD: function (e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = {
          state: {
            selectedMethod: "",
            adding: [
              {
                name: "splice",
                shortDesc: "ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚(Ð¸) Ð² Ð¼Ð°ÑÐ¸Ð²",
                desc: "Ð”Ð¾Ð±Ð°Ð²Ñ Ð¸/Ð¸Ð»Ð¸ Ð¿Ñ€ÐµÐ¼Ð°Ñ…Ð²Ð° ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸ Ð¾Ñ‚ Ð¼Ð°ÑÐ¸Ð².",
                example:
                  "arr.splice(2, 0, 'tacos');<br>\n        console.log(arr);",
                output: "[5, 1, 'tacos', 8]",
              },
              {
                name: "push",
                shortDesc: "ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸ Ð² ÐºÑ€Ð°Ñ Ð½Ð° Ð¼Ð°ÑÐ¸Ð²Ð°",
                desc: "Ð”Ð¾Ð±Ð°Ð²Ñ ÐµÐ´Ð¸Ð½ Ð¸Ð»Ð¸ Ð¿Ð¾Ð²ÐµÑ‡Ðµ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸ Ð² ÐºÑ€Ð°Ñ Ð½Ð° Ð¼Ð°ÑÐ¸Ð²Ð° Ð¸ Ð²Ñ€ÑŠÑ‰Ð° Ð½Ð¾Ð²Ð°Ñ‚Ð° Ð´ÑŠÐ»Ð¶Ð¸Ð½Ð° Ð½Ð° Ð¼Ð°ÑÐ¸Ð²Ð°.",
                example: "arr.push(2);<br>\n        console.log(arr);",
                output: "[5, 1, 8, 2]",
              },
              {
                name: "unshift",
                shortDesc:
                  "ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸ Ð² Ð½Ð°Ñ‡Ð°Ð»Ð¾Ñ‚Ð¾ Ð½Ð° Ð¼Ð°ÑÐ¸Ð²Ð°",
                desc: "Ð”Ð¾Ð±Ð°Ð²Ñ ÐµÐ´Ð¸Ð½ Ð¸Ð»Ð¸ Ð¿Ð¾Ð²ÐµÑ‡Ðµ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸ Ð² Ð½Ð°Ñ‡Ð°Ð»Ð¾Ñ‚Ð¾ Ð½Ð° Ð¼Ð°ÑÐ¸Ð²Ð° Ð¸ Ð²Ñ€ÑŠÑ‰Ð° Ð½Ð¾Ð²Ð°Ñ‚Ð° Ð´ÑŠÐ»Ð¶Ð¸Ð½Ð° Ð½Ð° Ð¼Ð°ÑÐ¸Ð²Ð°.",
                example: "arr.unshift(2, 7);<br>\n        console.log(arr);",
                output: "[2, 7, 5, 1, 8]",
              },
              {
                name: "concat",
                shortDesc:
                  "Ñ‚Ð¾Ð·Ð¸ Ð¼Ð°ÑÐ¸Ð² Ð² Ð´Ñ€ÑƒÐ³ Ð¼Ð°ÑÐ¸Ð²(Ð¸) Ð¸/Ð¸Ð»Ð¸ ÑÑ‚Ð¾Ð¹Ð½Ð¾ÑÑ‚(Ð¸)",
                desc: "Ð’Ñ€ÑŠÑ‰Ð° Ð½Ð¾Ð² Ð¼Ð°ÑÐ¸Ð², ÑÑŠÑÑ‚Ð°Ð²ÐµÐ½ Ð¾Ñ‚ Ñ‚Ð¾Ð·Ð¸ Ð¼Ð°ÑÐ¸Ð², ÑÐ²ÑŠÑ€Ð·Ð°Ð½ Ñ Ð´Ñ€ÑƒÐ³ Ð¼Ð°ÑÐ¸Ð²(Ð¸) Ð¸/Ð¸Ð»Ð¸ ÑÑ‚Ð¾Ð¹Ð½Ð¾ÑÑ‚(Ð¸).",
                example:
                  "let arr2 = ['a', 'b', 'c'];<br>\n        let arr3 = arr.concat(arr2);<br>\n        console.log(arr3);",
                output: "[5, 1, 8, 'a', 'b', 'c']",
              },
            ],
            removing: [
              {
                name: "splice",
                shortDesc: "ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚(Ð¸) Ð¾Ñ‚ Ð¼Ð°ÑÐ¸Ð²",
                desc: "Ð”Ð¾Ð±Ð°Ð²Ñ Ð¸/Ð¸Ð»Ð¸ Ð¿Ñ€ÐµÐ¼Ð°Ñ…Ð²Ð° ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸ Ð¾Ñ‚ Ð¼Ð°ÑÐ¸Ð².",
                example: "arr.splice(2, 1);<br>\n        console.log(arr);",
                output: "[5, 1]",
              },
              {
                name: "pop",
                shortDesc: "Ð¿Ð¾ÑÐ»ÐµÐ´Ð½Ð¸ÑÑ‚ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ð½Ð° Ð¼Ð°ÑÐ¸Ð²Ð°",
                desc: "ÐŸÑ€ÐµÐ¼Ð°Ñ…Ð²Ð° Ð¿Ð¾ÑÐ»ÐµÐ´Ð½Ð¸Ñ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ð¾Ñ‚ Ð¼Ð°ÑÐ¸Ð² Ð¸ Ð²Ñ€ÑŠÑ‰Ð° Ñ‚Ð¾Ð·Ð¸ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚.",
                example: "arr.pop();<br>\n        console.log(arr);",
                output: "[5, 1]",
              },
              {
                name: "shift",
                shortDesc: "Ð¿ÑŠÑ€Ð²Ð¸ÑÑ‚ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ð½Ð° Ð¼Ð°ÑÐ¸Ð²Ð°",
                desc: "ÐŸÑ€ÐµÐ¼Ð°Ñ…Ð²Ð° Ð¿ÑŠÑ€Ð²Ð¸Ñ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ð¾Ñ‚ Ð¼Ð°ÑÐ¸Ð² Ð¸ Ð²Ñ€ÑŠÑ‰Ð° Ñ‚Ð¾Ð·Ð¸ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚.",
                example: "arr.shift();<br>\n        console.log(arr);",
                output: "[1, 8]",
              },
              {
                name: "slice",
                shortDesc:
                  "ÐµÐ´Ð½Ð¾ Ð¸Ð»Ð¸ Ð¿Ð¾Ð²ÐµÑ‡Ðµ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸ Ð·Ð° ÑƒÐ¿Ð¾Ñ‚Ñ€ÐµÐ±Ð°, Ð¾ÑÑ‚Ð°Ð²ÑÐ¹ÐºÐ¸ Ð¼Ð°ÑÐ¸Ð²Ð°, ÐºÐ°ÐºÑ‚Ð¾ Ðµ",
                desc: "ÐœÐµÑ‚Ð¾Ð´ÑŠÑ‚ <code>slice()</code> Ð²Ñ€ÑŠÑ‰Ð° Ð¿Ð»Ð¸Ñ‚ÐºÐ¾ ÐºÐ¾Ð¿Ð¸Ðµ Ð½Ð° Ñ‡Ð°ÑÑ‚ Ð¾Ñ‚ Ð¼Ð°ÑÐ¸Ð² Ð² Ð½Ð¾Ð² Ð¾Ð±ÐµÐºÑ‚ Ð¾Ñ‚ Ð¼Ð°ÑÐ¸Ð². ÐœÐ¾Ð¶ÐµÑ‚Ðµ Ð´Ð° Ð¿Ð¾ÑÐ¾Ñ‡Ð¸Ñ‚Ðµ Ð¸Ð»Ð¸ ÑÐ°Ð¼Ð¾ ÐºÑ€Ð°Ð¹Ð½Ð¸Ñ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚ (Ð¾Ñ‚ÐºÑŠÐ´ÐµÑ‚Ð¾ Ð·Ð°Ð¿Ð¾Ñ‡Ð²Ð° Ð´Ð° Ðµ Ð¿Ð¾ Ð¿Ð¾Ð´Ñ€Ð°Ð·Ð±Ð¸Ñ€Ð°Ð½Ðµ Ð´Ð¾ Ð½ÑƒÐ»Ð°) Ð¸Ð»Ð¸ Ð¸ Ð½Ð°Ñ‡Ð°Ð»Ð¾Ñ‚Ð¾, Ð¸ ÐºÑ€Ð°Ñ, Ñ€Ð°Ð·Ð´ÐµÐ»ÐµÐ½Ð¸ ÑÑŠÑ Ð·Ð°Ð¿ÐµÑ‚Ð°Ñ. ÐžÑ€Ð¸Ð³Ð¸Ð½Ð°Ð»Ð½Ð¸ÑÑ‚ Ð¼Ð°ÑÐ¸Ð² Ð½ÑÐ¼Ð° Ð´Ð° Ð±ÑŠÐ´Ðµ Ð¿Ñ€Ð¾Ð¼ÐµÐ½ÐµÐ½.",
                example:
                  "let slicedArr = arr.slice(1);<br>\n        console.log(arr);<br>\n        console.log(slicedArr);",
                output: "[5, 1, 8]<br>\n        [1, 8]",
              },
            ],
            string: [
              {
                name: "join",
                shortDesc:
                  "Ð¿Ñ€Ð¸ÑÑŠÐµÐ´Ð¸Ð½ÐµÑ‚Ðµ Ð²ÑÐ¸Ñ‡ÐºÐ¸ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸ Ð½Ð° Ð¼Ð°ÑÐ¸Ð²Ð° ÐºÑŠÐ¼ Ð½Ð¸Ð·",
                desc: "ÐŸÑ€Ð¸ÑÑŠÐµÐ´Ð¸Ð½ÑÐ²Ð° Ð²ÑÐ¸Ñ‡ÐºÐ¸ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸ Ð½Ð° Ð¼Ð°ÑÐ¸Ð²Ð° ÐºÑŠÐ¼ Ð½Ð¸Ð·. ÐœÐ¾Ð¶ÐµÑ‚Ðµ Ð´Ð° Ð³Ð¸ Ð¿Ñ€Ð¸ÑÑŠÐµÐ´Ð¸Ð½Ð¸Ñ‚Ðµ Ð·Ð°ÐµÐ´Ð½Ð¾, ÐºÐ°ÐºÑ‚Ð¾ Ðµ Ð¸Ð»Ð¸ Ñ Ð½ÐµÑ‰Ð¾ Ð¼ÐµÐ¶Ð´Ñƒ Ñ‚ÑÑ…, <code>elements.join ('-')</code> Ð²Ð¸ Ð´Ð°Ð²Ð° <code>foo-bar</code>",
                example: "console.log(arr.join());",
                output: '"5,1,8"',
              },
              {
                name: "toString",
                shortDesc:
                  "Ð²Ñ€ÑŠÑ‰Ð° Ð½Ð¸Ð·, Ð¿Ñ€ÐµÐ´ÑÑ‚Ð°Ð²Ð»ÑÐ²Ð°Ñ‰ Ð¼Ð°ÑÐ¸Ð²Ð°",
                desc: "Ð’Ñ€ÑŠÑ‰Ð° Ð½Ð¸Ð·, Ð¿Ñ€ÐµÐ´ÑÑ‚Ð°Ð²Ð»ÑÐ²Ð°Ñ‰ Ð¼Ð°ÑÐ¸Ð²Ð° Ð¸ Ð½ÐµÐ³Ð¾Ð²Ð¸Ñ‚Ðµ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸.",
                example: "console.log(arr.toString());",
                output: '"5,1,8"',
              },
              {
                name: "toLocaleString",
                shortDesc:
                  "Ð²Ñ€ÑŠÑ‰Ð° Ð»Ð¾ÐºÐ°Ð»Ð¸Ð·Ð¸Ñ€Ð°Ð½ Ð½Ð¸Ð·, Ð¿Ñ€ÐµÐ´ÑÑ‚Ð°Ð²Ð»ÑÐ²Ð°Ñ‰ Ð¼Ð°ÑÐ¸Ð²Ð°",
                desc: "Ð¢Ð¾Ð²Ð° Ðµ Ð¼Ð°Ð»ÐºÐ¾ Ð²ÑŠÐ»ÑˆÐµÐ±ÑÑ‚Ð²Ð¾. Ð’Ñ€ÑŠÑ‰Ð° Ð»Ð¾ÐºÐ°Ð»Ð¸Ð·Ð¸Ñ€Ð°Ð½ Ð½Ð¸Ð·, Ð¿Ñ€ÐµÐ´ÑÑ‚Ð°Ð²Ð»ÑÐ²Ð°Ñ‰ Ð¼Ð°ÑÐ¸Ð²Ð° Ð¸ Ð½ÐµÐ³Ð¾Ð²Ð¸Ñ‚Ðµ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸. Ð¢Ð¾Ð²Ð° Ðµ Ð¼Ð½Ð¾Ð³Ð¾ Ð¿Ð¾Ð»ÐµÐ·Ð½Ð¾ Ð·Ð° Ð´Ð°Ñ‚Ð¸ Ð¸ Ð²Ð°Ð»ÑƒÑ‚Ð° Ð¸ Ð¸Ð¼Ð° Ð½ÑÐºÐ¾Ð¸ ÑÑ‚Ñ€Ð°Ð½Ð½Ð¸ Ð¼ÐµÑÑ‚Ð½Ð¸ Ð°Ð±ÑÑ‚Ñ€Ð°ÐºÑ†Ð¸Ð¸, Ñ‚Ð°ÐºÐ° Ñ‡Ðµ Ð½Ð°Ð¹-Ð´Ð¾Ð±Ñ€Ðµ Ð´Ð° ÑÐµ ÐºÐ¾Ð½ÑÑƒÐ»Ñ‚Ð¸Ñ€Ð°Ñ‚Ðµ Ñ Ð´Ð¾ÐºÑƒÐ¼ÐµÐ½Ñ‚Ð¸Ñ‚Ðµ, ÐºÐ¾Ð³Ð°Ñ‚Ð¾ Ð³Ð¾ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ñ‚Ðµ.",
                example:
                  "let date = [new Date()];<br>\n        const arrString = arr.toLocaleString();<br>\n        const dateString = date.toLocaleString();<br>\n        console.log(arrString, dateString);",
                output: '"5,1,8 12/26/2017, 6:54:49 PM"',
              },
            ],
            ordering: [
              {
                name: "reverse",
                shortDesc: "Ð¾Ð±Ñ€ÑŠÑ‰Ð°Ð½Ðµ Ð½Ð° Ñ€ÐµÐ´Ð° Ð½Ð° Ð¼Ð°ÑÐ¸Ð²Ð°",
                desc: "ÐžÐ±Ñ€ÑŠÑ‰Ð° Ñ€ÐµÐ´Ð° Ð½Ð° ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸Ñ‚Ðµ Ð½Ð° Ð¼Ð°ÑÐ¸Ð² Ð½Ð° Ð¼ÑÑÑ‚Ð¾ - Ð¿ÑŠÑ€Ð²Ð¸ÑÑ‚ ÑÑ‚Ð°Ð²Ð° Ð¿Ð¾ÑÐ»ÐµÐ´Ð½Ð¸ÑÑ‚ Ð¸ Ð¿Ð¾ÑÐ»ÐµÐ´Ð½Ð¸ÑÑ‚ ÑÑ‚Ð°Ð²Ð° Ð¿ÑŠÑ€Ð²Ð¸ÑÑ‚.",
                example: "arr.reverse();<br>\n        console.log(arr);",
                output: "[8, 1, 5]",
              },
              {
                name: "sort",
                shortDesc:
                  "ÑÐ¾Ñ€Ñ‚Ð¸Ñ€Ð°Ð¹Ñ‚Ðµ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸Ñ‚Ðµ Ð½Ð° Ð¼Ð°ÑÐ¸Ð²Ð°",
                desc: "Ð¡Ð¾Ñ€Ñ‚Ð¸Ñ€Ð° ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸Ñ‚Ðµ Ð½Ð° Ð¼Ð°ÑÐ¸Ð² Ð½Ð° Ð¼ÑÑÑ‚Ð¾ Ð¸ Ð²Ñ€ÑŠÑ‰Ð° Ð¼Ð°ÑÐ¸Ð²Ð°.",
                example: "arr.sort();<br>\n        console.log(arr);",
                output: "[1, 5, 8]",
              },
            ],
            other: [
              {
                name: "length",
                shortDesc:
                  "Ð½Ð°Ð¼ÐµÑ€ÐµÑ‚Ðµ Ð´ÑŠÐ»Ð¶Ð¸Ð½Ð°Ñ‚Ð° Ð½Ð° Ð¼Ð°ÑÐ¸Ð²Ð°",
                desc: "Ð’Ñ€ÑŠÑ‰Ð° Ð±Ñ€Ð¾Ñ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸ Ð² Ñ‚Ð¾Ð·Ð¸ Ð¼Ð°ÑÐ¸Ð².",
                example: "console.log(arr.length);",
                output: "3",
              },
              {
                name: "fill",
                shortDesc:
                  "Ð¿Ð¾Ð¿ÑŠÐ»Ð½ÐµÑ‚Ðµ Ð²ÑÐ¸Ñ‡ÐºÐ¸ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸ Ð½Ð° Ð¼Ð°ÑÐ¸Ð²Ð° ÑÑŠÑ ÑÑ‚Ð°Ñ‚Ð¸Ñ‡Ð½Ð° ÑÑ‚Ð¾Ð¹Ð½Ð¾ÑÑ‚",
                desc: "Ð—Ð°Ð¿ÑŠÐ»Ð²Ð° Ð²ÑÐ¸Ñ‡ÐºÐ¸ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸ Ð½Ð° Ð¼Ð°ÑÐ¸Ð²Ð° Ð¾Ñ‚ Ð½Ð°Ñ‡Ð°Ð»ÐµÐ½ Ð¸Ð½Ð´ÐµÐºÑ Ð´Ð¾ ÐºÑ€Ð°Ð¹Ð½Ð¸Ñ Ð¸Ð½Ð´ÐµÐºÑ ÑÑŠÑ ÑÑ‚Ð°Ñ‚Ð¸Ñ‡Ð½Ð° ÑÑ‚Ð¾Ð¹Ð½Ð¾ÑÑ‚.",
                example: "arr.fill(2);<br>\n        console.log(arr);",
                output: "[2, 2, 2]",
              },
              {
                name: "copyWithin",
                shortDesc:
                  "ÐºÐ¾Ð¿Ð¸Ñ€Ð°Ð¹Ñ‚Ðµ Ð¿Ð¾ÑÐ»ÐµÐ´Ð¾Ð²Ð°Ñ‚ÐµÐ»Ð½Ð¾ÑÑ‚ Ð¾Ñ‚ Ð¼Ð°ÑÐ¸Ð²Ð½Ð¸ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸ Ð² Ð¼Ð°ÑÐ¸Ð²Ð°.",
                desc: "ÐšÐ¾Ð¿Ð¸Ñ€Ð° Ð¿Ð¾ÑÐ»ÐµÐ´Ð¾Ð²Ð°Ñ‚ÐµÐ»Ð½Ð¾ÑÑ‚ Ð¾Ñ‚ Ð¼Ð°ÑÐ¸Ð²Ð½Ð¸ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸ Ð² Ð¼Ð°ÑÐ¸Ð²Ð°. ÐœÐ¾Ð¶ÐµÑ‚Ðµ Ð´Ð° Ð¿Ð¾ÑÐ¾Ñ‡Ð¸Ñ‚Ðµ Ð¸Ð»Ð¸ ÑÐ°Ð¼Ð¾ ÐºÑ€Ð°Ð¹Ð½Ð¸Ñ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚ (Ð¾Ñ‚ÐºÑŠÐ´ÐµÑ‚Ð¾ Ð·Ð°Ð¿Ð¾Ñ‡Ð²Ð° Ð´Ð° Ðµ Ð¿Ð¾ Ð¿Ð¾Ð´Ñ€Ð°Ð·Ð±Ð¸Ñ€Ð°Ð½Ðµ Ð´Ð¾ Ð½ÑƒÐ»Ð°) Ð¸Ð»Ð¸ Ð¸ Ð½Ð°Ñ‡Ð°Ð»Ð¾Ñ‚Ð¾, Ð¸ ÐºÑ€Ð°Ñ, Ñ€Ð°Ð·Ð´ÐµÐ»ÐµÐ½Ð¸ ÑÑŠÑ Ð·Ð°Ð¿ÐµÑ‚Ð°Ñ.",
                example: "arr.copyWithin(1);<br>\n        console.log(arr);",
                output: "[5, 5, 1]",
              },
            ],
            iterate: [
              {
                name: "forEach",
                shortDesc:
                  "Ð¸Ð·Ð¿ÑŠÐ»Ð½ÑÐ²Ð°Ð¹ÐºÐ¸ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ñ, ÐºÐ¾ÑÑ‚Ð¾ Ñ‰Ðµ ÑÑŠÐ·Ð´Ð°Ð¼ Ð·Ð° Ð²ÑÐµÐºÐ¸ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚",
                desc: "ÐœÐµÑ‚Ð¾Ð´ÑŠÑ‚ forEach() Ð¸Ð·Ð¿ÑŠÐ»Ð½ÑÐ²Ð° ÐµÐ´Ð½Ð° Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²ÐµÐ½Ð° Ñ„ÑƒÐ½ÐºÑ†Ð¸Ñ Ð²ÐµÐ´Ð½ÑŠÐ¶ Ð·Ð° Ð²ÑÐµÐºÐ¸ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ð½Ð° Ð¼Ð°ÑÐ¸Ð²Ð°.",
                example:
                  "arr.forEach((element) => {<br>\n        <span>&nbsp;&nbsp;</span>console.log(element)<br> \n        });",
                output: "5<br>\n        1<br>\n        8",
              },
              {
                name: "map",
                shortDesc:
                  "ÑÑŠÐ·Ð´Ð°Ð²Ð°Ð½Ðµ Ð½Ð° Ð½Ð¾Ð² Ð¼Ð°ÑÐ¸Ð² Ð¾Ñ‚ Ð²ÑÐµÐºÐ¸ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ñ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ñ, ÐºÐ¾ÑÑ‚Ð¾ ÑÑŠÐ·Ð´Ð°Ð²Ð°Ð¼",
                desc: "Ð¡ÑŠÐ·Ð´Ð°Ð²Ð° Ð½Ð¾Ð² Ð¼Ð°ÑÐ¸Ð² Ñ Ñ€ÐµÐ·ÑƒÐ»Ñ‚Ð°Ñ‚Ð¸Ñ‚Ðµ Ð¾Ñ‚ Ð¸Ð·Ð²Ð¸ÐºÐ²Ð°Ð½ÐµÑ‚Ð¾ Ð½Ð° Ð´Ð°Ð´ÐµÐ½Ð° Ñ„ÑƒÐ½ÐºÑ†Ð¸Ñ Ð½Ð° Ð²ÑÐµÐºÐ¸ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ð² Ñ‚Ð¾Ð·Ð¸ Ð¼Ð°ÑÐ¸Ð².",
                example:
                  "let map = arr.map(x => x + 1);<br>\n        console.log(map);",
                output: "[6, 2, 9]",
              },
              {
                name: "entries",
                shortDesc: "ÑÑŠÐ·Ð´Ð°Ð²Ð°Ð½Ðµ Ð½Ð° Ð¾Ð±ÐµÐºÑ‚ Ð¸Ñ‚ÐµÑ€Ð°Ñ‚Ð¾Ñ€",
                desc: "Ð’Ñ€ÑŠÑ‰Ð° Ð½Ð¾Ð² Ð¾Ð±ÐµÐºÑ‚ Ð¾Ñ‚ Array Iterator, ÐºÐ¾Ð¹Ñ‚Ð¾ ÑÑŠÐ´ÑŠÑ€Ð¶Ð° Ð´Ð²Ð¾Ð¹ÐºÐ¸Ñ‚Ðµ ÐºÐ»ÑŽÑ‡/ÑÑ‚Ð¾Ð¹Ð½Ð¾ÑÑ‚ Ð·Ð° Ð²ÑÐµÐºÐ¸ Ð¸Ð½Ð´ÐµÐºÑ Ð² Ð¼Ð°ÑÐ¸Ð²Ð°. Ð˜Ð¼Ð° Ð¼Ð½Ð¾Ð³Ð¾ Ð¿Ñ€Ð¸Ð»Ð¾Ð¶ÐµÐ½Ð¸Ñ Ð·Ð° Ð¸Ñ‚ÐµÑ€Ð°Ñ‚Ð¾Ñ€Ð¸Ñ‚Ðµ, ÐºÐ°ÐºÑ‚Ð¾ Ð¸ Ð´Ñ€ÑƒÐ³Ð¸ Ð¼ÐµÑ‚Ð¾Ð´Ð¸, Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð½Ð¸ Ñ Ð½ÐµÐ³Ð¾, ÐºÐ°Ñ‚Ð¾ <code>values</code> Ð¸ <code>keys</code>",
                example:
                  "let iterator = arr.entries();<br>\n        console.log(iterator.next().value);",
                output:
                  '[0, 5]<br>\n        <span class="comment">// the 0 is the index,</span><br>\n        <span class="comment">// the 5 is the first number</span>',
              },
            ],
            find: {
              single: [
                {
                  name: "includes",
                  shortDesc: "Ð°ÐºÐ¾ Ð¸Ð¼Ð° Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÐµÐ½ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚",
                  desc: "ÐžÐ¿Ñ€ÐµÐ´ÐµÐ»Ñ Ð´Ð°Ð»Ð¸ Ð´Ð°Ð´ÐµÐ½ Ð¼Ð°ÑÐ¸Ð² ÑÑŠÐ´ÑŠÑ€Ð¶Ð° Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÐµÐ½ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚, Ð²Ñ€ÑŠÑ‰Ð°Ð¹ÐºÐ¸ ÑÐµ true Ð¸Ð»Ð¸ false, ÐºÐ°ÐºÑ‚Ð¾ Ðµ Ð¿Ð¾Ð´Ñ…Ð¾Ð´ÑÑ‰Ð¾.",
                  example: "console.log(arr.includes(1));",
                  output: "true",
                },
                {
                  name: "indexOf",
                  shortDesc:
                    "Ð¿ÑŠÑ€Ð²Ð¸ÑÑ‚ Ð¸Ð½Ð´ÐµÐºÑ Ð½Ð° ÐºÐ¾Ð½ÐºÑ€ÐµÑ‚ÐµÐ½ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚",
                  desc: "Ð’Ñ€ÑŠÑ‰Ð° Ð¿ÑŠÑ€Ð²Ð¸Ñ Ð¸Ð½Ð´ÐµÐºÑ, Ð¿Ñ€Ð¸ ÐºÐ¾Ð¹Ñ‚Ð¾ Ð´Ð°Ð´ÐµÐ½ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ð¼Ð¾Ð¶Ðµ Ð´Ð° Ð±ÑŠÐ´Ðµ Ð½Ð°Ð¼ÐµÑ€ÐµÐ½ Ð² Ð¼Ð°ÑÐ¸Ð²Ð°, Ð¸Ð»Ð¸ -1, Ð°ÐºÐ¾ Ñ‚Ð¾ Ð½Ðµ Ð¿Ñ€Ð¸ÑÑŠÑÑ‚Ð²Ð°.",
                  example: "console.log(arr.indexOf(5));",
                  output: "0",
                },
                {
                  name: "lastIndexOf",
                  shortDesc:
                    "Ð¿Ð¾ÑÐ»ÐµÐ´Ð½Ð¸Ñ Ð¸Ð½Ð´ÐµÐºÑ Ð½Ð° ÐºÐ¾Ð½ÐºÑ€ÐµÑ‚ÐµÐ½ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚",
                  desc: "Ð’Ñ€ÑŠÑ‰Ð° Ð¿Ð¾ÑÐ»ÐµÐ´Ð½Ð¸Ñ (Ð½Ð°Ð¹-Ð³Ð¾Ð»ÑÐ¼) Ð¸Ð½Ð´ÐµÐºÑ Ð½Ð° ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ð² Ð¼Ð°ÑÐ¸Ð²Ð°, Ñ€Ð°Ð²ÐµÐ½ Ð½Ð° Ð·Ð°Ð´Ð°Ð´ÐµÐ½Ð°Ñ‚Ð° ÑÑ‚Ð¾Ð¹Ð½Ð¾ÑÑ‚, Ð¸Ð»Ð¸ -1, Ð°ÐºÐ¾ Ð½Ðµ Ðµ Ð½Ð°Ð¼ÐµÑ€ÐµÐ½.",
                  example: "console.log(arr.lastIndexOf(5));",
                  output: "0",
                },
                {
                  name: "find",
                  shortDesc:
                    "Ð¿ÑŠÑ€Ð²Ð¸ÑÑ‚ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚, ÐºÐ¾Ð¹Ñ‚Ð¾ ÑƒÐ´Ð¾Ð²Ð»ÐµÑ‚Ð²Ð¾Ñ€ÑÐ²Ð° ÐµÐ´Ð½Ð¾ ÑƒÑÐ»Ð¾Ð²Ð¸Ðµ",
                  desc: "Ð’Ñ€ÑŠÑ‰Ð° Ð½Ð°Ð¼ÐµÑ€ÐµÐ½Ð°Ñ‚Ð° ÑÑ‚Ð¾Ð¹Ð½Ð¾ÑÑ‚ Ð² Ð¼Ð°ÑÐ¸Ð²Ð°, Ð°ÐºÐ¾ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ð² Ð¼Ð°ÑÐ¸Ð²Ð° ÑƒÐ´Ð¾Ð²Ð»ÐµÑ‚Ð²Ð¾Ñ€ÑÐ²Ð° Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²ÐµÐ½Ð°Ñ‚Ð° Ñ„ÑƒÐ½ÐºÑ†Ð¸Ñ Ð·Ð° Ñ‚ÐµÑÑ‚Ð²Ð°Ð½Ðµ Ð¸Ð»Ð¸ Ð½ÐµÐ´ÐµÑ„Ð¸Ð½Ð¸Ñ€Ð°Ð½Ð°, Ð°ÐºÐ¾ Ð½Ðµ Ðµ Ð½Ð°Ð¼ÐµÑ€ÐµÐ½Ð°. ÐŸÐ¾Ð´Ð¾Ð±Ð½Ð¾ Ð½Ð° <code>findIndex()</code>, Ð½Ð¾ Ð²Ñ€ÑŠÑ‰Ð° ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð° Ð²Ð¼ÐµÑÑ‚Ð¾ Ð¸Ð½Ð´ÐµÐºÑÐ°.",
                  example:
                    "let isTiny = (el) => el < 2;<br>\n          console.log(arr.find(isTiny));",
                  output: "1",
                },
                {
                  name: "findIndex",
                  shortDesc:
                    "Ð¿ÑŠÑ€Ð²Ð¸ÑÑ‚ Ð¸Ð½Ð´ÐµÐºÑ Ð½Ð° ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚, ÐºÐ¾Ð¹Ñ‚Ð¾ Ð¾Ñ‚Ð³Ð¾Ð²Ð°Ñ€Ñ Ð½Ð° Ð´Ð°Ð´ÐµÐ½Ð¾ ÑƒÑÐ»Ð¾Ð²Ð¸Ðµ",
                  desc: "Ð’Ñ€ÑŠÑ‰Ð° Ð¸Ð½Ð´ÐµÐºÑÐ° Ð½Ð° Ð¿ÑŠÑ€Ð²Ð¸Ñ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ð² Ð¼Ð°ÑÐ¸Ð²Ð°, ÐºÐ¾Ð¹Ñ‚Ð¾ ÑƒÐ´Ð¾Ð²Ð»ÐµÑ‚Ð²Ð¾Ñ€ÑÐ²Ð° Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²ÐµÐ½Ð°Ñ‚Ð° Ñ„ÑƒÐ½ÐºÑ†Ð¸Ñ Ð·Ð° Ñ‚ÐµÑÑ‚Ð²Ð°Ð½Ðµ. Ð’ Ð¿Ñ€Ð¾Ñ‚Ð¸Ð²ÐµÐ½ ÑÐ»ÑƒÑ‡Ð°Ð¹ -1 ÑÐµ Ð²Ñ€ÑŠÑ‰Ð°. ÐŸÐ¾Ð´Ð¾Ð±Ð½Ð¾ Ð½Ð° <code>find()</code>, Ð½Ð¾ Ð²Ñ€ÑŠÑ‰Ð° Ð¸Ð½Ð´ÐµÐºÑÐ° Ð²Ð¼ÐµÑÑ‚Ð¾ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð°.",
                  example:
                    "let isBig = (el) => el > 6;<br>\n          console.log(arr.findIndex(isBig));",
                  output: "2",
                },
                {
                  name: "reduce",
                  shortDesc:
                    "ÑÑ‚Ð¾Ð¹Ð½Ð¾ÑÑ‚ Ñ‡Ñ€ÐµÐ· Ð½Ð°Ð¼Ð°Ð»ÑÐ²Ð°Ð½Ðµ Ð½Ð° Ð¼Ð°ÑÐ¸Ð²Ð°, Ð·Ð°Ð¿Ð¾Ñ‡Ð½Ð¸ Ð·Ð° Ð´Ð° ÑÐ²ÑŠÑ€ÑˆÐ¸Ñˆ",
                  desc: "ÐŸÑ€Ð¸Ð»Ð°Ð³Ð°Ð¹Ñ‚Ðµ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ñ ÑÑ€ÐµÑ‰Ñƒ Ð°ÐºÑƒÐ¼ÑƒÐ»Ð°Ñ‚Ð¾Ñ€ Ð¸ Ð²ÑÑÐºÐ° ÑÑ‚Ð¾Ð¹Ð½Ð¾ÑÑ‚ Ð½Ð° Ð¼Ð°ÑÐ¸Ð²Ð° (Ð¾Ñ‚ Ð»ÑÐ²Ð¾ Ð½Ð° Ð´ÑÑÐ½Ð¾), Ð·Ð° Ð´Ð° Ð³Ð¾ Ð½Ð°Ð¼Ð°Ð»Ð¸Ñ‚Ðµ Ð´Ð¾ ÐµÐ´Ð¸Ð½Ð¸Ñ‡Ð½Ð° ÑÑ‚Ð¾Ð¹Ð½Ð¾ÑÑ‚.",
                  example:
                    "let reducer = (a, b) => a + b;<br>\n          <span>&nbsp;&nbsp;</span>console.log(arr.reduce(reducer));",
                  output: "14",
                },
                {
                  name: "reduceRight",
                  shortDesc:
                    "ÑÑ‚Ð¾Ð¹Ð½Ð¾ÑÑ‚ Ñ‡Ñ€ÐµÐ· Ð½Ð°Ð¼Ð°Ð»ÑÐ²Ð°Ð½Ðµ Ð½Ð° Ð¼Ð°ÑÐ¸Ð²Ð°, Ð·Ð°Ð²ÑŠÑ€ÑˆÐ¸ Ð·Ð° Ð´Ð° Ð·Ð°Ð¿Ð¾Ñ‡Ð½ÐµÑˆ",
                  desc: "ÐŸÑ€Ð¸Ð»Ð°Ð³Ð°Ð¹Ñ‚Ðµ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ñ ÑÑ€ÐµÑ‰Ñƒ Ð°ÐºÑƒÐ¼ÑƒÐ»Ð°Ñ‚Ð¾Ñ€ Ð¸ Ð²ÑÑÐºÐ° ÑÑ‚Ð¾Ð¹Ð½Ð¾ÑÑ‚ Ð½Ð° Ð¼Ð°ÑÐ¸Ð²Ð° (Ð¾Ñ‚ Ð´ÑÑÐ½Ð¾ Ð½Ð° Ð»ÑÐ²Ð¾), Ð·Ð° Ð´Ð° Ð³Ð¾ Ð½Ð°Ð¼Ð°Ð»Ð¸Ñ‚Ðµ Ð´Ð¾ ÐµÐ´Ð¸Ð½Ð¸Ñ‡Ð½Ð° ÑÑ‚Ð¾Ð¹Ð½Ð¾ÑÑ‚.",
                  example:
                    "[arr, [0, 1]].reduceRight((a, b) => {<br>\n          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>\n          }, [])",
                  output: "[0, 1, 5, 1, 8]",
                },
              ],
              many: [
                {
                  name: "filter",
                  shortDesc:
                    "ÑÑ‚Ð¾Ð¹Ð½Ð¾ÑÑ‚Ð¸ Ð²ÑŠÐ· Ð¾ÑÐ½Ð¾Ð²Ð° Ð½Ð° ÑÑŠÑÑ‚Ð¾ÑÐ½Ð¸Ðµ, ÐºÐ¾ÐµÑ‚Ð¾ ÑÑŠÐ·Ð´Ð°Ð²Ð°Ð¼",
                  desc: "Ð¡ÑŠÐ·Ð´Ð°Ð²Ð° Ð½Ð¾Ð² Ð¼Ð°ÑÐ¸Ð² Ñ Ð²ÑÐ¸Ñ‡ÐºÐ¸ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸ Ð½Ð° Ñ‚Ð¾Ð·Ð¸ Ð¼Ð°ÑÐ¸Ð², Ð·Ð° ÐºÐ¾Ð¸Ñ‚Ð¾ Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²ÐµÐ½Ð°Ñ‚Ð° Ñ„Ð¸Ð»Ñ‚Ñ€Ð¸Ñ€Ð°Ñ‰Ð° Ñ„ÑƒÐ½ÐºÑ†Ð¸Ñ Ð²Ñ€ÑŠÑ‰Ð° true.",
                  example:
                    "let filtered = arr.filter(el => el > 4);<br>\n          console.log(filtered)",
                  output: "[5, 8]",
                },
                {
                  name: "every",
                  shortDesc:
                    "Ð½ÐµÐ·Ð°Ð²Ð¸ÑÐ¸Ð¼Ð¾ Ð¾Ñ‚ Ñ‚Ð¾Ð²Ð° Ð´Ð°Ð»Ð¸ Ð²ÑÐµÐºÐ¸ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ð¾Ñ‚Ð³Ð¾Ð²Ð°Ñ€Ñ Ð½Ð° Ð´Ð°Ð´ÐµÐ½Ð¾ ÑƒÑÐ»Ð¾Ð²Ð¸Ðµ",
                  desc: "Ð’Ñ€ÑŠÑ‰Ð° true, Ð°ÐºÐ¾ Ð²ÑÐµÐºÐ¸ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ð² Ñ‚Ð¾Ð·Ð¸ Ð¼Ð°ÑÐ¸Ð² ÑƒÐ´Ð¾Ð²Ð»ÐµÑ‚Ð²Ð¾Ñ€ÑÐ²Ð° Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²ÐµÐ½Ð°Ñ‚Ð° Ñ„ÑƒÐ½ÐºÑ†Ð¸Ñ Ð·Ð° Ñ‚ÐµÑÑ‚Ð²Ð°Ð½Ðµ.",
                  example:
                    "let isSmall = (el) => el < 10;<br>\n          console.log(arr.every(isSmall));",
                  output: "true",
                },
                {
                  name: "some",
                  shortDesc:
                    "Ð½ÐµÐ·Ð°Ð²Ð¸ÑÐ¸Ð¼Ð¾ Ð´Ð°Ð»Ð¸ Ð¿Ð¾Ð½Ðµ ÐµÐ´Ð¸Ð½ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ð¾Ñ‚Ð³Ð¾Ð²Ð°Ñ€Ñ Ð½Ð° Ð´Ð°Ð´ÐµÐ½Ð¾ ÑƒÑÐ»Ð¾Ð²Ð¸Ðµ",
                  desc: "Ð’Ñ€ÑŠÑ‰Ð° true, Ð°ÐºÐ¾ Ð¿Ð¾Ð½Ðµ ÐµÐ´Ð¸Ð½ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ð² Ñ‚Ð¾Ð·Ð¸ Ð¼Ð°ÑÐ¸Ð² Ð¾Ñ‚Ð³Ð¾Ð²Ð°Ñ€Ñ Ð½Ð° Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²ÐµÐ½Ð°Ñ‚Ð° Ñ„ÑƒÐ½ÐºÑ†Ð¸Ñ Ð·Ð° Ñ‚ÐµÑÑ‚Ð²Ð°Ð½Ðµ.",
                  example:
                    "let biggerThan4 = (el) => el > 4;<br>\n          console.log(arr.some(biggerThan4));",
                  output: "true",
                },
              ],
            },
          },
        });
    },
    YsDL: function (e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = {
          state: {
            selectedMethod: "",
            adding: [
              {
                name: "splice",
                shortDesc: "un ou des Ã©lÃ©ments Ã  un tableau",
                desc: "Modifie le contenu d'un tableau en retirant des Ã©lÃ©ments et/ou en ajoutant de nouveaux Ã©lÃ©ments.",
                example:
                  "arr.splice(2, 0, 'tacos');<br>\n        console.log(arr);",
                output: "[5, 1, 'tacos', 8]",
              },
              {
                name: "push",
                shortDesc: "un ou des Ã©lÃ©ments Ã  la fin d'un tableau",
                desc: "Ajoute un ou plusieurs Ã©lÃ©ments Ã  la fin d'un tableau et retourne la nouvelle taille du tableau.",
                example: "arr.push(2);<br>\n        console.log(arr);",
                output: "[5, 1, 8, 2]",
              },
              {
                name: "unshift",
                shortDesc: "un ou des Ã©lÃ©ments au dÃ©but d'un tableau",
                desc: "Ajoute un ou plusieurs Ã©lÃ©ments au dÃ©but d'un tableau et renvoie la nouvelle longueur du tableau.",
                example: "arr.unshift(2, 7);<br>\n        console.log(arr);",
                output: "[2, 7, 5, 1, 8]",
              },
              {
                name: "concat",
                shortDesc:
                  "ce tableau Ã  d'autre(s) tableau(x) et/ou valeur(s)",
                desc: "Renvoie un nouveau tableau qui est le rÃ©sultat de la concatÃ©nation d'un ou plusieurs tableaux.",
                example:
                  "let arr2 = ['a', 'b', 'c'];<br>\n        let arr3 = arr.concat(arr2);<br>\n        console.log(arr3);",
                output: "[5, 1, 8, 'a', 'b', 'c']",
              },
            ],
            removing: [
              {
                name: "splice",
                shortDesc: "un ou des Ã©lÃ©ments Ã  un tableau",
                desc: "Modifie le contenu d'un tableau en retirant des Ã©lÃ©ments et/ou en ajoutant de nouveaux Ã©lÃ©ments.",
                example: "arr.splice(2, 1);<br>\n        console.log(arr);",
                output: "[5, 1]",
              },
              {
                name: "pop",
                shortDesc: "le dernier Ã©lÃ©ment d'un tableau",
                desc: "Supprime le dernier Ã©lÃ©ment d'un tableau et retourne cet Ã©lÃ©ment.",
                example: "arr.pop();<br>\n        console.log(arr);",
                output: "[5, 1]",
              },
              {
                name: "shift",
                shortDesc: "le premier Ã©lÃ©ment d'un tableau",
                desc: "Supprime le premier Ã©lÃ©ment d'un tableau et retourne cet Ã©lÃ©ment.",
                example: "arr.shift();<br>\n        console.log(arr);",
                output: "[1, 8]",
              },
              {
                name: "slice",
                shortDesc:
                  "un ou plusieurs Ã©lÃ©ments successifs, sans modifier le tableau d'origine",
                desc: "Renvoie un objet tableau, contenant une copie superficielle (shallow copy) d'une portion du tableau d'origine, la portion Ã©tant dÃ©finie par un indice de dÃ©but et un indice de fin (exclus). Le tableau original ne sera pas modifiÃ©.",
                example:
                  "let slicedArr = arr.slice(1);<br>\n        console.log(arr);<br>\n        console.log(slicedArr);",
                output: "[5, 1, 8]<br>\n        [1, 8]",
              },
            ],
            string: [
              {
                name: "join",
                shortDesc:
                  "de concatÃ©ner tous les Ã©lÃ©ments d'un tableau dans une chaÃ®ne de caractÃ¨res",
                desc: "ConcatÃ©ne tous les Ã©lÃ©ments d'un tableau dans une chaÃ®ne de caractÃ¨res et renvoie cette nouvelle chaÃ®ne de caractÃ¨res. Il est possible de concatÃ©ner tel quel ou avec un sÃ©parateur, <code>elements.join(' - ')</code> renvoie <code>foo - bar</code>",
                example: "console.log(arr.join());",
                output: '"5,1,8"',
              },
              {
                name: "toString",
                shortDesc:
                  "de retourner une chaÃ®ne de caractÃ¨res reprÃ©sentant le tableau",
                desc: "Renvoie une chaÃ®ne de caractÃ¨res reprÃ©sentant le tableau spÃ©cifiÃ© et ses Ã©lÃ©ments.",
                example: "console.log(arr.toString());",
                output: '"5,1,8"',
              },
              {
                name: "toLocaleString",
                shortDesc:
                  "de retourner une chaÃ®ne de caractÃ¨res localisÃ©e reprÃ©sentant le tableau",
                desc: "Cette mÃ©thode est un peu touchy. Renvoie une chaÃ®ne de caractÃ¨res localisÃ©e reprÃ©sentant le tableau spÃ©cifiÃ© et ses Ã©lÃ©ments. C'est vraiment utile pour les dates et les devises ! Le mieux est de consulter la documentation quand on souhaite l'utiliser car certains comportements sont Ã©tranges.",
                example:
                  "let date = [new Date()];<br>\n        arr.toLocaleString();<br>\n        date.toLocaleString();<br>\n        console.log(arr, date);",
                output: '"5,1,8 12/26/2017, 6:54:49 PM"',
              },
            ],
            ordering: [
              {
                name: "reverse",
                shortDesc: "d'inverser l'ordre d'un tableau",
                desc: "Inverse l'ordre d'un tableau : le premier Ã©lÃ©ment devient le dernier et le dernier devient le premier et ainsi de suite.",
                example: "arr.reverse();<br>\n        console.log(arr);",
                output: "[8, 1, 5]",
              },
              {
                name: "sort",
                shortDesc: "de trier les Ã©lÃ©ments d'un tableau",
                desc: "Trie les Ã©lÃ©ments d'un tableau, dans ce mÃªme tableau, et renvoie le tableau.",
                example: "arr.sort();<br>\n        console.log(arr);",
                output: "[1, 5, 8]",
              },
            ],
            other: [
              {
                name: "length",
                shortDesc: "de trouver la taille d'un tableau",
                desc: "Retourne le nombre d'Ã©lÃ©ments prÃ©sents dans le tableau.",
                example: "console.log(arr.length);",
                output: "3",
              },
              {
                name: "fill",
                shortDesc:
                  "de remplir tous les Ã©lÃ©ments d'un tableau avec une valeur statique",
                desc: "Remplit tous les Ã©lÃ©ments d'un tableau entre deux indices avec une valeur statique.",
                example: "arr.fill(2);<br>\n        console.log(arr);",
                output: "[2, 2, 2]",
              },
              {
                name: "copyWithin",
                shortDesc: "de copier une partie d'un tableau",
                desc: "Effectue une copie superficielle (shallow copy) d'une partie d'un tableau sur ce mÃªme tableau et le renvoie, sans modifier sa taille.",
                example: "arr.copyWithin(1);<br>\n        console.log(arr);",
                output: "[5, 5, 1]",
              },
            ],
            iterate: [
              {
                name: "forEach",
                shortDesc: "exÃ©cutant une fonction sur chaque Ã©lÃ©ment",
                desc: "ExÃ©cute une fonction donnÃ©e sur chaque Ã©lÃ©ment du tableau.",
                example:
                  "arr.forEach((element) => {<br>\n        <span>&nbsp;&nbsp;</span>console.log(element)<br>\n        });",
                output: "5<br>\n        1<br>\n        8",
              },
              {
                name: "map",
                shortDesc:
                  "crÃ©ant un nouveau tableau depuis chaque Ã©lÃ©ment via une fonction",
                desc: "CrÃ©e un nouveau tableau composÃ© des rÃ©sultats d'une fonction donnÃ©e en argument sur chaque Ã©lÃ©ment du tableau.",
                example:
                  "let map = arr.map(x => x + 1);<br>\n        console.log(map);",
                output: "[6, 2, 9]",
              },
              {
                name: "entries",
                shortDesc: "crÃ©ant un objet Array Iterator",
                desc: "Renvoie un nouvel objet de type Array Iterator qui contient le couple clef/valeur pour chaque Ã©lÃ©ment du tableau. Il y a beaucoup de cas d'utilisation des iterators, mais aussi les autres mÃ©thodes Ã  utiliser comme <code>values</code> et <code>keys</code>",
                example:
                  "let iterator = arr.entries();<br>\n        console.log(iterator.next().value);",
                output:
                  '[0, 5]<br>\n        <span class="comment">// the 0 is the index,</span><br>\n        <span class="comment">// the 5 is the first number</span>',
              },
            ],
            find: {
              single: [
                {
                  name: "includes",
                  shortDesc: "si un Ã©lÃ©ment existe",
                  desc: "Permet de dÃ©terminer si un tableau contient un Ã©lÃ©ment et renvoie <code>true</code> si c'est le cas, <code>false</code> sinon.",
                  example: "console.log(arr.includes(1));",
                  output: "true",
                },
                {
                  name: "indexOf",
                  shortDesc: "le premier indice d'un Ã©lÃ©ment en particulier",
                  desc: "Renvoie le premier indice pour lequel on trouve un Ã©lÃ©ment donnÃ© dans un tableau. Si l'Ã©lÃ©ment cherchÃ© n'est pas prÃ©sent dans le tableau, la mÃ©thode renverra -1.",
                  example: "console.log(arr.indexOf(5));",
                  output: "0",
                },
                {
                  name: "lastIndexOf",
                  shortDesc: "le dernier indice d'un Ã©lÃ©ment en particulier",
                  desc: "Permet de renvoyer le dernier indice pour lequel une valeur donnÃ©e est prÃ©sente dans un tableau. Si la valeur recherchÃ©e n'est pas prÃ©sente, le rÃ©sultat sera -1.",
                  example: "console.log(arr.lastIndexOf(5));",
                  output: "0",
                },
                {
                  name: "find",
                  shortDesc: "le premier Ã©lÃ©ment qui respecte une condition",
                  desc: "Renvoie la valeur du premier Ã©lÃ©ment trouvÃ© dans le tableau qui respecte la condition donnÃ©e par la fonction de test passÃ©e en argument. Sinon, la valeur <code>undefined</code> est renvoyÃ©e. Similaire Ã  <code>findIndex()</code>, mais retourne l'Ã©lÃ©ment au lieu de l'indice.",
                  example:
                    "let isTiny = (el) => el < 2;<br>\n          console.log(arr.find(isTiny));",
                  output: "1",
                },
                {
                  name: "findIndex",
                  shortDesc: "le premier indice qui respecte une condition",
                  desc: "Renvoie l'indice du premier Ã©lÃ©ment du tableau qui satisfait une condition donnÃ©e par une fonction. Si la fonction renvoie <code>false</code> pour tous les Ã©lÃ©ments du tableau, le rÃ©sultat vaut -1. Similaire Ã  <code>find()</code>, mais retourne l'indice au lieu de l'Ã©lÃ©ment.",
                  example:
                    "let isBig = (el) => el > 6;<br>\n          console.log(arr.findIndex(isBig));",
                  output: "2",
                },
                {
                  name: "reduce",
                  shortDesc:
                    "une valeur en rÃ©duisant le tableau, du dÃ©but Ã  la fin",
                  desc: "Applique une fonction qui est un accumulateur et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la rÃ©duire Ã  une seule valeur.",
                  example:
                    "let reducer = (a, b) => a + b;<br>\n          <span>&nbsp;&nbsp;</span>console.log(arr.reduce(reducer));",
                  output: "14",
                },
                {
                  name: "reduceRight",
                  shortDesc:
                    "une valeur en rÃ©duisant le tableau, de la fin au dÃ©but",
                  desc: "Applique une fonction qui est un accumulateur et qui traite chaque valeur d'une liste (de la droite vers la gauche) afin de la rÃ©duire Ã  une seule valeur.",
                  example:
                    "[arr, [0, 1]].reduceRight((a, b) => {<br>\n          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>\n          }, [])",
                  output: "[0, 1, 5, 1, 8]",
                },
              ],
              many: [
                {
                  name: "filter",
                  shortDesc: "des Ã©lÃ©ments basÃ©s sur une condition",
                  desc: "CrÃ©e et retourne un nouveau tableau contenant tous les Ã©lÃ©ments du tableau d'origine qui remplissent une condition dÃ©terminÃ©e par la fonction callback.",
                  example:
                    "let filtered = arr.filter(el => el > 4);<br>\n          console.log(filtered)",
                  output: "[5, 8]",
                },
                {
                  name: "every",
                  shortDesc:
                    "si oui ou non tous les Ã©lÃ©ments respectent une condition",
                  desc: "Permet de tester si tous les Ã©lÃ©ments d'un tableau vÃ©rifient une condition donnÃ©e par une fonction en argument.",
                  example:
                    "let isSmall = (el) => el < 10;<br>\n          console.log(arr.every(isSmall));",
                  output: "true",
                },
                {
                  name: "some",
                  shortDesc:
                    "si oui ou non au moins un Ã©lÃ©ment respecte une condition",
                  desc: "Teste si au moins un Ã©lÃ©ment du tableau passe le test implÃ©mentÃ© par la fonction fournie.",
                  example:
                    "let biggerThan4 = (el) => el > 4;<br>\n          console.log(arr.some(biggerThan4));",
                  output: "true",
                },
              ],
            },
          },
        });
    },
    cACW: function (e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = {
          state: {
            selectedMethod: "",
            adding: [
              {
                name: "splice",
                shortDesc: "element/s to an array",
                desc: "Adds and/or removes elements from an array.",
                example:
                  "arr.splice(2, 0, 'tacos');<br>\n        console.log(arr);",
                output: "[5, 1, 'tacos', 8]",
              },
              {
                name: "push",
                shortDesc: "elements to the end of an array",
                desc: "Adds one or more elements to the end of an array and returns the new length of the array.",
                example: "arr.push(2);<br>\n        console.log(arr);",
                output: "[5, 1, 8, 2]",
              },
              {
                name: "unshift",
                shortDesc: "elements to the front of an array",
                desc: "Adds one or more elements to the front of an array and returns the new length of the array.",
                example: "arr.unshift(2, 7);<br>\n        console.log(arr);",
                output: "[2, 7, 5, 1, 8]",
              },
              {
                name: "concat",
                shortDesc: "this array to other array(s) and/or value(s)",
                desc: "Returns a new array comprised of this array joined with other array(s) and/or value(s).",
                example:
                  "let arr2 = ['a', 'b', 'c'];<br>\n        let arr3 = arr.concat(arr2);<br>\n        console.log(arr3);",
                output: "[5, 1, 8, 'a', 'b', 'c']",
              },
            ],
            removing: [
              {
                name: "splice",
                shortDesc: "element/s from an array",
                desc: "Adds and/or removes elements from an array.",
                example: "arr.splice(2, 1);<br>\n        console.log(arr);",
                output: "[5, 1]",
              },
              {
                name: "pop",
                shortDesc: "the last element of the array",
                desc: "Removes the last element from an array and returns that element.",
                example: "arr.pop();<br>\n        console.log(arr);",
                output: "[5, 1]",
              },
              {
                name: "shift",
                shortDesc: "the first element of the array",
                desc: "Removes the first element from an array and returns that element.",
                example: "arr.shift();<br>\n        console.log(arr);",
                output: "[1, 8]",
              },
              {
                name: "slice",
                shortDesc:
                  "one or more elements in order for use, leaving the array as is",
                desc: "The <code>slice()</code> method returns a shallow copy of a portion of an array into a new array object. You can specify either just the beginning element (where end will default to the arrays length) or both the beginning and the end, comma-separated. The original array will not be modified.",
                example:
                  "let slicedArr = arr.slice(1);<br>\n        console.log(arr);<br>\n        console.log(slicedArr);",
                output: "[5, 1, 8]<br>\n        [1, 8]",
              },
            ],
            string: [
              {
                name: "join",
                shortDesc: "join all elements of the array into a string",
                desc: "Joins all elements of an array into a string. You can join it together as is or with something in between, <code>elements.join(' -\n          ')</code> gives you <code>foo-bar</code>",
                example: "console.log(arr.join());",
                output: '"5,1,8"',
              },
              {
                name: "toString",
                shortDesc: "return a string representing the array.",
                desc: "Returns a string representing the array and its elements.",
                example: "console.log(arr.toString());",
                output: '"5,1,8"',
              },
              {
                name: "toLocaleString",
                shortDesc: "return a localized string representing the array.",
                desc: "This one is a bit wacko. Returns a localized string representing the array and its elements. This is very useful for dates and currency and has some strange native abstractions, so best to consult the docs when using it",
                example:
                  "let date = [new Date()];<br>\n        const arrString = arr.toLocaleString();<br>\n        const dateString = date.toLocaleString();<br>\n        console.log(arrString, dateString);",
                output: '"5,1,8 12/26/2017, 6:54:49 PM"',
              },
            ],
            ordering: [
              {
                name: "reverse",
                shortDesc: "reverse the order of the array",
                desc: "Reverses the order of the elements of an array in place â€” the first becomes the last, and the last becomes the first.",
                example: "arr.reverse();<br>\n        console.log(arr);",
                output: "[8, 1, 5]",
              },
              {
                name: "sort",
                shortDesc: "sort the items of the array",
                desc: 'Sorts the elements of an array in place and returns the array.<br>\n        <br>\n        <strong>Important note:</strong> If compareFunction is not supplied, elements are sorted by converting them to strings and comparing strings in Unicode code point order. For example, "Banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in Unicode order. The docs have more information to clarify.',
                example: "arr.sort();<br>\n        console.log(arr);",
                output: "[1, 5, 8]",
              },
            ],
            other: [
              {
                name: "length",
                shortDesc: "find the length of the array",
                desc: "Returns the number of elements in that array.",
                example: "console.log(arr.length);",
                output: "3",
              },
              {
                name: "fill",
                shortDesc:
                  "fill all the elements of the array with a static value",
                desc: "Fills all the elements of an array from a start index to an end index with a static value.",
                example: "arr.fill(2);<br>\n        console.log(arr);",
                output: "[2, 2, 2]",
              },
              {
                name: "copyWithin",
                shortDesc:
                  "copy a sequence of array elements within the array.",
                desc: "Copies a sequence of array elements within the array. You can specify either just the ending element (where begin will default to zero) or both the beginning and the end, comma-separated.",
                example: "arr.copyWithin(1);<br>\n        console.log(arr);",
                output: "[5, 5, 1]",
              },
            ],
            iterate: [
              {
                name: "forEach",
                shortDesc:
                  "executing a function I will create for each element",
                desc: "The forEach() method executes a provided function once for each array element.",
                example:
                  "arr.forEach((element) => {<br>\n        <span>&nbsp;&nbsp;</span>console.log(element)<br>\n        });",
                output: "5<br>\n        1<br>\n        8",
              },
              {
                name: "map",
                shortDesc:
                  "creating a new array from each element with a function I create",
                desc: "Creates a new array with the results of calling a provided function on every element in this array.",
                example:
                  "let map = arr.map(x => x + 1);<br>\n        console.log(map);",
                output: "[6, 2, 9]",
              },
              {
                name: "entries",
                shortDesc: "creating an iterator object",
                desc: "Returns a new Array Iterator object that contains the key/value pairs for each index in the array. There are a lot of uses for iterators, as well as other methods used with it in conjuction, like <code>values</code> and <code>keys</code>",
                example:
                  "let iterator = arr.entries();<br>\n        console.log(iterator.next().value);",
                output:
                  '[0, 5]<br>\n        <span class="comment">// the 0 is the index,</span><br>\n        <span class="comment">// the 5 is the first number</span>',
              },
            ],
            find: {
              single: [
                {
                  name: "includes",
                  shortDesc: "out if a certain element exists",
                  desc: "Determines whether an array contains a certain element, returning true or false as appropriate.",
                  example: "console.log(arr.includes(1));",
                  output: "true",
                },
                {
                  name: "indexOf",
                  shortDesc: "the first index of a particular item",
                  desc: "Returns the first index at which a given element can be found in the array, or -1 if it is not present.",
                  example: "console.log(arr.indexOf(5));",
                  output: "0",
                },
                {
                  name: "lastIndexOf",
                  shortDesc: "the last index of a particular item",
                  desc: "Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.",
                  example: "console.log(arr.lastIndexOf(5));",
                  output: "0",
                },
                {
                  name: "find",
                  shortDesc: "the first element that satisfies a condition",
                  desc: "Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found. Similar to <code>findIndex()</code>, but it returns the item instead of the index.",
                  example:
                    "let isTiny = (el) => el < 2;<br>\n          console.log(arr.find(isTiny));",
                  output: "1",
                },
                {
                  name: "findIndex",
                  shortDesc:
                    "the first index of an item that satisfies a condition",
                  desc: "Returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned. Similar to <code>find()</code>, but it returns the index instead of the item.",
                  example:
                    "let isBig = (el) => el > 6;<br>\n          console.log(arr.findIndex(isBig));",
                  output: "2",
                },
                {
                  name: "reduce",
                  shortDesc: "a value by reducing the Array, start to finish",
                  desc: "Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.",
                  example:
                    "let reducer = (a, b) => a + b;<br>\n          <span>&nbsp;&nbsp;</span>console.log(arr.reduce(reducer));",
                  output: "14",
                },
                {
                  name: "reduceRight",
                  shortDesc: "a value by reducing the Array, finish to start",
                  desc: "Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.",
                  example:
                    "[arr, [0, 1]].reduceRight((a, b) => {<br>\n          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>\n          }, [])",
                  output: "[0, 1, 5, 1, 8]",
                },
              ],
              many: [
                {
                  name: "filter",
                  shortDesc: "values based on a condition I create",
                  desc: "Creates a new array with all of the elements of this array for which the provided filtering function returns true.",
                  example:
                    "let filtered = arr.filter(el => el > 4);<br>\n          console.log(filtered)",
                  output: "[5, 8]",
                },
                {
                  name: "every",
                  shortDesc: "whether or not every item satisfies a condition",
                  desc: "Returns true if every element in this array satisfies the provided testing function.",
                  example:
                    "let isSmall = (el) => el < 10;<br>\n          console.log(arr.every(isSmall));",
                  output: "true",
                },
                {
                  name: "some",
                  shortDesc:
                    "whether or not at least one item satisfies a condition",
                  desc: "Returns true if at least one element in this array satisfies the provided testing function.",
                  example:
                    "let biggerThan4 = (el) => el > 4;<br>\n          console.log(arr.some(biggerThan4));",
                  output: "true",
                },
              ],
            },
          },
        });
    },
    dLso: function (e, a) {
      e.exports = {
        short: "de",
        long: "German",
        createdBy: "bahe007 and AWolf81",
      };
    },
    lx7K: function (e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = {
          state: {
            selectedMethod: "",
            adding: [
              {
                name: "splice",
                shortDesc: "elemento/s en un array",
                desc: "AÃ±ade y/o elimina elementos de un array.",
                example:
                  "arr.splice(2, 0, 'tacos');<br>\n                console.log(arr);",
                output: "[5, 1, 'tacos', 8]",
              },
              {
                name: "push",
                shortDesc: "elementos al final de un array",
                desc: "AÃ±ade uno o mÃ¡s elementos al final de un array y devuelve la nueva longitud del array.",
                example: "arr.push(2);<br>\n                console.log(arr);",
                output: "[5, 1, 8, 2]",
              },
              {
                name: "unshift",
                shortDesc: "elementos al principio de un array",
                desc: "AÃ±ade uno o mÃ¡s elementos al principio de un array y devuelve la nueva longitud del array.",
                example:
                  "arr.unshift(2, 7);<br>\n                console.log(arr);",
                output: "[2, 7, 5, 1, 8]",
              },
              {
                name: "concat",
                shortDesc: "este array con otro(s) array(s) y/o valor(es)",
                desc: "Devuelve un nuevo array compuesto por este array unido a otro(s) array(s) y/o valor(es).",
                example:
                  "let arr2 = ['a', 'b', 'c'];<br>\n                let arr3 = arr.concat(arr2);<br>\n                console.log(arr);",
                output: "[5, 1, 8, 'a', 'b', 'c']",
              },
            ],
            removing: [
              {
                name: "splice",
                shortDesc: "elemento/s en un array",
                desc: "AÃ±ade y/o elimina elementos de un array.",
                example:
                  "arr.splice(2, 1);<br>\n                console.log(arr);",
                output: "[5, 1]",
              },
              {
                name: "pop",
                shortDesc: "el Ãºltimo elemento del array",
                desc: "Elimina el Ãºltimo elemento de un array y lo devuelve.",
                example: "arr.pop();<br>\n                console.log(arr);",
                output: "[5, 1]",
              },
              {
                name: "shift",
                shortDesc: "el primer elemento del array",
                desc: "Elimina el primer elemento de un array y lo devuelve.",
                example: "arr.shift();<br>\n                console.log(arr);",
                output: "[1, 8]",
              },
              {
                name: "slice",
                shortDesc:
                  "uno o mÃ¡s elementos en orden de uso, dejando el array como estÃ¡",
                desc: "El mÃ©todo <code>slice()</code> devuelve una copia de una parte del array dentro de un nuevo array. Puede especificar sÃ³lo el elemento final (donde el inicio serÃ¡ cero) o el principio y el final separados por comas. El array original no se modificarÃ¡.",
                example:
                  "let slicedArr = arr.slice(1);<br>\n                console.log(arr);<br>\n                console.log(slicedArr);",
                output: "[5, 1, 8]<br>\n                [1, 8]",
              },
            ],
            string: [
              {
                name: "join",
                shortDesc: "unir todos los elementos del array en una cadena",
                desc: "Une todos los elementos de un array en una cadena. Puede unirlo como estÃ¡ o con algo intermedio (un separador), <code>elements.join(' - ')</code> le da <code>foo - bar</code>",
                example: "arr.join();<br>\n                console.log(arr);",
                output: '"5,1,8"',
              },
              {
                name: "toString",
                shortDesc:
                  "devolver una cadena de caracteres representando el array.",
                desc: "Devuelve una cadena de caracteres que representa el array y sus elementos.",
                example:
                  "arr.toString();<br>\n                console.log(arr);",
                output: '"5,1,8"',
              },
              {
                name: "toLocaleString",
                shortDesc:
                  "devolver la representaciÃ³n del array como una cadena utilizando la configuraciÃ³n regional.",
                desc: "Este es un poco loco. Devuelve la representaciÃ³n del array como una cadena utilizando la configuraciÃ³n regional. Esto es muy Ãºtil para fechas y moneda y tiene algunas extraÃ±as abstracciones nativas, por lo que es mejor consultar los documentos al utilizarlo.",
                example:
                  "let date = [new Date()];<br>\n                const arrString = arr.toLocaleString();<br>\n                const dateString = date.toLocaleString();<br>\n                console.log(arrString, dateString);",
                output: '"5,1,8 12/26/2017, 6:54:49 PM"',
              },
            ],
            ordering: [
              {
                name: "reverse",
                shortDesc: "invertir el orden del array",
                desc: "Invierte el orden de los elementos de un array - el primero se convierte en el Ãºltimo, y el Ãºltimo en el primero.",
                example:
                  "arr.reverse();<br>\n                console.log(arr);",
                output: "[8, 1, 5]",
              },
              {
                name: "sort",
                shortDesc: "ordenar los elementos del array",
                desc: "Ordena los elementos de un array y lo devuelve.",
                example: "arr.sort();<br>\n                console.log(arr);",
                output: "[1, 5, 8]",
              },
            ],
            other: [
              {
                name: "length",
                shortDesc: "encontrar la longitud del array",
                desc: "Devuelve el nÃºmero de elementos en ese array.",
                example: "console.log(arr.length);",
                output: "3",
              },
              {
                name: "fill",
                shortDesc:
                  "llenar todos los elementos del array con un valor estÃ¡tico",
                desc: "Llena todos los elementos de un array desde un Ã­ndice inicial hasta un Ã­ndice final con un valor estÃ¡tico.",
                example: "arr.fill(2);<br>\n                console.log(arr);",
                output: "[2, 2, 2]",
              },
              {
                name: "copyWithin",
                shortDesc:
                  "copiar una secuencia de elementos del array dentro del array.",
                desc: "Copia una secuencia de elementos del array dentro del array. Puede especificar sÃ³lo el elemento final (donde el inicio serÃ¡ cero) o el principio y el final separados por comas.",
                example:
                  "arr.copyWithin(1);<br>\n                console.log(arr);",
                output: "[5, 5, 1]",
              },
            ],
            iterate: [
              {
                name: "forEach",
                shortDesc: "ejecutar una funciÃ³n creada para cada elemento",
                desc: "El mÃ©todo forEach() ejecuta una funciÃ³n determinada para cada elemento del array.",
                example:
                  "arr.forEach((element) => {<br>\n                <span>&nbsp;&nbsp;</span>console.log(element)<br>\n                });",
                output: "5<br>\n                1<br>\n                8",
              },
              {
                name: "map",
                shortDesc:
                  "crear un nuevo array a partir de cada elemento con una funciÃ³n creada por el usuario",
                desc: "Crea un nuevo array con los resultados de la llamada a la funciÃ³n indicada aplicados a cada uno de sus elementos.",
                example:
                  "let map = arr.map(x => x + 1);<br>\n                console.log(map);",
                output: "[6, 2, 9]",
              },
              {
                name: "entries",
                shortDesc: "crear un objeto iterador",
                desc: "Devuelve un nuevo objeto Array Iterator que contiene los pares clave/valor para cada Ã­ndice de la matriz. Hay muchos usos para los iteradores, asÃ­ como otros mÃ©todos utilizados con ellos en conjunto, como <code>values</code> y <code>keys</code>.",
                example:
                  "let iterator = arr.entries();<br>\n                console.log(iterator.next().value);",
                output:
                  '[0, 5]<br>\n                <span class="comment">// the 0 is the index,</span><br>\n                <span class="comment">// the 5 is the first number</span>',
              },
            ],
            find: {
              single: [
                {
                  name: "includes",
                  shortDesc: "si existe un elemento determinado",
                  desc: "Determina si un array contiene un elemento determinado, devolviendo verdadero o falso segÃºn corresponda.",
                  example: "console.log(arr.includes(1));",
                  output: "true",
                },
                {
                  name: "indexOf",
                  shortDesc:
                    "el primer Ã­ndice en el que se puede encontrar un elemento",
                  desc: "Devuelve el primer Ã­ndice en el que se puede encontrar un elemento dado en el array, o -1 si no estÃ¡ presente.",
                  example: "console.log(arr.indexOf(5));",
                  output: "0",
                },
                {
                  name: "lastIndexOf",
                  shortDesc:
                    "el ultimo Ã­ndice en el que se puede encontrar un elemento",
                  desc: "Devuelve el Ãºltimo Ã­ndice (mÃ¡ximo) de un elemento dentro del array igual al valor especificado, o -1 si no se encuentra ninguno.",
                  example: "console.log(arr.indexOf(5));",
                  output: "0",
                },
                {
                  name: "find",
                  shortDesc: "el primer elemento que satisface una condiciÃ³n",
                  desc: "Devuelve el valor encontrado en el array, si un elemento del array satisface la funciÃ³n de prueba provista o undefined si no se encuentra. Similar a <code>findIndex()</code>, pero devuelve el Ã­tem en lugar del Ã­ndice.",
                  example:
                    "let isTiny = (el) => el < 2;<br>\n                    console.log(arr.find(isTiny));",
                  output: "1",
                },
                {
                  name: "findIndex",
                  shortDesc:
                    "el primer Ã­ndice de un artÃ­culo que satisface una condiciÃ³n",
                  desc: "Devuelve el Ã­ndice del primer elemento del array que satisface la funciÃ³n de prueba proporcionada. De lo contrario, se devuelve -1. Similar a <code>find()</code>, pero devuelve el Ã­ndice en lugar del elemento.",
                  example:
                    "let isBig = (el) => el > 6;<br>\n                    console.log(arr.findIndex(isBig));",
                  output: "2",
                },
                {
                  name: "reduce",
                  shortDesc:
                    "un valor para reducir el Array, de principio a fin",
                  desc: "Aplica una funciÃ³n a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un Ãºnico valor.",
                  example:
                    "let reducer = (a, b) => a + b;<br>\n                    <span>&nbsp;&nbsp;</span>console.log(arr.reduce(reducer));",
                  output: "14",
                },
                {
                  name: "reduceRight",
                  shortDesc:
                    "un valor para reducir el Array, de fin a principio",
                  desc: "Aplica una funciÃ³n a un acumulador y a cada valor de un array (de derecha a izquierda) para reducirlo a un Ãºnico valor.",
                  example:
                    "[arr, [0, 1]].reduceRight((a, b) => {<br>\n                      <span>&nbsp;&nbsp;</span>return a.concat(b)<br>\n                      }, [])",
                  output: "[0, 1, 5, 1, 8]",
                },
              ],
              many: [
                {
                  name: "filter",
                  shortDesc: "valores basados en una condiciÃ³n que usted crea",
                  desc: "Crea un nuevo array con todos los elementos de este array para el cual la funciÃ³n de filtrado proporcionada devuelve true.",
                  example:
                    "let filtered = arr.filter(el => el > 4);<br>\n                    console.log(filtered)",
                  output: "[5, 8]",
                },
                {
                  name: "every",
                  shortDesc: "si cada elemento satisface o no una condiciÃ³n",
                  desc: "Devuelve true si cada elemento de este array satisface la funciÃ³n de prueba proporcionada.",
                  example:
                    "let isSmall = (el) => el < 10;<br>\n                    console.log(arr.every(isSmall));",
                  output: "true",
                },
                {
                  name: "some",
                  shortDesc:
                    "si un elemento cumple o no al menos una condiciÃ³n",
                  desc: "Devuelve true si al menos un elemento de este array satisface la funciÃ³n de prueba proporcionada.",
                  example:
                    "let biggerThan4 = (el) => el > 4;<br>\n                    console.log(arr.some(biggerThan4));",
                  output: "true",
                },
              ],
            },
          },
        });
    },
    mJJP: function (e, a) {
      e.exports = { short: "en", long: "English", createdBy: "sdras" };
    },
    oBQB: function (e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = {
          state: {
            selectedMethod: "",
            adding: [
              {
                name: "splice",
                shortDesc: "element/en aan een array",
                desc: "Voegt een element toe aan een array of verwijderd een element van een array.",
                example:
                  "arr.splice(2, 0, 'tacos');<br>\n        console.log(arr);",
                output: "[5, 1, 'tacos', 8]",
              },
              {
                name: "push",
                shortDesc: "element aan het einde van een array",
                desc: "Voegt een of meerdere elementen toe aan het einde van een array en geeft de nieuwe lengte van de array terug.",
                example: "arr.push(2);<br>\n        console.log(arr);",
                output: "[5, 1, 8, 2]",
              },
              {
                name: "unshift",
                shortDesc: "element aan het begin van een array",
                desc: "Voegt een of meerdere elementen toe aan het begin van een array en geeft de nieuwe lengte van de array terug.",
                example: "arr.unshift(2, 7);<br>\n        console.log(arr);",
                output: "[2, 7, 5, 1, 8]",
              },
              {
                name: "concat",
                shortDesc:
                  "deze array aan (een) andere array(s) en/of waarde(s)",
                desc: "Geeft een nieuwe array terug bestaande uit deze array samengevoegd met andere array(s) en/of waarde(s).",
                example:
                  "let arr2 = ['a', 'b', 'c'];<br>\n        let arr3 = arr.concat(arr2);<br>\n        console.log(arr3);",
                output: "[5, 1, 8, 'a', 'b', 'c']",
              },
            ],
            removing: [
              {
                name: "splice",
                shortDesc: "element/en van een array",
                desc: "Voegt een element toe aan een array of verwijderd een element van een array.",
                example: "arr.splice(2, 1);<br>\n        console.log(arr);",
                output: "[5, 1]",
              },
              {
                name: "pop",
                shortDesc: "laatste element van een array",
                desc: "Verwijderd het laatste element van een array en geeft dat element terug.",
                example: "arr.pop();<br>\n        console.log(arr);",
                output: "[5, 1]",
              },
              {
                name: "shift",
                shortDesc: "the first element of the array",
                shortDesc: "het eerste element van een array",
                desc: "Verwijderd het eerste element van een array and geeft dat element terug.",
                example: "arr.shift();<br>\n        console.log(arr);",
                output: "[1, 8]",
              },
              {
                name: "slice",
                shortDesc:
                  "een of meerdere elementen in de huidige volgorde, zonder dat de array wordt aangepast,",
                desc: "De <code>slice()</code> methode geeft een kopie van een gedeelte van de array terug in een nieuwe array. Je kan kiezen  voor het laatste element (standaard is 0) opgeven of zowel het begin als einde opgeven, gescheiden met een komma. De orginele array wordt niet aangepast.",
                example:
                  "let slicedArr = arr.slice(1);<br>\n        console.log(arr);<br>\n        console.log(slicedArr);",
                output: "[5, 1, 8]<br>\n        [1, 8]",
              },
            ],
            string: [
              {
                name: "join",
                shortDesc:
                  "alle elementen van een array samenvoegen als string",
                desc: "Voegt alle elementen van een array samen tot een string. Je kan het samenvoegen zoals het is of met iets er tussen, <code>elements.join(' - ')</code> gives you <code>foo-bar</code>.",
                example: "console.log(arr.join());",
                output: '"5,1,8"',
              },
              {
                name: "toString",
                shortDesc: "een array weergeven als string",
                desc: "Geeft de array en de elementen daarvan weer als string.",
                example: "console.log(arr.toString());",
                output: '"5,1,8"',
              },
              {
                name: "toLocaleString",
                shortDesc: "return a localized string representing the array.",
                shortDesc: "een array weergeven als taal string",
                desc: "Dit is een gekke. Deze functie geeft de array en de elementen daarvan weer als een taal string. Dit kan heel nuttig zijn voor datums en valuta en heeft wat vreemde abstracties, dus het beste is om de documentatie te raadplegen wanneer je deze functie gebruikt.",
                example:
                  "let date = [new Date()];<br>\n        const arrString = arr.toLocaleString();<br>\n        const dateString = date.toLocaleString();<br>\n        console.log(arrString, dateString);",
                output: '"5,1,8 12/26/2017, 6:54:49 PM"',
              },
            ],
            ordering: [
              {
                name: "reverse",
                shortDesc: "de volgorde van een array omkeren",
                desc: "Keert de volgorde van de elementen in een array om waar het eerste element het laatste element wordt en vice versa.",
                example: "arr.reverse();<br>\n        console.log(arr);",
                output: "[8, 1, 5]",
              },
              {
                name: "sort",
                shortDesc: "elementen van een array sorteren",
                desc: "Sorteert de elementen van een array en geeft de array vervolgens terug.",
                example: "arr.sort();<br>\n        console.log(arr);",
                output: "[1, 5, 8]",
              },
            ],
            other: [
              {
                name: "length",
                shortDesc: "de lengte van een array vinden",
                desc: "Geeft het aantal elementen in een array terug.",
                example: "console.log(arr.length);",
                output: "3",
              },
              {
                name: "fill",
                shortDesc:
                  "Alle elementen van een array vullen met een statische waarde",
                desc: "Vult alle elementen van een array met een statische waarde.",
                example: "arr.fill(2);<br>\n        console.log(arr);",
                output: "[2, 2, 2]",
              },
              {
                name: "copyWithin",
                shortDesc:
                  "een kopie van de volgorde van array elementen maken binnen de array",
                desc: "Maakt een kopie van de volgorde van array elementen binnen de array. Je kan er voor kiezen om het eind element te kiezen (Waar het begin standaard 0 is) of zowel begin tot eind te kiezen, met een komma gescheiden. ",
                example: "arr.copyWithin(1);<br>\n        console.log(arr);",
                output: "[5, 5, 1]",
              },
            ],
            iterate: [
              {
                name: "forEach",
                shortDesc: "een functie uit te voeren voor elk element",
                desc: "De forEach() methode voert eenmalig een functie uit voor elk element in de array.",
                example:
                  "arr.forEach((element) => {<br>\n        <span>&nbsp;&nbsp;</span>console.log(element)<br>\n        });",
                output: "5<br>\n        1<br>\n        8",
              },
              {
                name: "map",
                shortDesc:
                  "een nieuwe array te maken van elk element met een functie die uitgevoerd wordt",
                desc: "Maakt een nieuwe array aan met het resultaat van de uitgevoerde functie van elk element in de array.",
                example:
                  "let map = arr.map(x => x + 1);<br>\n        console.log(map);",
                output: "[6, 2, 9]",
              },
              {
                name: "entries",
                shortDesc: "een iteratie object aan te maken",
                desc: "Geeft een nieuw array iteratie object terug dat de sleutel/waarde koppelt voor elke index in de array. Er is veel mogelijk met intereren, in samenwerking met andere methodes, zoals ook  <code>values</code> en <code>keys</code>.",
                example:
                  "let iterator = arr.entries();<br>\n        console.log(iterator.next().value);",
                output:
                  '[0, 5]<br>\n        <span class="comment">// the 0 is the index,</span><br>\n        <span class="comment">// the 5 is the first number</span>',
              },
            ],
            find: {
              single: [
                {
                  name: "includes",
                  shortDesc: "of een element bestaat in de array",
                  desc: "Bepaald of een array een bepaald element bevat, en geeft vervolgens true of false terug voor de uitkomst.",
                  example: "console.log(arr.includes(1));",
                  output: "true",
                },
                {
                  name: "indexOf",
                  shortDesc: "de eerste index van een bepaald element",
                  desc: "Geeft de eerst komende index terug van het gegeven element, of geeft -1 terug als het element niet gevonden kan worden.",
                  example: "console.log(arr.indexOf(5));",
                  output: "0",
                },
                {
                  name: "lastIndexOf",
                  shortDesc: "de laatste index van een bepaald element",
                  desc: "Geeft de laatst mogelijke index terug van het gegeven element, of geeft -1 terug als het element niet gevonden kan worden.",
                  example: "console.log(arr.lastIndexOf(5));",
                  output: "0",
                },
                {
                  name: "find",
                  shortDesc:
                    "het eerste element dat overeenkomt met de conditie",
                  desc: "Geeft de waarde terug uit de array, als het element in de array overeenkomt met de conditie die aangegeven is, en geeft anders undefined terug als er geen element gevonden is. Ongeveerd hetzelfde als <code>findIndex()</code> maar dit geeeft de waarde van het element terug in plaats van de index.",
                  example:
                    "let isTiny = (el) => el < 2;<br>\n          console.log(arr.find(isTiny));",
                  output: "1",
                },
                {
                  name: "findIndex",
                  shortDesc:
                    "de eerste index van een element dat overeenkomt met de conditie",
                  desc: "Geeft de index terug van het eerste element uit de array dat overeenkomt met de conditie die aangegeven is, en anders -1 terug geeft. Ongeveer hetzelfde als <code>find()</code>, maar dit geeft de index terug in plaats van de waarde van het element.",
                  example:
                    "let isBig = (el) => el > 6;<br>\n          console.log(arr.findIndex(isBig));",
                  output: "2",
                },
                {
                  name: "reduce",
                  shortDesc:
                    "een waarde door het verkleinen van de array, van begin tot eind",
                  desc: "Pas een functie toe op een verzameling en elke waarde in de array (van links naar rechts) aan door het te verkleinen in een enkele waarde.",
                  example:
                    "let reducer = (a, b) => a + b;<br>\n          <span>&nbsp;&nbsp;</span>console.log(arr.reduce(reducer));",
                  output: "14",
                },
                {
                  name: "reduceRight",
                  shortDesc:
                    "een waarde door het verkleinen van de array, van eind tot begin",
                  desc: "Pas een functie toe op een verzameling en elke waarde in de array (van rechts naar links) door het te verkleinen in een enkele waarde.",
                  example:
                    "[arr, [0, 1]].reduceRight((a, b) => {<br>\n          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>\n          }, [])",
                  output: "[0, 1, 5, 1, 8]",
                },
              ],
              many: [
                {
                  name: "filter",
                  shortDesc: "waardes gebaseerd op een conditie die ik toepas",
                  desc: "Maakt een nieuwe array met alle elementen van deze array waarbij de conditie overeenkomt en true terug geeft.",
                  example:
                    "let filtered = arr.filter(el => el > 4);<br>\n          console.log(filtered)",
                  output: "[5, 8]",
                },
                {
                  name: "every",
                  shortDesc:
                    "of alle waardes in een array overeenkomen met de conditie die ik stel",
                  desc: "Geeft true terug als elk element in de array overeenkomt met de opgegeven conditie.",
                  example:
                    "let isSmall = (el) => el < 10;<br>\n          console.log(arr.every(isSmall));",
                  output: "true",
                },
                {
                  name: "some",
                  shortDesc:
                    "of een waarde in een array overeenkomt met de conditie die ik stel",
                  desc: "Geeft true terug als er minimaal een element in de array overenekomt met de opgegeven conditie.",
                  example:
                    "let biggerThan4 = (el) => el > 4;<br>\n          console.log(arr.some(biggerThan4));",
                  output: "true",
                },
              ],
            },
          },
        });
    },
    tprR: function (e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = {
          state: {
            selectedMethod: "",
            adding: [
              {
                name: "splice",
                shortDesc: "ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚(Ñ‹) Ð² Ð¼Ð°ÑÑÐ¸Ð²",
                desc: "Ð”Ð¾Ð±Ð°Ð²Ð»ÑÐµÑ‚ Ð¸/Ð¸Ð»Ð¸ ÑƒÐ´Ð°Ð»ÑÐµÑ‚ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ñ‹ Ð¸Ð· Ð¼Ð°ÑÑÐ¸Ð²Ð°.",
                example:
                  "arr.splice(2, 0, 'tacos');<br>\n        console.log(arr);",
                output: "[5, 1, 'tacos', 8]",
              },
              {
                name: "push",
                shortDesc: "ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚(Ñ‹) Ð² ÐºÐ¾Ð½ÐµÑ† Ð¼Ð°ÑÑÐ¸Ð²Ð°",
                desc: "Ð”Ð¾Ð±Ð°Ð²Ð»ÑÐµÑ‚ Ð¾Ð´Ð¸Ð½ Ð¸Ð»Ð¸ Ð±Ð¾Ð»ÐµÐµ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¾Ð² Ð² ÐºÐ¾Ð½ÐµÑ† Ð¼Ð°ÑÑÐ¸Ð²Ð° Ð¸ Ð²Ð¾Ð·Ð²Ñ€Ð°Ñ‰Ð°ÐµÑ‚ Ð½Ð¾Ð²ÑƒÑŽ Ð´Ð»Ð¸Ð½Ñƒ ÑÑ‚Ð¾Ð³Ð¾ Ð¼Ð°ÑÑÐ¸Ð²Ð°.",
                example: "arr.push(2);<br>\n        console.log(arr);",
                output: "[5, 1, 8, 2]",
              },
              {
                name: "unshift",
                shortDesc: "ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚(Ñ‹) Ð² Ð½Ð°Ñ‡Ð°Ð»Ð¾ Ð¼Ð°ÑÑÐ¸Ð²Ð°",
                desc: "Ð”Ð¾Ð±Ð°Ð²Ð»ÑÐµÑ‚ Ð¾Ð´Ð¸Ð½ Ð¸Ð»Ð¸ Ð±Ð¾Ð»ÐµÐµ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¾Ð² Ð² Ð½Ð°Ñ‡Ð°Ð»Ð¾ Ð¼Ð°ÑÑÐ¸Ð²Ð° Ð¸ Ð²Ð¾Ð·Ð²Ñ€Ð°Ñ‰Ð°ÐµÑ‚ Ð´Ð»Ð¸Ð½Ñƒ ÑÑ‚Ð¾Ð³Ð¾ Ð¼Ð°ÑÑÐ¸Ð²Ð°.",
                example: "arr.unshift(2, 7);<br>\n        console.log(arr);",
                output: "[2, 7, 5, 1, 8]",
              },
              {
                name: "concat",
                shortDesc:
                  "ÑÑ‚Ð¾Ñ‚ Ð¼Ð°ÑÑÐ¸Ð² Ðº Ð´Ñ€ÑƒÐ³Ð¸Ð¼ Ð¼Ð°ÑÑÐ¸Ð²Ð°Ð¼ Ð¸/Ð¸Ð»Ð¸ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸ÑÐ¼",
                desc: "Ð’Ð¾Ð·Ð²Ñ€Ð°Ñ‰Ð°ÐµÑ‚ Ð½Ð¾Ð²Ñ‹Ð¹ Ð¼Ð°ÑÑÐ¸Ð², ÑÐ¾ÑÑ‚Ð°Ð²Ð»ÐµÐ½Ð½Ñ‹Ð¹ Ð¸Ð· ÑÑ‚Ð¾Ð³Ð¾ Ð¼Ð°ÑÑÐ¸Ð²Ð° Ð¸ Ð´Ñ€ÑƒÐ³Ð¸Ñ… Ð¼Ð°ÑÑÐ¸Ð²Ð¾Ð² Ð¸/Ð¸Ð»Ð¸ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ð¹.",
                example:
                  "let arr2 = ['a', 'b', 'c'];<br>\n        let arr3 = arr.concat(arr2);<br>\n        console.log(arr3);",
                output: "[5, 1, 8, 'a', 'b', 'c']",
              },
            ],
            removing: [
              {
                name: "splice",
                shortDesc: "ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ñ‹ Ð¸Ð· Ð¼Ð°ÑÑÐ¸Ð²Ð°",
                desc: "Ð”Ð¾Ð±Ð°Ð²Ð»ÑÐµÑ‚ Ð¸/Ð¸Ð»Ð¸ ÑƒÐ´Ð°Ð»ÑÐµÑ‚ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ñ‹ Ð¸Ð· Ð¼Ð°ÑÑÐ¸Ð²Ð°.",
                example: "arr.splice(2, 1);<br>\n        console.log(arr);",
                output: "[5, 1]",
              },
              {
                name: "pop",
                shortDesc: "Ð¿Ð¾ÑÐ»ÐµÐ´Ð½Ð¸Ð¹ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ð¼Ð°ÑÑÐ¸Ð²Ð°",
                desc: "Ð£Ð´Ð°Ð»ÑÐµÑ‚ Ð¿Ð¾ÑÐ»ÐµÐ´Ð½Ð¸Ð¹ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ð¸Ð· Ð¼Ð°ÑÑÐ¸Ð²Ð° Ð¸ Ð²Ð¾Ð·Ð²Ñ€Ð°Ñ‰Ð°ÐµÑ‚ ÑƒÐ´Ð°Ð»Ñ‘Ð½Ð½Ñ‹Ð¹ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚.",
                example: "arr.pop();<br>\n        console.log(arr);",
                output: "[5, 1]",
              },
              {
                name: "shift",
                shortDesc: "Ð¿ÐµÑ€Ð²Ñ‹Ð¹ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ð¼Ð°ÑÑÐ¸Ð²Ð°",
                desc: "Ð£Ð´Ð°Ð»ÑÐµÑ‚ Ð¿ÐµÑ€Ð²Ñ‹Ð¹ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ð¸Ð· Ð¼Ð°ÑÑÐ¸Ð²Ð° Ð¸ Ð²Ð¾Ð·Ð²Ñ€Ð°Ñ‰Ð°ÐµÑ‚ ÑƒÐ´Ð°Ð»Ñ‘Ð½Ð½Ñ‹Ð¹ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚.",
                example: "arr.shift();<br>\n        console.log(arr);",
                output: "[1, 8]",
              },
              {
                name: "slice",
                shortDesc:
                  "Ð¾Ð´Ð¸Ð½ Ð¸Ð»Ð¸ Ð±Ð¾Ð»ÐµÐµ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¾Ð² Ð´Ð»Ñ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ñ, Ð¾ÑÑ‚Ð°Ð²Ð¸Ð² Ð¼Ð°ÑÑÐ¸Ð² Ð½ÐµÐ¸Ð·Ð¼ÐµÐ½Ñ‘Ð½Ð½Ñ‹Ð¼",
                desc: "ÐœÐµÑ‚Ð¾Ð´ <code>slice()</code> Ð²Ð¾Ð·Ð²Ñ€Ð°Ñ‰Ð°ÐµÑ‚ Ð¿Ð¾Ð²ÐµÑ€Ñ…Ð½Ð¾ÑÑ‚Ð½ÑƒÑŽ ÐºÐ¾Ð¿Ð¸ÑŽ Ñ‡Ð°ÑÑ‚Ð¸ Ð¼Ð°ÑÑÐ¸Ð²Ð° ÐºÐ°Ðº Ð½Ð¾Ð²Ñ‹Ð¹ Ð¾Ð±ÑŠÐµÐºÑ‚ Ð¼Ð°ÑÑÐ¸Ð²Ð°. Ð’Ñ‹ Ð¼Ð¾Ð¶ÐµÑ‚Ðµ Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»Ð¸Ñ‚ÑŒ Ñ‚Ð¾Ð»ÑŒÐºÐ¾ ÐºÐ¾Ð½ÐµÑ‡Ð½Ñ‹Ð¹ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚ (Ñ‚Ð¾Ð³Ð´Ð° Ð½Ð°Ñ‡Ð°Ð»Ð¾Ð¼ Ð±ÑƒÐ´ÐµÑ‚ Ð²Ð·ÑÑ‚ Ð½ÑƒÐ»ÑŒ) Ð»Ð¸Ð±Ð¾ Ð¸ Ð½Ð°Ñ‡Ð°Ð»ÑŒÐ½Ñ‹Ð¹, Ð¸ ÐºÐ¾Ð½ÐµÑ‡Ð½Ñ‹Ð¹ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚, Ñ€Ð°Ð·Ð´ÐµÐ»Ñ‘Ð½Ð½Ñ‹Ðµ Ð·Ð°Ð¿ÑÑ‚Ð¾Ð¹. Ð˜Ð·Ð½Ð°Ñ‡Ð°Ð»ÑŒÐ½Ñ‹Ð¹ Ð¼Ð°ÑÑÐ¸Ð² Ð½Ðµ Ð±ÑƒÐ´ÐµÑ‚ Ð¸Ð·Ð¼ÐµÐ½Ñ‘Ð½.",
                example:
                  "let slicedArr = arr.slice(1);<br>\n        console.log(arr);<br>\n        console.log(slicedArr);",
                output: "[5, 1, 8]<br>\n        [1, 8]",
              },
            ],
            string: [
              {
                name: "join",
                shortDesc:
                  "Ð¾Ð±ÑŠÐµÐ´Ð¸Ð½Ð¸Ñ‚ÑŒ Ð²ÑÐµ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ñ‹ Ð¼Ð°ÑÑÐ¸Ð²Ð° Ð² ÑÑ‚Ñ€Ð¾ÐºÑƒ",
                desc: "ÐžÐ±ÑŠÐµÐ´Ð¸Ð½ÑÐµÑ‚ Ð²ÑÐµ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ñ‹ Ð² ÑÑ‚Ñ€Ð¾ÐºÑƒ. Ð’Ñ‹ Ð¼Ð¾Ð¶ÐµÑ‚Ðµ Ð¾Ð±ÑŠÐµÐ´Ð¸Ð½Ð¸Ñ‚ÑŒ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ñ‹ Ð¿Ð¾ ÑƒÐ¼Ð¾Ð»Ñ‡Ð°Ð½Ð¸ÑŽ Ð¸Ð»Ð¸ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒ Ñ€Ð°Ð·Ð´ÐµÐ»Ð¸Ñ‚ÐµÐ»ÑŒ, <code>elements.join(' - ')</code> Ð²ÐµÑ€Ð½Ñ‘Ñ‚ <code>foo-bar</code>",
                example: "console.log(arr.join());",
                output: '"5,1,8"',
              },
              {
                name: "toString",
                shortDesc:
                  "Ð²ÐµÑ€Ð½ÑƒÑ‚ÑŒ ÑÑ‚Ñ€Ð¾ÐºÑƒ Ð¿Ñ€ÐµÐ´ÑÑ‚Ð°Ð²Ð»ÑÑŽÑ‰ÑƒÑŽ Ð¼Ð°ÑÑÐ¸Ð²",
                desc: "Ð’Ð¾Ð·Ð²Ñ€Ð°Ñ‰Ð°ÐµÑ‚ ÑÑ‚Ñ€Ð¾ÐºÑƒ Ð¿Ñ€ÐµÐ´ÑÑ‚Ð°Ð²Ð»ÑÑŽÑ‰ÑƒÑŽ Ð¼Ð°ÑÑÐ¸Ð² Ð¸ ÐµÐ³Ð¾ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ñ‹.",
                example: "console.log(arr.toString());",
                output: '"5,1,8"',
              },
              {
                name: "toLocaleString",
                shortDesc:
                  "Ð²ÐµÑ€Ð½ÑƒÑ‚ÑŒ Ð»Ð¾ÐºÐ°Ð»Ð¸Ð·Ð¾Ð²Ð°Ð½Ð½ÑƒÑŽ ÑÑ‚Ñ€Ð¾ÐºÑƒ Ð¿Ñ€ÐµÐ´ÑÑ‚Ð°Ð²Ð»ÑŽÑ‰ÑƒÑŽ Ð¼Ð°ÑÑÐ¸Ð²",
                desc: "Ð­Ñ‚Ð¾Ñ‚ Ð¼ÐµÑ‚Ð¾Ð´ Ð½ÐµÐ¼Ð½Ð¾Ð³Ð¾ ÑÑ‚Ñ€Ð°Ð½Ð½Ñ‹Ð¹. Ð’Ð¾Ð·Ð²Ñ€Ð°Ñ‰Ð°ÐµÑ‚ Ð»Ð¾ÐºÐ°Ð»Ð¸Ð·Ð¾Ð²Ð°Ð½Ð½ÑƒÑŽ ÑÑ‚Ñ€Ð¾ÐºÑƒ Ð¿Ñ€ÐµÐ´ÑÑ‚Ð°Ð²Ð»ÑŽÑ‰ÑƒÑŽ Ð¼Ð°ÑÑÐ¸Ð² Ð¸ ÐµÐ³Ð¾ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ñ‹. Ð­Ñ‚Ð¾ Ð¾Ñ‡ÐµÐ½ÑŒ ÑƒÐ´Ð¾Ð±Ð½Ð¾ Ð´Ð»Ñ Ð´Ð°Ñ‚ Ð¸ Ð´ÐµÐ½ÐµÐ¶Ð½Ñ‹Ñ… ÐµÐ´Ð¸Ð½Ð¸Ñ†, Ð° Ñ‚Ð°ÐºÐ¶Ðµ Ð¸Ð¼ÐµÐµÑ‚ Ð½ÐµÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ Ð½ÐµÐ¾Ð±Ñ‹Ñ‡Ð½Ñ‹Ðµ Ð½Ð°Ñ†Ð¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ðµ Ð°Ð±ÑÑ‚Ñ€Ð°ÐºÑ†Ð¸Ð¸, Ð¿Ð¾ÑÑ‚Ð¾Ð¼Ñƒ Ð»ÑƒÑ‡ÑˆÐµ Ð¾Ð±Ñ€Ð°Ñ‚Ð¸Ñ‚ÑŒÑÑ Ðº Ð´Ð¾ÐºÑƒÐ¼ÐµÐ½Ñ‚Ð°Ñ†Ð¸Ð¸ Ð¿ÐµÑ€ÐµÐ´ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸ÐµÐ¼.",
                example:
                  "let date = [new Date()];<br>\n        const arrString = arr.toLocaleString();<br>\n        const dateString = date.toLocaleString();<br>\n        console.log(arrString, dateString);",
                output: '"5,1,8 12/26/2017, 6:54:49 PM"',
              },
            ],
            ordering: [
              {
                name: "reverse",
                shortDesc:
                  "Ð¾Ð±Ñ€Ð°Ñ‚Ð¸Ñ‚ÑŒ Ð¿Ð¾Ñ€ÑÐ´Ð¾Ðº ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¾Ð² Ð¼Ð°ÑÑÐ¸Ð²Ð°",
                desc: "ÐžÐ±Ñ€Ð°Ñ‰Ð°ÐµÑ‚ Ð¿Ð¾Ñ€ÑÐ´Ð¾Ðº ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¾Ð² Ð¼Ð°ÑÑÐ¸Ð²Ð° Ð½Ð° Ð¼ÐµÑÑ‚Ðµ â€” Ð¿ÐµÑ€Ð²Ñ‹Ð¹ ÑÑ‚Ð°Ð½Ð¾Ð²Ð¸Ñ‚ÑÑ Ð¿Ð¾ÑÐ»ÐµÐ´Ð½Ð¸Ð¼, Ð° Ð¿Ð¾ÑÐ»ÐµÐ´Ð½Ð¸Ð¹ ÑÑ‚Ð°Ð½Ð¾Ð²Ð¸Ñ‚ÑÑ Ð¿ÐµÑ€Ð²Ñ‹Ð¼.",
                example: "arr.reverse();<br>\n        console.log(arr);",
                output: "[8, 1, 5]",
              },
              {
                name: "sort",
                shortDesc:
                  "Ð¾Ñ‚ÑÐ¾Ñ€Ñ‚Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ñ‹ Ð¼Ð°ÑÑÐ¸Ð²Ð°",
                desc: "Ð¡Ð¾Ñ€Ñ‚Ð¸Ñ€ÑƒÐµÑ‚ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ñ‹ Ð¼Ð°ÑÑÐ¸Ð²Ð° Ð½Ð° Ð¼ÐµÑÑ‚Ðµ Ð¸ Ð²Ð¾Ð·Ð²Ñ€Ð°Ñ‰Ð°ÐµÑ‚ ÑÑ‚Ð¾Ñ‚ Ð¼Ð°ÑÑÐ¸Ð².",
                example: "arr.sort();<br>\n        console.log(arr);",
                output: "[1, 5, 8]",
              },
            ],
            other: [
              {
                name: "length",
                shortDesc: "Ð½Ð°Ð¹Ñ‚Ð¸ Ð´Ð»Ð¸Ð½Ñƒ Ð¼Ð°ÑÑÐ¸Ð²Ð°",
                desc: "Ð’Ð¾Ð·Ð²Ñ€Ð°Ñ‰Ð°ÐµÑ‚ ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¾Ð² Ð² ÑÑ‚Ð¾Ð¼ Ð¼Ð°ÑÑÐ¸Ð²Ðµ.",
                example: "console.log(arr.length);",
                output: "3",
              },
              {
                name: "fill",
                shortDesc:
                  "Ð·Ð°Ð¿Ð¾Ð»Ð½Ð¸Ñ‚ÑŒ Ð²ÑÐµ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ñ‹ Ð¼Ð°ÑÑÐ¸Ð²Ð° ÑÑ‚Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¸Ð¼ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸ÐµÐ¼",
                desc: "Ð—Ð°Ð¿Ð¾Ð»Ð½ÑÐµÑ‚ Ð²ÑÐµ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ñ‹ Ð¼Ð°ÑÑÐ¸Ð²Ð°, Ð½Ð°Ñ‡Ð¸Ð½Ð°Ñ ÑÐ¾ ÑÑ‚Ð°Ñ€Ñ‚Ð¾Ð²Ð¾Ð³Ð¾ Ð¸ Ð´Ð¾ ÐºÐ¾Ð½ÐµÑ‡Ð½Ð¾Ð³Ð¾ Ð¸Ð½Ð´ÐµÐºÑÐ°, ÑÑ‚Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¸Ð¼ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸ÐµÐ¼",
                example: "arr.fill(2);<br>\n        console.log(arr);",
                output: "[2, 2, 2]",
              },
              {
                name: "copyWithin",
                shortDesc:
                  "ÑÐºÐ¾Ð¿Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð¿Ð¾ÑÐ»ÐµÐ´Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒÐ½Ð¾ÑÑ‚ÑŒ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¾Ð² Ð²Ð½ÑƒÑ‚Ñ€Ð¸ Ð¼Ð°ÑÑÐ¸Ð²Ð°",
                desc: "ÐšÐ¾Ð¿Ð¸Ñ€ÑƒÐµÑ‚ Ð¿Ð¾ÑÐ»ÐµÐ´Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒÐ½Ð¾ÑÑ‚ÑŒ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¾Ð² Ð²Ð½ÑƒÑ‚Ñ€Ð¸ Ð¼Ð°ÑÑÐ¸Ð²Ð°. Ð’Ñ‹ Ð¼Ð¾Ð¶ÐµÑ‚Ðµ Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»Ð¸Ñ‚ÑŒ Ñ‚Ð¾Ð»ÑŒÐºÐ¾ ÐºÐ¾Ð½ÐµÑ‡Ð½Ñ‹Ð¹ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚ (Ñ‚Ð¾Ð³Ð´Ð° Ð½Ð°Ñ‡Ð°Ð»Ð¾Ð¼ Ð±ÑƒÐ´ÐµÑ‚ Ð²Ð·ÑÑ‚ Ð½ÑƒÐ»ÑŒ) Ð»Ð¸Ð±Ð¾ Ð¸ Ð½Ð°Ñ‡Ð°Ð»ÑŒÐ½Ñ‹Ð¹, Ð¸ ÐºÐ¾Ð½ÐµÑ‡Ð½Ñ‹Ð¹ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚, Ñ€Ð°Ð·Ð´ÐµÐ»Ñ‘Ð½Ð½Ñ‹Ðµ Ð·Ð°Ð¿ÑÑ‚Ð¾Ð¹.",
                example: "arr.copyWithin(1);<br>\n        console.log(arr);",
                output: "[5, 5, 1]",
              },
            ],
            iterate: [
              {
                name: "forEach",
                shortDesc:
                  "Ð²Ñ‹Ð¿Ð¾Ð»Ð½ÑÑ Ñ„ÑƒÐ½ÐºÑ†Ð¸ÑŽ, ÐºÐ¾Ñ‚Ð¾Ñ€ÑƒÑŽ Ñ ÑÐ¾Ð·Ð´Ð°Ð¼, Ð½Ð°Ð´ ÐºÐ°Ð¶Ð´Ñ‹Ð¼ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¾Ð¼ Ð¼Ð°ÑÑÐ¸Ð²Ð°",
                desc: "ÐœÐµÑ‚Ð¾Ð´ forEach() Ð²Ñ‹Ð¿Ð¾Ð»Ð½ÑÐµÑ‚ Ð¿ÐµÑ€ÐµÐ´Ð°Ð½Ð½ÑƒÑŽ Ñ„ÑƒÐ½ÐºÑ†Ð¸ÑŽ ÐµÐ´Ð¸Ð½Ð¾Ð¶Ð´Ñ‹ Ð´Ð»Ñ ÐºÐ°Ð¶Ð´Ð¾Ð³Ð¾ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð° Ð¼Ð°ÑÑÐ¸Ð²Ð°.",
                example:
                  "arr.forEach((element) => {<br>\n        <span>&nbsp;&nbsp;</span>console.log(element)<br>\n        });",
                output: "5<br>\n        1<br>\n        8",
              },
              {
                name: "map",
                shortDesc:
                  "ÑÐ¾Ð·Ð´Ð°Ð²Ð°Ñ Ð½Ð¾Ð²Ñ‹Ð¹ Ð¼Ð°ÑÑÐ¸Ð² Ð¸Ð· ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¾Ð² Ñ Ð¿Ð¾Ð¼Ð¾Ñ‰ÑŒÑŽ Ð¼Ð¾ÐµÐ¹ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¸",
                desc: "Ð¡Ð¾Ð·Ð´Ð°Ñ‘Ñ‚ Ð½Ð¾Ð²Ñ‹Ð¹ Ð¼Ð°ÑÑÐ¸Ð² Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÑ Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ñ‹ Ð²Ñ‹Ð·Ð¾Ð²Ð° Ð¿ÐµÑ€ÐµÐ´Ð°Ð½Ð½Ð¾Ð¹ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¸ Ð´Ð»Ñ ÐºÐ°Ð¶Ð´Ð¾Ð³Ð¾ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð° Ð² ÑÑ‚Ð¾Ð¼ Ð¼Ð°ÑÑÐ¸Ð²Ðµ.",
                example:
                  "let map = arr.map(x => x + 1);<br>\n        console.log(map);",
                output: "[6, 2, 9]",
              },
              {
                name: "entries",
                shortDesc: "ÑÐ¾Ð·Ð´Ð°Ð² Ð¾Ð±ÑŠÐµÐºÑ‚-Ð¸Ñ‚ÐµÑ€Ð°Ñ‚Ð¾Ñ€",
                desc: "Ð’Ð¾Ð·Ð²Ñ€Ð°Ñ‰Ð°ÐµÑ‚ Ð½Ð¾Ð²Ñ‹Ð¹ Ð¾Ð±ÑŠÐµÐºÑ‚-Ð¸Ñ‚ÐµÑ€Ð°Ñ‚Ð¾Ñ€ Ð´Ð»Ñ Ð¼Ð°ÑÑÐ¸Ð²Ð°, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ð¹ ÑÐ¾Ð´ÐµÑ€Ð¶Ð¸Ñ‚ Ð¿Ð°Ñ€Ñ‹ ÐºÐ»ÑŽÑ‡/Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ðµ Ð´Ð»Ñ ÐºÐ°Ð¶Ð´Ð¾Ð³Ð¾ Ð¸Ð½Ð´ÐµÐºÑÐ° Ð² ÑÑ‚Ð¾Ð¼ Ð¼Ð°ÑÑÐ¸Ð²Ðµ. Ð¡ÑƒÑ‰ÐµÑÑ‚Ð²ÑƒÐµÑ‚ Ð¼Ð½Ð¾Ð³Ð¾ ÑÐ¿Ð¾ÑÐ¾Ð±Ð¾Ð² Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ñ ÑÑ‚Ð¾Ð³Ð¾ Ð¸Ñ‚ÐµÑ€Ð°Ñ‚Ð¾Ñ€Ð°, Ð° Ñ‚Ð°ÐºÐ¶Ðµ Ð¼ÐµÑ‚Ð¾Ð´Ð¾Ð², ÑÐ²ÑÐ·Ð°Ð½Ñ‹Ñ… Ñ Ð½Ð¸Ð¼, Ñ‚Ð°ÐºÐ¸Ñ… ÐºÐ°Ðº <code>values</code> Ð¸ <code>keys</code>",
                example:
                  "let iterator = arr.entries();<br>\n        console.log(iterator.next().value);",
                output:
                  '[0, 5]<br>\n        <span class="comment">// the 0 is the index,</span><br>\n        <span class="comment">// the 5 is the first number</span>',
              },
            ],
            find: {
              single: [
                {
                  name: "includes",
                  shortDesc:
                    "ÑÑƒÑ‰ÐµÑÑ‚Ð²ÑƒÐµÑ‚ Ð»Ð¸ Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»Ñ‘Ð½Ð½Ñ‹Ð¹ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚",
                  desc: "ÐžÐ¿Ñ€ÐµÐ´ÐµÐ»ÑÐµÑ‚ ÑÐ¾Ð´ÐµÑ€Ð¶Ð¸Ñ‚ Ð»Ð¸ Ð¼Ð°ÑÑÐ¸Ð² Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»Ñ‘Ð½Ð½Ñ‹Ð¹ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚, Ð²Ð¾Ð·Ð²Ñ€Ð°Ñ‰Ð°ÐµÑ‚ true Ð¸Ð»Ð¸ false ÐºÐ°Ðº Ð¿Ð¾Ð»Ð°Ð³Ð°ÐµÑ‚ÑÑ.",
                  example: "console.log(arr.includes(1));",
                  output: "true",
                },
                {
                  name: "indexOf",
                  shortDesc:
                    "Ð¿ÐµÑ€Ð²Ñ‹Ð¹ Ð¸Ð½Ð´ÐµÐºÑ Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»Ñ‘Ð½Ð½Ð¾Ð³Ð¾ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð°",
                  desc: "Ð’Ð¾Ð·Ð²Ñ€Ð°Ñ‰Ð°ÐµÑ‚ Ð¿ÐµÑ€Ð²Ñ‹Ð¹ Ð¸Ð½Ð´ÐµÐºÑ, Ð² ÐºÐ¾Ñ‚Ð¾Ñ€Ð¾Ð¼ Ð²ÑÑ‚Ñ€ÐµÑ‡Ð°ÐµÑ‚ÑÑ Ð´Ð°Ð½Ð½Ñ‹Ð¹ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ð² Ð¼Ð°ÑÑÐ¸Ð²Ðµ Ð¸Ð»Ð¸ -1, ÐµÑÐ»Ð¸ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð° Ð½Ðµ ÑÑƒÑ‰ÐµÑÑ‚Ð²ÑƒÐµÑ‚.",
                  example: "console.log(arr.indexOf(5));",
                  output: "0",
                },
                {
                  name: "lastIndexOf",
                  shortDesc:
                    "Ð¿Ð¾ÑÐ»ÐµÐ´Ð½Ð¸Ð¹ Ð¸Ð½Ð´ÐµÐºÑ Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»Ñ‘Ð½Ð½Ð¾Ð³Ð¾ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð°",
                  desc: "Ð’Ð¾Ð·Ð²Ñ€Ð°Ñ‰Ð°ÐµÑ‚ Ð¿Ð¾ÑÐ»ÐµÐ´Ð½Ð¸Ð¹ (Ð½Ð°Ð¸Ð±Ð¾Ð»ÑŒÑˆÐ¸Ð¹) Ð¸Ð½Ð´ÐµÐºÑ, Ð² ÐºÐ¾Ñ‚Ð¾Ñ€Ð¾Ð¼ Ð²ÑÑ‚Ñ€ÐµÑ‡Ð°ÐµÑ‚ÑÑ Ð´Ð°Ð½Ð½Ñ‹Ð¹ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ð² Ð¼Ð°ÑÑÐ¸Ð²Ðµ Ð¸Ð»Ð¸ -1, ÐµÑÐ»Ð¸ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð° Ð½Ðµ ÑÑƒÑ‰ÐµÑÑ‚Ð²ÑƒÐµÑ‚.",
                  example: "console.log(arr.lastIndexOf(5));",
                  output: "0",
                },
                {
                  name: "find",
                  shortDesc:
                    "Ð¿ÐµÑ€Ð²Ñ‹Ð¹ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚ ÑÐ¾Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²ÑƒÑŽÑ‰Ð¸Ð¹ ÑƒÑÐ»Ð¾Ð²Ð¸ÑŽ",
                  desc: "Ð’Ð¾Ð·Ð²Ñ€Ð°Ñ‰Ð°ÐµÑ‚ Ð½Ð°Ð¹Ð´ÐµÐ½Ð½Ð¾Ðµ Ð² Ð¼Ð°ÑÑÐ¸Ð²Ðµ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ðµ, ÐµÑÐ»Ð¸ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ð² Ð¼Ð°ÑÑÐ¸Ð²Ðµ ÑÐ¾Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²ÑƒÐµÑ‚ Ð¿ÐµÑ€ÐµÐ´Ð°Ð½Ð½Ð¾Ð¹ Ñ‚ÐµÑÑ‚Ð¸Ñ€ÑƒÑŽÑ‰ÐµÐ¹ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¸ Ð¸Ð»Ð¸ undefined, ÐµÑÐ»Ð¸ Ñ‚Ð°ÐºÐ¾Ð¹ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ð½Ðµ Ð½Ð°Ð¹Ð´ÐµÐ½. ÐŸÐ¾Ð´Ð¾Ð±ÐµÐ½ <code>findIndex()</code>, Ð½Ð¾ Ð²Ð¾Ð·Ð²Ñ€Ð°Ñ‰Ð°ÐµÑ‚ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ð²Ð¼ÐµÑÑ‚Ð¾ Ð¸Ð½Ð´ÐµÐºÑÐ°.",
                  example:
                    "let isTiny = (el) => el < 2;<br>\n          console.log(arr.find(isTiny));",
                  output: "1",
                },
                {
                  name: "findIndex",
                  shortDesc:
                    "Ð¿ÐµÑ€Ð²Ñ‹Ð¹ Ð¸Ð½Ð´ÐµÐºÑ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð°, ÑÐ¾Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²ÑƒÑŽÑ‰ÐµÐ³Ð¾ ÑƒÑÐ»Ð¾Ð²Ð¸ÑŽ",
                  desc: "Ð’Ð¾Ð·Ð²Ñ€Ð°Ñ‰Ð°ÐµÑ‚ Ð¸Ð½Ð´ÐµÐºÑ Ð¿ÐµÑ€Ð²Ð¾Ð³Ð¾ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð° Ð² Ð¼Ð°ÑÑÐ¸Ð²Ðµ, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ð¹ ÑÐ¾Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²ÑƒÐµÑ‚ Ð¿ÐµÑ€ÐµÐ´Ð°Ð½Ð½Ð¾Ð¹ Ñ‚ÐµÑÑ‚Ð¸Ñ€ÑƒÑŽÑ‰ÐµÐ¹ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¸. Ð’ Ð¸Ð½Ð¾Ð¼ ÑÐ»ÑƒÑ‡Ð°Ðµ Ð²Ð¾Ð·Ð²Ñ€Ð°Ñ‰Ð°ÐµÑ‚ -1. ÐŸÐ¾Ð´Ð¾Ð±ÐµÐ½ <code>find()</code>, Ð½Ð¾ Ð²Ð¾Ð·Ð²Ñ€Ð°Ñ‰Ð°ÐµÑ‚ Ð¸Ð½Ð´ÐµÐºÑ Ð²Ð¼ÐµÑÑ‚Ð¾ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð°.",
                  example:
                    "let isBig = (el) => el > 6;<br>\n          console.log(arr.findIndex(isBig));",
                  output: "2",
                },
                {
                  name: "reduce",
                  shortDesc:
                    "Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ðµ, Ð¿Ð¾Ð»ÑƒÑ‡ÐµÐ½Ð½Ð¾Ðµ ÑÐ¾ÐºÑ€Ð°Ñ‰ÐµÐ½Ð¸ÐµÐ¼ Ð¼Ð°ÑÑÐ¸Ð²Ð°, Ð¾Ñ‚ Ð½Ð°Ñ‡Ð°Ð»Ð° Ð´Ð¾ ÐºÐ¾Ð½Ñ†Ð°",
                  desc: "ÐŸÑ€Ð¸Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ Ñ„ÑƒÐ½ÐºÑ†Ð¸ÑŽ Ðº Ð°ÐºÐºÑƒÐ¼ÑƒÐ»ÑÑ‚Ð¾Ñ€Ñƒ Ñ ÐºÐ°Ð¶Ð´Ñ‹Ð¼ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸ÐµÐ¼ Ð¼Ð°ÑÑÐ¸Ð²Ð° (ÑÐ»ÐµÐ²Ð° Ð½Ð°Ð¿Ñ€Ð°Ð²Ð¾), Ñ‡Ñ‚Ð¾Ð±Ñ‹ ÑÐ¾ÐºÑ€Ð°Ñ‚Ð¸Ñ‚ÑŒ ÐµÐ³Ð¾ Ð´Ð¾ ÐµÐ´Ð¸Ð½ÑÑ‚Ð²ÐµÐ½Ð½Ð¾Ð³Ð¾ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ñ.",
                  example:
                    "let reducer = (a, b) => a + b;<br>\n          <span>&nbsp;&nbsp;</span>console.log(arr.reduce(reducer));",
                  output: "14",
                },
                {
                  name: "reduceRight",
                  shortDesc:
                    "Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ðµ, Ð¿Ð¾Ð»ÑƒÑ‡ÐµÐ½Ð½Ð¾Ðµ ÑÐ¾ÐºÑ€Ð°Ñ‰ÐµÐ½Ð¸ÐµÐ¼ Ð¼Ð°ÑÑÐ¸Ð²Ð°, Ð¾Ñ‚ ÐºÐ¾Ð½Ñ†Ð° Ðº Ð½Ð°Ñ‡Ð°Ð»Ñƒ",
                  desc: "ÐŸÑ€Ð¸Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ Ñ„ÑƒÐ½ÐºÑ†Ð¸ÑŽ Ðº Ð°ÐºÐºÑƒÐ¼ÑƒÐ»ÑÑ‚Ð¾Ñ€Ñƒ Ñ ÐºÐ°Ð¶Ð´Ñ‹Ð¼ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸ÐµÐ¼ Ð¼Ð°ÑÑÐ¸Ð²Ð° (ÑÐ¿Ñ€Ð°Ð²Ð° Ð½Ð°Ð»ÐµÐ²Ð¾), Ñ‡Ñ‚Ð¾Ð±Ñ‹ ÑÐ¾ÐºÑ€Ð°Ñ‚Ð¸Ñ‚ÑŒ ÐµÐ³Ð¾ Ð´Ð¾ ÐµÐ´Ð¸Ð½ÑÑ‚Ð²ÐµÐ½Ð½Ð¾Ð³Ð¾ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ñ.",
                  example:
                    "[arr, [0, 1]].reduceRight((a, b) => {<br>\n          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>\n          }, [])",
                  output: "[0, 1, 5, 1, 8]",
                },
              ],
              many: [
                {
                  name: "filter",
                  shortDesc:
                    "Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ñ, Ð¾ÑÐ½Ð¾Ð²Ñ‹Ð²Ð°ÑÑÑŒ Ð½Ð° ÑƒÑÐ»Ð¾Ð²Ð²Ð¸, ÐºÐ¾Ñ‚Ð¾Ñ€Ð¾Ðµ Ñ ÑÐ¾Ð·Ð´Ð°Ð¼",
                  desc: "Ð¡Ð¾Ð·Ð´Ð°Ñ‘Ñ‚ Ð½Ð¾Ð²Ñ‹Ð¹ Ð¼Ð°ÑÑÐ¸Ð² ÑÐ¾ Ð²ÑÐµÐ¼Ð¸ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð°Ð¼Ð¸ ÑÑ‚Ð¾Ð³Ð¾ Ð¼Ð°ÑÑÐ¸Ð²Ð°, Ð´Ð»Ñ ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ñ… Ð¿ÐµÑ€ÐµÐ´Ð°Ð½Ð½Ð°Ñ Ñ„Ð¸Ð»ÑŒÑ‚Ñ€ÑƒÑŽÑ‰Ð°Ñ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ñ Ð²Ð¾Ð·Ð²Ñ€Ð°Ñ‰Ð°ÐµÑ‚ true.",
                  example:
                    "let filtered = arr.filter(el => el > 4);<br>\n          console.log(filtered)",
                  output: "[5, 8]",
                },
                {
                  name: "every",
                  shortDesc:
                    "ÑÐ¾Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²ÑƒÐµÑ‚ Ð¸Ð»Ð¸ Ð½ÐµÑ‚ ÐºÐ°Ð¶Ð´Ñ‹Ð¹ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚ ÑƒÑÐ»Ð¾Ð²Ð¸ÑŽ",
                  desc: "Ð’Ð¾Ð·Ð²Ñ€Ð°Ñ‰Ð°ÐµÑ‚ true, ÐµÑÐ»Ð¸ ÐºÐ°Ð¶Ð´Ñ‹Ð¹ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ð² ÑÑ‚Ð¾Ð¼ Ð¼Ð°ÑÑÐ¸Ð²Ðµ ÑÐ¾Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²ÑƒÐµÑ‚ Ð¿ÐµÑ€ÐµÐ´Ð°Ð½Ð½Ð¾Ð¹ Ñ‚ÐµÑÑ‚Ð¸Ñ€ÑƒÑŽÑ‰ÐµÐ¹ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¸.",
                  example:
                    "let isSmall = (el) => el < 10;<br>\n          console.log(arr.every(isSmall));",
                  output: "true",
                },
                {
                  name: "some",
                  shortDesc:
                    "ÑÐ¾Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²ÑƒÐµÑ‚ Ð¸Ð»Ð¸ Ð½ÐµÑ‚ Ñ…Ð¾Ñ‚Ñ Ð±Ñ‹ Ð¾Ð´Ð¸Ð½ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚ ÑƒÑÐ»Ð¾Ð²Ð¸ÑŽ",
                  desc: "Ð’Ð¾Ð·Ñ€Ð°Ñ‰Ð°ÐµÑ‚ true, ÐµÑÐ»Ð¸ Ñ…Ð¾Ñ‚Ñ Ð±Ñ‹ Ð¾Ð´Ð¸Ð½ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ð² ÑÑ‚Ð¾Ð¼ Ð¼Ð°ÑÑÐ¸Ð²Ðµ ÑÐ¾Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²ÑƒÐµÑ‚ Ð¿ÐµÑ€ÐµÐ´Ð°Ð½Ð½Ð¾Ð¹ Ñ‚ÐµÑÑ‚Ð¸Ñ€ÑƒÑŽÑ‰ÐµÐ¹ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¸",
                  example:
                    "let biggerThan4 = (el) => el > 4;<br>\n          console.log(arr.some(biggerThan4));",
                  output: "true",
                },
              ],
            },
          },
        });
    },
    vF68: function (e, a) {},
    vdRI: function (e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var r = n("7+uW"),
        t = n("NYxO"),
        o = n("kmDT"),
        s = n("0iGN"),
        l = n("WbDD"),
        i = n("lx7K"),
        d = n("cACW"),
        c = n("I9nf"),
        u = n("YsDL"),
        m = n("oBQB"),
        p = n("BYe3"),
        h = n("059H"),
        g = n("BKTo"),
        b = n("VITF"),
        f = n("vsdj"),
        v = n("tprR");
      const y = ((e) => {
        let a = e.keys(),
          n = a.map(e);
        let r = {};
        return (
          a
            .filter((e, a) => e.endsWith("json"))
            .forEach((e) => {
              const t = a.indexOf(e),
                o = n[t];
              r[o.short] = { long: o.long };
            }),
          r
        );
      })(n("DERJ"));
      r.a.use(t.a);
      const x = {
          selectionMethod(e, a) {
            e.selectedMethod = a;
          },
          resetSelection(e) {
            e.selectedMethod = "";
          },
          changeLanguage(e, a) {
            (e.curLanguage = a), r.a.i18n.set(a);
          },
        },
        k = new t.a.Store({
          modules: {
            ar: s.default,
            bg: l.default,
            es: i.default,
            en: d.default,
            de: c.default,
            fr: u.default,
            nl: m.default,
            pt: p.default,
            zh_cn: h.default,
            id: g.default,
            sr: b.default,
            cz: f.default,
            ru: v.default,
            id: g.default,
          },
          state: { selectedMethod: void 0, curLanguage: "en", languages: y },
          mutations: x,
        });
      (a.store = k),
        r.a.use(o.a.plugin, k),
        r.a.i18n.add("ar", {
          firstMethod: "Ù„Ø¯ÙŠ Ù…Ø¬Ù…ÙˆØ¹Ø©ØŒ Ø£ÙˆØ¯",
          findMethod: "Ø£Ø­Ø§ÙˆÙ„ Ø£Ù† Ø£Ø¬Ø¯",
          methodOptions: "Ø£Ù†Ø§ Ø¨Ø­Ø§Ø¬Ø© Ù„Ù€Ù€",
          methodTypes: {
            add: "Ø¥Ø¶Ø§ÙØ©",
            remove: "Ø¥Ø²Ø§Ù„Ø©",
            find: "ØªØ¬Ø¯",
            "iterate by": "ÙŠØªÙƒØ±Ø± Ù…Ù† Ù‚Ø¨Ù„",
            string: "Ø®ÙŠØ·",
          },
          singleItem: "Ø´ÙŠØ¡ ÙˆØ§Ø­Ø¯",
          manyItems: "ÙˆØ§Ø­Ø¯ Ø£Ùˆ Ø§Ù„Ø¹Ø¯ÙŠØ¯ Ù…Ù† Ø§Ù„Ø¨Ù†ÙˆØ¯",
          primaryOptions: [
            "Ø¥Ø¶Ø§ÙØ© Ø¹Ù†Ø§ØµØ± Ø£Ùˆ ØµÙØ§Ø¦Ù Ø£Ø®Ø±Ù‰",
            "Ø¥Ø²Ø§Ù„Ø© Ø§Ù„Ø¹Ù†Ø§ØµØ±",
            "Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„Ù‰ Ø§Ù„Ø¨Ù†ÙˆØ¯",
            "Ø§Ù„Ù…Ø´ÙŠ Ø¹Ù„Ù‰ Ø§Ù„Ø¨Ù†ÙˆØ¯",
            "Ø¥Ø±Ø¬Ø§Ø¹ Ø³Ù„Ø³Ù„Ø©",
            "ØªØ±ØªÙŠØ¨ ØµÙÙŠÙ",
            "Ø´ÙŠØ¡ Ø¢Ø®Ø±",
          ],
        }),
        r.a.i18n.add("bg", {
          firstMethod: "Ð˜Ð¼Ð°Ð¼ Ð¼Ð°ÑÐ¸Ð², Ð±Ð¸Ñ… Ð¸ÑÐºÐ°Ð»",
          findMethod: "ÐžÐ¿Ð¸Ñ‚Ð²Ð°Ð¼ ÑÐµ Ð´Ð° Ð½Ð°Ð¼ÐµÑ€Ñ",
          methodOptions: "TÑ€ÑÐ±Ð²Ð° Ð´Ð°",
          methodTypes: {
            add: "Ð´Ð¾Ð±Ð°Ð²Ð¸",
            remove: "Ð¿Ñ€ÐµÐ¼Ð°Ñ…Ð²Ð°Ð½Ðµ",
            find: "Ð½Ð°Ð¼ÐµÑ€Ð¸",
            "iterate by": "Ð¾Ð±Ñ…Ð¾Ð¶Ð´Ð°Ð½Ðµ",
            string: "Ð½Ð¸Ð·",
          },
          singleItem: "ÐµÐ´Ð¸Ð½ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚",
          manyItems: "ÐµÐ´Ð¸Ð½ Ð¸Ð»Ð¸ Ð¼Ð½Ð¾Ð³Ð¾ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸",
          primaryOptions: [
            "Ð´Ð¾Ð±Ð°Ð²ÐµÑ‚Ðµ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸ Ð¸Ð»Ð¸ Ð´Ñ€ÑƒÐ³Ð¸ Ð¼Ð°ÑÐ¸Ð²Ð¸",
            "Ð¿Ñ€ÐµÐ¼Ð°Ñ…Ð²Ð°Ð½Ðµ Ð½Ð° ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸",
            "Ð½Ð°Ð¼ÐµÑ€ÐµÑ‚Ðµ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸",
            "Ð¿Ñ€ÐµÐ¼Ð¸Ð½ÐµÑ‚Ðµ Ð¿Ñ€ÐµÐ· ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸Ñ‚Ðµ",
            "Ð²Ñ€ÑŠÑ‰Ð°Ð½Ðµ Ð½Ð° Ð½Ð¸Ð·",
            "ÑÐ¾Ñ€Ñ‚Ð¸Ñ€Ð°Ð½Ðµ Ð½Ð° Ð¼Ð°ÑÐ¸Ð²",
            "Ð½ÐµÑ‰Ð¾ Ð´Ñ€ÑƒÐ³Ð¾",
          ],
        }),
        r.a.i18n.add("en", {
          firstMethod: "I have an array, I would like to",
          findMethod: "I'm trying to find",
          methodOptions: "I need to",
          methodTypes: {
            add: "add",
            remove: "remove",
            find: "find",
            "iterate by": "iterate by",
            string: "string",
          },
          singleItem: "one item",
          manyItems: "one or many items",
          primaryOptions: [
            "add items or other arrays",
            "remove items",
            "find items",
            "walk over items",
            "return a string",
            "order an array",
            "something else",
          ],
        }),
        r.a.i18n.add("es", {
          firstMethod: "Tengo un array, me gustarÃ­a",
          findMethod: "Estoy intentando encontrar",
          methodOptions: "Necesito que",
          methodTypes: {
            add: "agregar",
            remove: "eliminar",
            find: "buscar",
            "iterate by": "iterar con",
            string: "Cadena de caracteres",
          },
          singleItem: "un elemento",
          manyItems: "uno o mas elementos",
          primaryOptions: [
            "agregar elementos u otros arrays",
            "eliminar elementos",
            "buscar elementos",
            "pasar entre elementos",
            "devolver una cadena de caracteres",
            "ordenar un array",
            "cualquier otra cosa",
          ],
        }),
        r.a.i18n.add("de", {
          firstMethod: "Ich habe ein Array und wÃ¼rde gerne",
          findMethod: "Ich mÃ¶chte folgendes finden",
          methodOptions: "Ich muss",
          methodTypes: {
            add: "hinzufÃ¼gen",
            remove: "entfernen",
            find: "finden",
            "iterate by": "durchlaufen",
            string: "String zurÃ¼ckgeben",
          },
          singleItem: "ein Element",
          manyItems: "ein oder mehrere Elemente",
          primaryOptions: [
            "Elemente oder Arrays hinzufÃ¼gen",
            "Elemente entfernen",
            "Elemente finden",
            "Elemente durchlaufen",
            "einen String zurÃ¼ckgeben",
            "ein Array sortieren",
            "etwas anders machen",
          ],
        }),
        r.a.i18n.add("fr", {
          firstMethod: "J'ai un tableau, je voudrais",
          findMethod: "J'essaye de trouver",
          methodOptions: "J'ai besoin",
          methodTypes: {
            add: "d'ajouter",
            remove: "de supprimer",
            find: "de chercher",
            "iterate by": "d'itÃ©rer en",
            string: "chaÃ®ne de caractÃ¨res",
          },
          singleItem: "un Ã©lÃ©ment",
          manyItems: "un ou plusieurs Ã©lÃ©ments",
          primaryOptions: [
            "ajouter des Ã©lÃ©ments",
            "supprimer des Ã©lÃ©ments",
            "chercher des Ã©lÃ©ments",
            "parcourir les Ã©lÃ©ments",
            "retourner une chaÃ®ne de caractÃ¨res",
            "trier les Ã©lÃ©ments",
            "faire autre chose",
          ],
        }),
        r.a.i18n.add("nl", {
          firstMethod: "Ik heb een array, ik wil graag",
          findMethod: "Ik ben op zoek naar",
          methodOptions: "Ik moet",
          methodTypes: {
            add: "toevegen",
            remove: "verwijderen",
            find: "zoeken",
            "iterate by": "itereren door",
            string: "string",
          },
          singleItem: "een enkel element",
          manyItems: "een of meerdere elementen",
          primaryOptions: [
            "een element of een andere array toevoegen",
            "elementen verwijderen",
            "elementen zoeken",
            "door elementen heen loopen",
            "een string teruggeven",
            "een array ordenen",
            "iets anders",
          ],
        }),
        r.a.i18n.add("pt", {
          firstMethod: "Eu tenho um array e gostaria de:",
          findMethod: "Eu estou tentando encontrar",
          methodOptions: "Eu preciso",
          methodTypes: {
            add: "adicionar",
            remove: "remover",
            find: "procurar",
            "iterate by": "iterar",
            string: "string",
          },
          singleItem: "um item",
          manyItems: "um ou mais itens",
          primaryOptions: [
            "adicionar um item ou outro array",
            "remover itens",
            "procurar itens",
            "iterar sobre os itens",
            "retornar uma string",
            "ordernar os itens",
            "nenhuma das opÃ§Ãµes",
          ],
        }),
        r.a.i18n.add("zh_cn", {
          firstMethod: "æˆ‘æœ‰ä¸€ä¸ªæ•°ç»„ï¼Œæˆ‘æƒ³",
          findMethod: "æˆ‘æƒ³æŸ¥æ‰¾",
          methodOptions: "æˆ‘éœ€è¦",
          methodTypes: {
            add: "æ·»åŠ ",
            remove: "ç§»é™¤",
            find: "æŸ¥æ‰¾",
            "iterate by": "",
            string: "å­—ç¬¦ä¸²",
          },
          singleItem: "ä¸€ä¸ªå…ƒç´ ",
          manyItems: "ä¸€ä¸ªæˆ–å¤šä¸ªå…ƒç´ ",
          primaryOptions: [
            "æ·»åŠ å…ƒç´ æˆ–åˆ«çš„æ•°ç»„",
            "ç§»é™¤å…ƒç´ ",
            "æŸ¥æ‰¾å…ƒç´ ",
            "å¯¹æ¯ä¸ªå…ƒç´ è¿›è¡Œæ“ä½œ",
            "è¿”å›žå­—ç¬¦ä¸²",
            "å¯¹æ•°ç»„æŽ’åº",
            "å…¶å®ƒ",
          ],
        }),
        r.a.i18n.add("cz", {
          firstMethod: "MÃ¡m pole a chci",
          findMethod: "SnaÅ¾Ã­m se najÃ­t",
          methodOptions: "PotÅ™ebuji",
          methodTypes: {
            add: "pÅ™idat",
            remove: "odebrat",
            find: "nalÃ©zt",
            "iterate by": "projÃ­t pomocÃ­",
            string: "Å™etÄ›zec",
          },
          singleItem: "jeden prvek",
          manyItems: "jeden nebo vÃ­ce prvkÅ¯",
          primaryOptions: [
            "pÅ™idat prvky nebo jinÃ¡ pole",
            "odebrat prvky",
            "najÃ­t prvky",
            "projÃ­t prvky",
            "vrÃ¡tit Å™etÄ›zec",
            "seÅ™adit pole",
            "nÄ›co jinÃ©ho",
          ],
        }),
        r.a.i18n.add("ru", {
          firstMethod: "Ð£ Ð¼ÐµÐ½Ñ ÐµÑÑ‚ÑŒ Ð¼Ð°ÑÑÐ¸Ð², Ñ Ñ…Ð¾Ñ‚ÐµÐ» Ð±Ñ‹",
          findMethod: "Ð¯ Ð¿Ñ‹Ñ‚Ð°ÑŽÑÑŒ Ð½Ð°Ð¹Ñ‚Ð¸",
          methodOptions: "ÐœÐ½Ðµ Ð½ÑƒÐ¶Ð½Ð¾",
          methodTypes: {
            add: "Ð´Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ",
            remove: "ÑƒÐ´Ð°Ð»Ð¸Ñ‚ÑŒ",
            find: "Ð½Ð°Ð¹Ñ‚Ð¸",
            "iterate by": "Ð¿Ñ€Ð¾Ð¹Ñ‚Ð¸",
            string: "ÑÑ‚Ñ€Ð¾ÐºÐ°",
          },
          singleItem: "Ð¾Ð´Ð¸Ð½ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚",
          manyItems: "Ð¾Ð´Ð¸Ð½ Ð¸Ð»Ð¸ Ð±Ð¾Ð»ÐµÐµ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¾Ð²",
          primaryOptions: [
            "Ð´Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ñ‹ Ð¸Ð»Ð¸ Ð´Ñ€ÑƒÐ³Ð¸Ðµ Ð¼Ð°ÑÑÐ¸Ð²Ñ‹",
            "ÑƒÐ´Ð°Ð»Ð¸Ñ‚ÑŒ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ñ‹",
            "Ð½Ð°Ð¹Ñ‚Ð¸ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ñ‹",
            "Ð¿Ñ€Ð¾Ð¹Ñ‚Ð¸ Ð¿Ð¾ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð°Ð¼",
            "Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ñ‚ÑŒ ÑÑ‚Ñ€Ð¾ÐºÑƒ",
            "ÑƒÐ¿Ð¾Ñ€ÑÐ´Ð¾Ñ‡Ð¸Ñ‚ÑŒ Ð¼Ð°ÑÑÐ¸Ð²",
            "Ð´Ñ€ÑƒÐ³Ð¾Ðµ",
          ],
        }),
        r.a.i18n.add("id", {
          firstMethod: "Saya mempunyai array, saya ingin",
          findMethod: "Saya ingin mencari",
          methodOptions: "Saya perlu untuk",
          methodTypes: {
            add: "menambah",
            remove: "menghapus",
            find: "menemukan",
            "iterate by": "melakukan iterasi dengan",
            string: "string",
          },
          singleItem: "sebuah item",
          manyItems: "satu atau banyak item",
          primaryOptions: [
            "menambah item atau array lain",
            "menghilangkan item",
            "menemukan item",
            "melakukan iterasi terhadap item",
            "mengembalikan sebuah string",
            "mengurutkan sebuah array",
            "lainnya",
          ],
        }),
        r.a.i18n.add("sr", {
          firstMethod: "Imam niz, Å¾eleo/la bih da",
          findMethod: "PokuÅ¡avam da pronaÄ‘em",
          methodOptions: "Å½eleo/la bih",
          methodTypes: {
            add: "da dodam",
            remove: "da uklonim",
            find: "da pronaÄ‘em",
            "iterate by": "iteriram po",
            string: "string",
          },
          singleItem: "jednom elementu",
          manyItems: "jednom ili viÅ¡e elemenata",
          primaryOptions: [
            "dodam elemente ili druge nizove",
            "uklonim elemente",
            "pronaÄ‘em elemente",
            "preÄ‘em preko elemenata",
            "vratim string",
            "sortiram niz",
            "neÅ¡to drugo",
          ],
        }),
        r.a.i18n.set(k.state.curLanguage);
    },
    vsdj: function (e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = {
          state: {
            selectedMethod: "",
            adding: [
              {
                name: "splice",
                shortDesc: "prvek nebo prvky z/do pole",
                desc: "PÅ™idÃ¡ anebo odebere prvky z pole.",
                example:
                  "arr.splice(2, 0, 'tacos');<br>\n        console.log(arr);",
                output: "[5, 1, 'tacos', 8]",
              },
              {
                name: "push",
                shortDesc: "prvky na konec pole",
                desc: "PÅ™idÃ¡ jeden nebo vÃ­ce prvkÅ¯ na konec pole a vrÃ¡tÃ­ novou dÃ©lku pole.",
                example: "arr.push(2);<br>\n        console.log(arr);",
                output: "[5, 1, 8, 2]",
              },
              {
                name: "unshift",
                shortDesc: "prvky na zaÄÃ¡tek pole",
                desc: "PÅ™idÃ¡ jeden nebo vÃ­ce prvkÅ¯ na zaÄÃ¡tek pole a vrÃ¡tÃ­ novou dÃ©lku pole.",
                example: "arr.unshift(2, 7);<br>\n        console.log(arr);",
                output: "[2, 7, 5, 1, 8]",
              },
              {
                name: "concat",
                shortDesc:
                  "toto pole k jinÃ©mu poli/polÃ­m anebo hodnotÄ›/hodnotÃ¡m",
                desc: "VrÃ¡tÃ­ novÃ© pole sklÃ¡dajÃ­cÃ­ z tohoto pole a jinÃ½ch polÃ­ anebo hodnot.",
                example:
                  "let arr2 = ['a', 'b', 'c'];<br>\n        let arr3 = arr.concat(arr2);<br>\n        console.log(arr3);",
                output: "[5, 1, 8, 'a', 'b', 'c']",
              },
            ],
            removing: [
              {
                name: "splice",
                shortDesc: "prvek nebo prvky z pole",
                desc: "PÅ™idÃ¡ anebo odebere prvky z pole.",
                example: "arr.splice(2, 1);<br>\n        console.log(arr);",
                output: "[5, 1]",
              },
              {
                name: "pop",
                shortDesc: "poslednÃ­ prvek pole",
                desc: "Odebere poslednÃ­ prvek z pole a vrÃ¡tÃ­ odebranÃ½ prvek.",
                example: "arr.pop();<br>\n        console.log(arr);",
                output: "[5, 1]",
              },
              {
                name: "shift",
                shortDesc: "prvnÃ­ prvek pole",
                desc: "Odebere prvnÃ­ prvek z pole a vrÃ¡tÃ­ odebranÃ½ prvek.",
                example: "arr.shift();<br>\n        console.log(arr);",
                output: "[1, 8]",
              },
              {
                name: "slice",
                shortDesc:
                  "jeden nebo vÃ­ce prvkÅ¯ pro prÃ¡ci beze zmÄ›ny pole",
                desc: "<code>slice()</code> metoda vracÃ­ mÄ›lkou kopii ÄÃ¡sti pole do novÃ©ho pole. Lze specifikovat buÄ pouze koncovÃ½ prvek, kde poÄÃ¡teÄnÃ­ pozice je nula, anebo konec i zaÄÃ¡tek oddÄ›lenÃ© ÄÃ¡rkou. PÅ¯vodnÃ­ pole zÅ¯stÃ¡vÃ¡ beze zmÄ›ny.",
                example:
                  "let slicedArr = arr.slice(1);<br>\n        console.log(arr);<br>\n        console.log(slicedArr);",
                output: "[5, 1, 8]<br>\n        [1, 8]",
              },
            ],
            string: [
              {
                name: "join",
                shortDesc: "spojit vÅ¡echny prvky do jednoho Å™etezce",
                desc: "SpojÃ­ vÅ¡echny prvky pole do jednoho Å™etezce. Lze je spojit dohromady nebo mezi nÄ› nÄ›co vloÅ¾it, <code>elements.join(' -\n          ')</code> vrÃ¡tÃ­ <code>foo-bar</code>",
                example: "console.log(arr.join());",
                output: '"5,1,8"',
              },
              {
                name: "toString",
                shortDesc: "vrÃ¡tit Å™etÄ›zec reprezentujÃ­cÃ­ pole",
                desc: "VracÃ­ Å™etÄ›zec reprezentujÃ­cÃ­ pole a jeho prvky.",
                example: "console.log(arr.toString());",
                output: '"5,1,8"',
              },
              {
                name: "toLocaleString",
                shortDesc:
                  "vrÃ¡tit lokalizovanÃ½ Å™etÄ›zec reprezentujÃ­cÃ­ pole",
                desc: "Tato metoda je divnÃ¡. VracÃ­ lokalizovanÃ½ Å™etÄ›zec reprezentujÃ­cÃ­ pole a jeho prvky. To je Äasto pouÅ¾itelnÃ© pro data a mÄ›ny, ale mÃ¡ podivnÃ© vestavÄ›nÃ© abstrakce, takÅ¾e pÅ™ed pouÅ¾itÃ­m je vhodnÃ© se poradit s dokumentacÃ­.",
                example:
                  "let date = [new Date()];<br>\n        const arrString = arr.toLocaleString();<br>\n        const dateString = date.toLocaleString();<br>\n        console.log(arrString, dateString);",
                output: '"5,1,8 12/26/2017, 6:54:49 PM"',
              },
            ],
            ordering: [
              {
                name: "reverse",
                shortDesc: "obrÃ¡tit poÅ™adÃ­ v poli",
                desc: "ObrÃ¡tÃ­ poÅ™adÃ­ prvkÅ¯ pole - prvnÃ­ bude poslednÃ­ a poslednÃ­ prvnÃ­.",
                example: "arr.reverse();<br>\n        console.log(arr);",
                output: "[8, 1, 5]",
              },
              {
                name: "sort",
                shortDesc: "seÅ™adit prvky pole",
                desc: "SeÅ™adÃ­ prvky pole a vrÃ¡tÃ­ seÅ™azenÃ© pole.",
                example: "arr.sort();<br>\n        console.log(arr);",
                output: "[1, 5, 8]",
              },
            ],
            other: [
              {
                name: "length",
                shortDesc: "zjistit dÃ©lku pole",
                desc: "VrÃ¡tÃ­ poÄet prvkÅ¯ v poli.",
                example: "console.log(arr.length);",
                output: "3",
              },
              {
                name: "fill",
                shortDesc: "pÅ™iÅ™adit vÅ¡em prvkÅ¯m pole statickou hodnotu",
                desc: "PÅ™iÅ™adÃ­ vÅ¡em prvkÅ¯m pole statickou hodnotu.",
                example: "arr.fill(2);<br>\n        console.log(arr);",
                output: "[2, 2, 2]",
              },
              {
                name: "copyWithin",
                shortDesc: "zkopÃ­rovat Å™adu prvkÅ¯ v poli uvnitÅ™ pole",
                desc: "ZkopÃ­ruje Å™adu prvkÅ¯ pole uvnitÅ™ pole. Lze specifikovat buÄ koncovÃ½ prvek, kde poÄÃ¡teÄnÃ­ pozice je nula, anebo poÄateÄnÃ­ i koncovÃ½ prvek, oddÄ›lenÃ© ÄÃ¡rkou.",
                example: "arr.copyWithin(1);<br>\n        console.log(arr);",
                output: "[5, 5, 1]",
              },
            ],
            iterate: [
              {
                name: "forEach",
                shortDesc: "spuÅ¡tÄ›nÃ­ funkce nad kaÅ¾dÃ½m prvkem",
                desc: "forEach() metoda spustÃ­ pÅ™eddefinovanou funkci jednou nad kaÅ¾dÃ½m prvkem pole.",
                example:
                  "arr.forEach((element) => {<br>\n        <span>&nbsp;&nbsp;</span>console.log(element)<br>\n        });",
                output: "5<br>\n        1<br>\n        8",
              },
              {
                name: "map",
                shortDesc:
                  "funkce, kterÃ¡ vytvoÅ™Ã­ novÃ© pole ze vÅ¡ech prvkÅ¯",
                desc: "VytvoÅ™Ã­ novÃ© pole, kterÃ© je vÃ½sledkem volÃ¡nÃ­ definovanÃ© funkce nad kaÅ¾dÃ½m prvkem.",
                example:
                  "let map = arr.map(x => x + 1);<br>\n        console.log(map);",
                output: "[6, 2, 9]",
              },
              {
                name: "entries",
                shortDesc: "iteraÄnÃ­ho objektu",
                desc: "VrÃ¡tÃ­ novÃ½ iterÃ¡tor pole, kterÃ½ obsahuje klÃ­Ä-hodnota pÃ¡r pro kaÅ¾dou pozici v poli. IterÃ¡tor mÃ¡ mnoho pÅ™Ã­padÅ¯ uÅ¾itÃ­ jak samostatnÄ›, tak ve spojenÃ­ s jinÃ½mi metodami jako <code>values</code> nebo <code>keys</code>",
                example:
                  "let iterator = arr.entries();<br>\n        console.log(iterator.next().value);",
                output:
                  '[0, 5]<br>\n        <span class="comment">// the 0 is the index,</span><br>\n        <span class="comment">// the 5 is the first number</span>',
              },
            ],
            find: {
              single: [
                {
                  name: "includes",
                  shortDesc: "prvek pokud existuje",
                  desc: "ZjistÃ­ jestli existuje danÃ½ prvek v poli a podle toho vrÃ¡tÃ­ true nebo false.",
                  example: "console.log(arr.includes(1));",
                  output: "true",
                },
                {
                  name: "indexOf",
                  shortDesc: "prvnÃ­ vÃ½skyt danÃ©ho prvku",
                  desc: "VrÃ¡tÃ­ prvnÃ­ vÃ½skyt danÃ©ho prvku nebo -1 pokud prvek nenalezne.",
                  example: "console.log(arr.indexOf(5));",
                  output: "0",
                },
                {
                  name: "lastIndexOf",
                  shortDesc: "poslednÃ­ vÃ½skyt danÃ©ho prvku",
                  desc: "VrÃ¡tÃ­ poslednÃ­ vÃ½skyt danÃ©ho prvku nebo -1 pokud prvek nenalezne.",
                  example: "console.log(arr.lastIndexOf(5));",
                  output: "0",
                },
                {
                  name: "find",
                  shortDesc: "prvnÃ­ prvek, kterÃ½ splÅˆuje podmÃ­nku",
                  desc: "VrÃ¡tÃ­ nalezenou hodnotu v poli, pokud prvek v poli odpovÃ­dÃ¡ definovanÃ© testovacÃ­ funkci nebo undefined pokud nenalezne. PodobnÃ© jako <code>findIndex()</code>, ale vracÃ­ prvek mÃ­sto pozice.",
                  example:
                    "let isTiny = (el) => el < 2;<br>\n          console.log(arr.find(isTiny));",
                  output: "1",
                },
                {
                  name: "findIndex",
                  shortDesc: "prvnÃ­ vÃ½skyt prvku, kterÃ½ splÅˆuje podmÃ­nku",
                  desc: "VrÃ¡tÃ­ pozici prvnÃ­ho prvku v poli, kterÃ½ splÅˆuje definovanou testovacÃ­ funkci. V ostatnÃ­ch pÅ™Ã­padech vracÃ­ -1. PodobnÃ© jako <code>find()</code>, ale vracÃ­ pozici mÃ­sto prvku.",
                  example:
                    "let isBig = (el) => el > 6;<br>\n          console.log(arr.findIndex(isBig));",
                  output: "2",
                },
                {
                  name: "reduce",
                  shortDesc: "hodnotu po redukci pole z leva do prava",
                  desc: "PouÅ¾ije funkci na stÅ™adaÄ (accumulator) a kaÅ¾dou hodnotu pole (z leva do prava) redukuje do jednÃ© hodnoty.",
                  example:
                    "let reducer = (a, b) => a + b;<br>\n          <span>&nbsp;&nbsp;</span>console.log(arr.reduce(reducer));",
                  output: "14",
                },
                {
                  name: "reduceRight",
                  shortDesc: "hodnotu po redukci pole z prava do leva",
                  desc: "PouÅ¾ije funkci na stÅ™adaÄ (accumulator) a kaÅ¾dou hodnotu pole (z prava do leva) redukuje do jednÃ© hodnoty.",
                  example:
                    "[arr, [0, 1]].reduceRight((a, b) => {<br>\n          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>\n          }, [])",
                  output: "[0, 1, 5, 1, 8]",
                },
              ],
              many: [
                {
                  name: "filter",
                  shortDesc:
                    "hodnoty, kterÃ© splÅˆujÃ­ mnou vytvoÅ™enou podmÃ­nku",
                  desc: "VytvoÅ™Ã­ novÃ© pole se vÅ¡emi prvky pole, pro kterÃ© definovanÃ¡ filtrovacÃ­ funkce vrÃ¡tÃ­ hodnotu true.",
                  example:
                    "let filtered = arr.filter(el => el > 4);<br>\n          console.log(filtered)",
                  output: "[5, 8]",
                },
                {
                  name: "every",
                  shortDesc: "jestli vÅ¡echny prvky splÅˆujÃ­ podmÃ­nku",
                  desc: "VracÃ­ true pokud kaÅ¾dÃ½ prvek odpovÃ­dÃ¡ definovanÃ© testovacÃ­ funkci.",
                  example:
                    "let isSmall = (el) => el < 10;<br>\n          console.log(arr.every(isSmall));",
                  output: "true",
                },
                {
                  name: "some",
                  shortDesc: "jestli alespoÅˆ jeden prvek splÅˆuje podmÃ­nku",
                  desc: "VracÃ­ true pokud alespoÅˆ jeden prvek odpovÃ­dÃ¡ definovanÃ© testovacÃ­ funkci.",
                  example:
                    "let biggerThan4 = (el) => el > 4;<br>\n          console.log(arr.some(biggerThan4));",
                  output: "true",
                },
              ],
            },
          },
        });
    },
  },
  ["NHnr"]
);