let data = [];

async function fetchData() {
    try {
        let response = await fetch('https://agreeable-toad-rugby-shirt.cyclic.app/data');
        let jsonData = await response.json();
        this.data = jsonData;
        renderDataTable(jsonData);
    } catch (error) {
        console.error(error);
    }
}

function renderDataTable(data) {
    let tableBody = document.getElementById('data-table-body');
    let rows = data.map(item => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td> <img src="${item.avatar[0]}" width="100" height="100"></td>
            <td>${item.name}</td>
            <td>${item.size}</td>
            <td>${item.price}</td>
            <td>${item.categories}</td>
            <td>${item.discount}</td>
            <td>
                <button onclick="deleteData(${item.id})">Delete</button>
            </td>
        `;
        return row;
    });
    tableBody.innerHTML = "";
    tableBody.append(...rows);
}

function showAddModal() {
    document.getElementById('add-modal').style.display = 'block';
}

function closeAddModal() {
    document.getElementById('add-modal').style.display = 'none';
}

async function addData() {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let size = document.getElementById('size').value;
    let price = document.getElementById('price').value;
    let categories = document.getElementById('categories').value;
    let discount = document.getElementById('discount').value;
    let avatar = document.getElementById('avatar').value;
    let rate = document.getElementById('rate').value;
    let count = document.getElementById('count').value;
    let newItem = {
        id: data.length + 1,
        name: name,
        size: size,
        price: price,
        categories: categories,
        discount: discount,
        avatar: [avatar],
        rating: {
            rate: rate,
            count: count
        }
    };
    data.push(newItem);

    try {
        let response = await fetch('https://agreeable-toad-rugby-shirt.cyclic.app/data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newItem)
        });
        if (!response.ok) {
            throw new Error('Failed to add item to API');
        }
        renderDataTable(data);
        closeAddModal();
    } catch (error) {
        console.error(error);
    }
}


function showEditModal(id) {
    // Find item with matching id
    let item = data.find(i => i.id === id);
    //  console.log(data)
    // Populate form fields with item data
    document.getElementById('name').value = item.name;
    document.getElementById('size').value = item.size;
    document.getElementById('price').value = item.price;
    document.getElementById('categories').value = item.categories;
    document.getElementById('discount').value = item.discount;
    document.getElementById('avatar').value = item.avatar[0];
    // document.getElementById('rate').value = item.rating.rate;
    document.getElementById('count').value = item.rating.count;
}
function showAddModal() {
let modal = document.getElementById('add-modal');
modal.style.display = 'block';
}

function closeEditModal() {
    let modal = document.getElementById('edit-modal');
    modal.style.display = 'none';
}




function editData(id) {
    // Get form data
    let name = document.getElementById('name').value;
    let size = document.getElementById('size').value;
    let price = document.getElementById('price').value;
    let categories = document.getElementById('categories').value;
    let discount = document.getElementById('discount').value;
    let avatar = document.getElementById('avatar').value;
    let rate = document.getElementById('rate').value;
    let count = document.getElementById('count').value;

    // Find item with matching id
    let item = data.find(i => i.id === id);
   console.log(item)
    // Update item data
    item.name = name;
    item.size = size;
    item.price = price;
    item.categories = categories;
    item.discount = discount;
    item.avatar = [avatar];
    item.rating.rate = rate;
    item.rating.count = count;

    // data2.push(item);
    // Update item in API
fetch(`https://agreeable-toad-rugby-shirt.cyclic.app/data/${id}`, {
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(item)
})
.then(response => {
if (!response.ok) {
throw new Error('Failed to update item in API');
}
// Update item in table
let tableRow = document.querySelector(`#data-table-body tr[data-id="${id}"]`);
tableRow.querySelector('td[data-field="name"]').innerHTML = item.name;
tableRow.querySelector('td[data-field="size"]').innerHTML = item.size;
tableRow.querySelector('td[data-field="price"]').innerHTML = item.price;
tableRow.querySelector('td[data-field="categories"]').innerHTML = item.categories;
tableRow.querySelector('td[data-field="discount"]').innerHTML = item.discount;
tableRow.querySelector('td[data-field="rating"]').innerHTML = item.rating.rate;
// Close the modal
closeEditModal();
})
.catch(error => console.error(error));
}


async function deleteData(id) {
    // Find item with matching id
    let item = data.find(i => i.id === id);
    // Remove item from data array
    data.splice(data.indexOf(item), 1);
  
    try {
      // Remove item from API
      let response = await fetch(`https://agreeable-toad-rugby-shirt.cyclic.app/data/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      });
      if (!response.ok) {
        throw new Error('Failed to delete item from API');
      }
      // Remove item from table
      let tableRow = document.querySelector(`#data-table-body tr[data-id="${id}"]`);
      tableRow.remove();
    // showEditModal(id)
      
    } catch (error) {
      console.error(error);
    }
  }
  