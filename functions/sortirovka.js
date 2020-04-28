// ������ sort()
let someArr = ["������", "���", "�����", "�����������", "�����"];
comeArr.sort();
console.log(someArr);
 // sort() C��������� �� �������� � ������������������ �������

someArr = [7, 40, 600, 6];
someArr.sort();
console.log(SomeArr); // [40, 6, 600, 7] ���������� ��� �������

// ����� ������������� �� ������� �������������
let users = [
    {
        login: "qwe",
        age: 34,
        city: "������",
        favouriteLangs: ["php", "js"]
    },
    {
        login: "asd",
        age: 23,
        city: "������",
        favouriteLangs: ["python", "javascript"]
    },
    {
        login: "rty56",
        age: 58,
        city: "�����",
        favouriteLangs: ["java", "c"]
    },
    {
        login: "rty56",
        age: 58,
        city: "�����",
        favouriteLangs: ["java", "scala"]
    },
    {
        login: "ght",
        age: 45,
        city: "�����������",
        favouriteLangs: ["php", "ruby"]
    },
];
function sortArr(first, second) {
    // ������� ������ ����������:
    // 0, ���� first == second
    // -1, ���� first < second
    // 1, ���� first > second
 
    return first.city.localeCompare(second.city);
}
someArr.sort(sortArr);
console.log(someArr);