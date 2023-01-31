const maleNameList = document.querySelector("[data-gender=male]");
const femaleNameList = document.querySelector("[data-gender=female]");

const fetchNames = async () => {
    const response = await fetch("http://localhost:8080/api/v1/names");
    const { names } = await response.json()
    const sortedNames = names.sort((a, b) => {
        let x = a.value.toLowerCase();
        let y = b.value.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
    }).forEach(name => {
        const listItem = document.createElement("li")
        listItem.textContent = name.value
        if (name.gender === "male") {
            const list = maleNameList.querySelector(`[data-letter=${name.value.charAt(0)}]`)
            if (list) list.appendChild(listItem)
            else {
                const listWrapper = document.createElement("div")
                const heading = document.createElement("h3")
                heading.textContent = name.value.charAt(0)
                listWrapper.appendChild(heading)
                const list = document.createElement("ol")
                list.setAttribute("data-letter", name.value.charAt(0))
                list.appendChild(listItem)
                listWrapper.appendChild(list)
                maleNameList.appendChild(listWrapper)
            }
        }
        if (name.gender === "female") {
            const list = femaleNameList.querySelector(`[data-letter=${name.value.charAt(0)}]`)
            if (list) list.appendChild(listItem)
            else {
                const listWrapper = document.createElement("div")
                const heading = document.createElement("h3")
                heading.textContent = name.value.charAt(0)
                listWrapper.appendChild(heading)
                const list = document.createElement("ol")
                list.setAttribute("data-letter", name.value.charAt(0))
                list.appendChild(listItem)
                listWrapper.appendChild(list)
                femaleNameList.appendChild(listWrapper)
            }
        }
    });
}

fetchNames();