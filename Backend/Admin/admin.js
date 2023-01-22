let data = [];
var deleteButton;
function fetchData() {
    // Fetch data from API
    fetch('https://63c636e7dcdc478e15bd1636.mockapi.io/api/v1/Clothes')
        .then(response => response.json())
        .then(data => {
            // Save data to global variable
            this.data = data;

            // Populate data table
            let tableBody = document.getElementById('data-table-body');
            for (let i = 0; i < data.length; i++) {
                let row = document.createElement('tr');
                let idCell = document.createElement('td');
                idCell.innerHTML = data[i].id;
                let nameCell = document.createElement('td');
                nameCell.innerHTML = data[i].name;
                let sizeCell = document.createElement('td');
                sizeCell.innerHTML = data[i].size;
                let priceCell = document.createElement('td');
                priceCell.innerHTML = data[i].price;
                let categoriesCell = document.createElement('td');
                categoriesCell.innerHTML = data[i].categories;
                let discountCell = document.createElement('td');
                discountCell.innerHTML = data[i].discount;
                // let ratingCell = document.createElement('td');
                // ratingCell.innerHTML = data[i].rating.count;
                let actionCell = document.createElement('td');
                let editButton = document.createElement('button');
                editButton.innerHTML = 'Edit';
                editButton.onclick = () => showEditModal(data[i].id);
                var deleteButton = document.createElement('button');
                deleteButton.innerHTML = 'Delete';
                deleteButton.onclick = () => deleteData(data[i].id);
                actionCell.appendChild(editButton);
                actionCell.appendChild(deleteButton);
                row.appendChild(idCell);
                row.appendChild(nameCell);
                row.appendChild(sizeCell);
                row.appendChild(priceCell);
                row.appendChild(categoriesCell);
                row.appendChild(discountCell);
                // row.appendChild(ratingCell);
                row.appendChild(actionCell);
                tableBody.appendChild(row);
}
});
}
function showAddModal() {
let modal = document.getElementById('add-modal');
modal.style.display = 'block';
}
function closeAddModal() {
let modal = document.getElementById('add-modal');
modal.style.display = 'none';
}

function addData() {
// Get form data
event.preventDefault();
let name = document.getElementById('name').value;
let size = document.getElementById('size').value;
let price = document.getElementById('price').value;
let categories = document.getElementById('categories').value;
let discount = document.getElementById('discount').value;
let avatar = document.getElementById('avatar').value;
let rate = document.getElementById('rate').value;
let count = document.getElementById('count').value;
// Create new item object
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

// Add new item to data array
data.push(newItem);

// Add new item to API
fetch('https://63c636e7dcdc478e15bd1636.mockapi.io/api/v1/Clothes', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(newItem)
})
.then(response => {
if (!response.ok) {
throw new Error('Failed to add item to API');
}
// Add new item to the table
let tableBody = document.getElementById('data-table-body');
let row = document.createElement('tr');
let idCell = document.createElement('td');
idCell.innerHTML = newItem.id;
let nameCell = document.createElement('td');
nameCell.innerHTML = newItem.name;
let sizeCell = document.createElement('td');
sizeCell.innerHTML = newItem.size;
let priceCell = document.createElement('td');
priceCell.innerHTML = newItem.price;
let categoriesCell = document.createElement('td');
categoriesCell.innerHTML = newItem.categories;
let discountCell = document.createElement('td');
discountCell.innerHTML = newItem.discount;
let ratingCell = document.createElement('td');
ratingCell.innerHTML = newItem.rating.rate;
let actionCell = document.createElement('td');
let editButton = document.createElement('button');
editButton.innerHTML = 'Edit';
editButton.onclick = () => showEditModal(newItem.id);
var deleteButton = document.createElement('button');
deleteButton.innerHTML = 'Delete';
deleteButton.onclick = () => deleteData(newItem.id);
actionCell.appendChild(editButton);
actionCell.appendChild(deleteButton);
row.appendChild(idCell);
row.appendChild(nameCell);
row.appendChild(sizeCell);
row.appendChild(priceCell);
row.appendChild(categoriesCell);
row.appendChild(discountCell);
row.appendChild(ratingCell);
row.appendChild(actionCell);
tableBody.appendChild(row);
// Close the modal
closeAddModal();
})
.catch(error => console.error(error));
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
fetch(`https://63c636e7dcdc478e15bd1636.mockapi.io/api/v1/Clothes/${id}`, {
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




deleteButton.addEventListener("click", function(event){
    event.preventDefault();
    deleteData();
});

function deleteData(id) {
// Find item with matching id
let item = data.find(i => i.id === id);
// Remove item from data array
data.splice(data.indexOf(item), 1);

// Remove item from API
fetch(`https://63c636e7dcdc478e15bd1636.mockapi.io/api/v1/Clothes/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item)
})
.then(response => {
    if (!response.ok) {
        throw new Error('Failed to delete item from API');
    }
    // Remove item from table
    let tableRow = document.querySelector(`#data-table-body tr[data-id="${id}"]`);
    tableRow.remove();
})
.catch(error => console.error(error));
}