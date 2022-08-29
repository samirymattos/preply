export function configQueriesString(queries) {
  let queriesString = ""; 
  if (!queries) return queriesString;
  for (var prop in queries) {
      queriesString = queriesString + `${prop}=${queries[prop]}&`
  }
  return queriesString;
}