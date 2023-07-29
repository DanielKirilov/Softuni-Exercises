function extract(content) {
  let p = document.getElementById(content);
  let text = p.textContent;
  let regex = /\(([^()]*)\)/gm;
  let result = [];
  let matches = [...text.matchAll(regex)].map((match) => result.push(match[1]));


  return result.join("; ");
}
