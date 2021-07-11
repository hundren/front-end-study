const graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

/**
 * Find a mango seller
 * @param {string} name Friend's name
 * @returns {boolean} Search results
 */
function search(name) {
  let stack = []
  stack = stack.concat(graph[name])
  const searched = [];
  while (stack.length) {
    const item = stack.shift()
    console.log('item',item)
    if (searched.indexOf(item) === -1) {
      console.log('item我认为认为',item)
      if(item === 'jonny'){
        return true
      }
      stack = stack.concat(graph[item]);
      // Marks this person as searched
      searched.push(item);
    }
  }
  return false
}
search('you')