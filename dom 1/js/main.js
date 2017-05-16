var toDoList = new ToDo();

function renderViewById (id, items) {
    console.log(items);
    var listHTML = '';
    items.forEach(function (item) {
        listHTML += ('<li><input type="checkbox" name="vehicle" value="Bike"'
         + (item.completed ? 'checked' : '')   +' onclick="coplited('+ item.id +')">'
         + '<span style="' + (item.completed ? 'text-decoration:line-through' : '')  + '" >' + item.title + '</span> <a href="#" onclick="deleteItem('+ item.id +')">X</a></li>');
    });

    document.getElementById(id).innerHTML = listHTML;
}

function ToDo() {
    this.items = [];
}

ToDo.prototype.pushItem = function (newItem) {
    this.items.push(newItem || []);
}

ToDo.prototype.getComplitedCount = function(name) {
    var count = 0;
    var items = this.items;
    if(arguments.length === 1) {
        items = this.searchByName(name);
    }
    items.forEach(function (item) {
        count += item.completed;
    });
    return count;
}

ToDo.prototype.findIndexById = function (id) {
    var item = this.items.indexOf(this.items.find(function (val) {
            return val.id == id;
        }));
    return item;
}

ToDo.prototype.deleteItemById = function (id) {
    this.items.splice(this.findIndexById(id), 1);
};

ToDo.prototype.searchByName = function (name) {
    var reg = new RegExp(name, 'ig');
    var item = this.items.filter(function (val) {
            if(val.title.search(reg) !== -1) {
                return val;
            }
        });
    return item;
};

function Item(title, completed) {
    this.id = ++Item.staticId;
    this.title = title || "default";
    this.completed = completed || false;
}
Item.staticId = 0;

function addItem() {
    var elNewTask = document.getElementById('new-task');
    var title = elNewTask.value.trim();
    if (!title) {
        alert("Please input valid title");
        return;
    }
    var item = new Item(title, false);
    toDoList.pushItem(item);
    render();
    elNewTask.value = '';
}

function deleteItem(id) {
    toDoList.deleteItemById(id);
    var elNewTask = document.getElementById('new-task');
    var title = elNewTask.value.trim();
    render(title);
}

function coplited(id) {
    var temp = toDoList.items[toDoList.findIndexById(id)];
    console.log(toDoList.findIndexById(id));
    temp.completed = !temp.completed;
    var elNewTask = document.getElementById('new-task');
    var title = elNewTask.value.trim();
    render(title);
}

function render(title) {
    var items = toDoList.searchByName(title);
    renderViewById("todo-list", items);
    document.getElementById('all-task').innerHTML = items.length;
    document.getElementById('complited-task').innerHTML = toDoList.getComplitedCount(title);
}
