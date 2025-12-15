lst = ["one", 2, 3.0, "four", [], {}];
(6) ['one', 2, 3, 'four', Array(0), {…}]0: "one"1: 22: 33: "four"4: Array(0)length: 0[[Prototype]]: Array(0)5: [[Prototype]]: Objectlength: 6[[Prototype]]: Array(0)
typeof(lst)
'object'
const lst = ["one", 2, 3.0, "four", [], {}];
undefined
lst.push("new item here");
7
lst
(7) ['one', 2, 3, 'four', Array(0), {…}, 'new item here']0: "one"1: 22: 33: "four"4: []5: {}6: "new item here"length: 7[[Prototype]]: Array(0)
const newItem = lst.pop();
undefined
newItem
'new item here'
lst
(6) ['one', 2, 3, 'four', Array(0), {…}]0: "one"1: 22: 33: "four"4: []5: {}length: 6[[Prototype]]: Array(0)
