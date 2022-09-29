// Book Ticket Button 
function bookTicket() {
    document.getElementById('form-frame').style.display = "block";
    document.getElementById('modal').style.display = "block";
}

function exitBookForm() {
    document.getElementById('modal').style.display = "none";
    document.getElementById('form-frame').style.display = "none";
}

function confirmTicket() {
    let fullName = document.getElementById('fullName').value;
    let address = document.getElementById('address').value;
    let fairAmount = document.getElementById('fair-amount').value;
    let typeOfFair = document.getElementById('type-fair').value;
    console.log(fullName, address, fairAmount, typeOfFair);
    if (fullName && address && fairAmount) {
        document.getElementById('form-frame').style.display = "none";
        document.getElementById('check-frame').style.display = "block";
    } else {
        document.getElementById('check-full').style.display = "block";
    }
    var totalBill;
    document.getElementById('customer').innerHTML = `Tên: ${fullName}`;
    if (typeOfFair == 1) {
        totalBill = 150000 * fairAmount;
        document.getElementById('type').innerHTML = `\nLoại vé: Bình dân - 150,000 VND`;
    } else if (typeOfFair == 2) {
        totalBill = 250000 * fairAmount;
        document.getElementById('type').innerHTML = `\nLoại vé: Trung bình - 250,000 VND`;
    } else {
        totalBill = 350000 * fairAmount;
        document.getElementById('type').innerHTML = `\nLoại vé: Đặc biệt - 350,000 VND`;
    }
    document.getElementById('amount').innerHTML = `\nSố lượng: ${fairAmount}`;
    document.getElementById('bill').innerHTML = `<b>\nTổng tiền: ${totalBill} VND</b>`;
}

function goHome() {
    document.getElementById('check-frame').style.display = "none";
    document.getElementById('modal').style.display = "none";
    document.getElementById('check-full').style.display = "none";
}
