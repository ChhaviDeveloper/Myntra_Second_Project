const categoryURL = "https://chhavideveloper.github.io/JSON_Data/category.json"
const prodURL = "https://chhavideveloper.github.io/JSON_Data/products.json"

const getCategory= async() => {
    let response = await fetch(categoryURL,{method : 'GET'})
    let data = await response.json();
    
        data.map((item) =>{
            let element = document.createElement('option')
            let text = document.createTextNode(item.category)
            element.appendChild(text)
            element.value = item.id
            document.getElementById('jcat').appendChild(element)
            
        })
}


// const getRest = async() => {
//     let cat = document.getElementById('jcat').value;
//     let rest = document.getElementsByClassName('restSelect')[0];
    
//     let response = await fetch(`${prodURL}${cat}`,{method : 'GET'})
//     let data = await response.json()
//         data.map((item) =>{
//             let element = document.createElement('option')
//             let text = document.createTextNode(item.product_type)
//             element.appendChild(text)
//             rest.appendChild(element)
            
//         })
// }

const getRest = async() => {
    let cat = document.getElementById('jcat').value;
    let rest = document.getElementsByClassName('restSelect')[0];
    while (rest.length > 0) {
        rest.remove(0)
    }
    let response = await fetch(`${prodURL}`, {
        method: 'GET'
    })
    let data = await response.json()
    let data2 = data.filter((current_element) => {
        if (cat == current_element.category_id) {
            return current_element
        }
    })

    // data2.map((item) => {
    //     let element = document.createElement('option')
    //     let text = document.createTextNode(`${ item.Name } | ${ item.Price }`)
    //     element.appendChild(text)
    //     dresses.appendChild(element)
    // })
}
