
//ToDo 1. Lấy các phần tử HTML
//draggable_list: đại diện cho thẻ <ul> nơi chứa các phần tử danh sách cần kéo thả.
const draggable_list = document.getElementById('draggable-list');

// check: đại diện cho nút kiểm tra, khi nhấn sẽ so sánh thứ tự kéo thả với thứ tự gốc.
const check = document.getElementById('check');

//ToDo 2. Dữ liệu ban đầu: Danh sách 10 người giàu nhất
// richestPeople: mảng chứa tên của những người giàu nhất thế giới.
const richestPeople = [
    'Jeff Bezos',
    "Elon Musk",
    "Bernard Arnault",
    "Bill Gates",
    "Mark Zuckerberg",
    "Warren Buffett",
    "Larry Ellison",
    "Larry Page",
    "Sergey Brin",
    "Mukesh Ambani",
];

//ToDo 3. Khởi tạo danh sách
const listItems = [];
let dragStartIndex;

//ToDo 4. Tạo danh sách kéo thả
createList();

//ToDo 5. Hàm tạo danh sách
function createList() {
    [...richestPeople]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((person, index) => {
            const listItem = document.createElement('li');
            listItem.setAttribute('data-index', index);

            listItem.innerHTML = `
                <span class="number">${index + 1}</span>
                <div class="draggable">
                    <p class="person-name">${person}</p>
                    <i class="fas fa-grip-lines"></i>
                </div>
            `;

            listItems.push(listItem);

            draggable_list.appendChild(listItem);
    })
}



/*

? richestPeople được sao chép bằng toán tử [...] để tránh ảnh hưởng đến mảng gốc.

? .map() là một phương thức của mảng (array method) trong JavaScript, dùng để tạo ra một mảng mới bằng cách áp dụng một hàm cho mỗi phần tử của mảng gốc.

! .map(a => ({ value: a, sort: Math.random() })) tạo ra một mảng mới gồm các đối tượng với hai thuộc tính: value (giá trị gốc) và sort (số ngẫu nhiên để sắp xếp).

    a => ({ value: a, sort: Math.random() }) là một hàm mũi tên (arrow function) nhận vào một tham số a và trả về một đối tượng với hai thuộc tính value và sort.

? .forEach() là một phương thức của mảng (array method) trong JavaScript, dùng để lặp qua từng phần tử trong mảng và thực hiện một hành động nào đó với mỗi phần tử.
    array.forEach((element, index, array) => {
        hành động với element
    });

    element: giá trị của phần tử hiện tại.

    index (tuỳ chọn): vị trí của phần tử trong mảng.

    array (tuỳ chọn): chính mảng đang được lặp qua.

! const listItem = document.createElement('li');  

    Tạo thẻ <li> mới, gán data-index để lưu vị trí ban đầu.

! listItem.setAttribute('data-index', index);
    Thêm nội dung HTML gồm:

    Số thứ tự (<span class="number">)

    Thẻ <div class="draggable"> chứa tên người và icon để kéo (<i class="fas fa-grip-lines">)

    Lưu thẻ li vào mảng listItems.

    Thêm listItem vào draggable_list trong DOM.

*/