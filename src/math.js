// BUG: add() subtracts instead of adding. The agent must fix this under src/.
function add(a, b) {
  return a - b;
}

module.exports = { add };
