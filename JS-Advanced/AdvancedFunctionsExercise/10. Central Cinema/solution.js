function solve() {
    const [movieName, hall, thicketPrice, onScreenBtn] = Array.from(document.getElementById('container').children);
    const inputs = [movieName, hall, thicketPrice];
    const ulOnScreen = document.querySelector('section#movies>ul');
    const ulArchive = document.querySelector('section#archive>ul');
    const clearBtn = document.querySelector('section#archive>button');
    clearBtn.addEventListener('click', clear);
    onScreenBtn.addEventListener('click', onScreen);
    let ticketsSold = 0;
    let aMovieName = "";
    let aPrice = 0;
 
    function onScreen(e) {
        e.preventDefault();
        if (!isValidFields(movieName, hall, thicketPrice)) {
            return;
        };
        let movieLi = createMovie(movieName, hall, thicketPrice);
        ulOnScreen.appendChild(movieLi);
        inputs.forEach(i => i.value = '');
    }
 
    function isValidFields(...args) {
        let localeCheck = true;
        for (const input of args) {
            if (input.value === '') {
                return false;
            }
        }
        let lastArg = args[args.length - 1];
        if (isNaN(lastArg.value)) {
            localeCheck = false;
        }
        return localeCheck;
    }
 
    function createTag(type, content, placeholder) {
        let element = document.createElement(type);
        element.placeholder = placeholder;
        if (element.tagName === 'INPUT') {
            element.value = content;
        } else {
            element.textContent = content;
        }
        return element;
    }
 
    function createMovie(name, movieHall, price) {
        let li = createTag('li');
        let span = createTag('span', name.value);
        let strongHall = createTag('strong', `Hall: ${movieHall.value}`);
        li.appendChild(span);
        li.appendChild(strongHall);
        let div = createTag('div');
        let strongPrice = createTag('strong', Number(price.value).toFixed(2));
        let inputForTickets = createTag('input', '', 'Tickets Sold');
        let button = createTag('button', 'Archive');
        button.addEventListener('click', () => {
            if (inputForTickets.value) {
                ticketsSold = inputForTickets.value;
                aMovieName = span.textContent;
                aPrice = strongPrice.textContent;
                archive(button);
            }
        });
        [strongPrice, inputForTickets, button].forEach(e => div.appendChild(e));
 
        li.appendChild(div);
        return li;
    }
 
    function archive(btn) {
        if (isNaN(ticketsSold) && ticketsSold !== "") {
            return;
        } else {
            btn.parentElement.parentElement.remove();
        }
        const archivedLi = createTag("li");
        const span = createTag("span", aMovieName);
        archivedLi.appendChild(span);
        const price = Number(aPrice) * ticketsSold;
        const strong = createTag("strong", `Total amount: ${price.toFixed(2)}`);
        archivedLi.appendChild(strong);
        const deleteBtn = createTag("button", "Delete");
        deleteBtn.addEventListener("click", () => {
            deleteBtn.parentElement.remove();
        });
        archivedLi.appendChild(deleteBtn);
        ulArchive.appendChild(archivedLi);
 
    }
    function clear() {
        const listItems = ulArchive.querySelectorAll("li");
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].remove();
        }
    }
}
