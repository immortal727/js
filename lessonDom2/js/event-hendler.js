// addEventListener + ���������� �������
let firstElem = document.getElementById("firstElem");
console.log(firstElem);
firstElem.addEventListener("click", firstHandler); // ����������

function firstHandler(event) {
    console.log("firstHandler");
    console.log(event, this);
    this.removeEventListener("click", firstHandler); // ��������
}

let secondElem = document.getElementById("secondElem");
console.log(secondElem);
// �������� ����������:
// ���� �� ����� ����� ������� ����������:
// secondElem.addEventListener("click", secondHandler.bind(secondElem, "���������")); // {once: true} - ����� �� ����� ������ ����
// ���� ����� ����� ������� ����������:
let secondHandler_in_var = secondHandler.bind(secondElem, "��������� � secondHandler");
secondElem.addEventListener("click", secondHandler_in_var);

function secondHandler(arg, event) {
    console.log("secondHandler");
    console.log("arg " + arg);
    console.log("event", event);
    console.log("this", this);
    this.removeEventListener("click", secondHandler_in_var);
}

// addEventListener + ��������� �������
let thirdElem = document.getElementById("thirdElem");
console.log(thirdElem);
thirdElem.addEventListener("click", (event) => {
    console.log("thirdElem Handler");
    console.log("event", event);
    console.log("this", this);
    // ��������� ���������� �������: this - window,
    //��������� �������: this - thirdElem
});

// �� ������������, ���� ����� �������� �����������!
// ���� ����� ����������� �������� ����������� ������� ����� ��������� � ����������

// on+��������_������� + ��������� �������
let fourthElem = document.getElementById("fourthElem");
console.log(fourthElem);
fourthElem.onclick = (event) => {
    console.log("fourthElem Handler");
    console.log("event", event);
    console.log("this", this); // ��� ��������� ���������� this - window, ��� ��������� this - fourthElem

    // ��������
    fourthElem.onclick = null;
};

// on+��������_������� + ���������� �������
let fifthElem = document.getElementById("fifthElem");
console.log(fifthElem);
fifthElem.onclick = fifthHandler;

function fifthHandler(event) {
    console.log("fifthHandler");
    console.log("event", event);
    console.log("this", this); // this - fifthElem

    // ��������
    fifthElem.onclick = null;
}

// on+��������_������� + ���������� ������� - �������� ����������
let sixElem = document.getElementById("sixElem");
console.log(sixElem);
sixElem.onclick = sixHandler.bind(sixElem, "��������� � sixHandler", options{ once: true });
// � ����� �������� ����� ������������ addEventListener!!!
// ��� ����, ����� ������� ��������� ������� � �����������, ���� ��������� � ��������� ����������
// ���� ����� ������� ���� ��� ������� ����� ���������� �������� � ����� options{once:true}
function sixHandler(arg, event) {
    console.log("sixHandler");
    console.log("arg " + arg); // ���������, ���������� ����� bind
    console.log("event", event); // ���������� � �������
    console.log("this", this);

    // ��������
    sixElem.onclick = null;
}