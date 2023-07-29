function editElement(reference, match, replacer) {
    let text = reference.textContent;
    let regex = new RegExp(match, "g");
    let result = text.replace(regex, replacer);
    reference.textContent = result;
}