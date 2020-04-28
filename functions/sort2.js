// 1 �� ������, ���� ������ �����
// 2 �� ��������, ���� ������� ����������
// 3. �� ������

let users = [
    {
        login: "qwe",
        age: 23,
        city: "������",
    },
    {
        login: "asd",
        age: 34,
        city: "������",
    },
    {
        login: "rty56",
        age: 34,
        city: "�����",
    }
];

function sortByCity(usersArr) {
    usersArr.sort(function (a, b) {
        return (a.city.toLowerCase().localeCompare(b.city.toLowerCase()) === 0) ? a.age - b.age : a.city.toLowerCase().localeCompare(b.city.toLowerCase());
    });
users.sort(sortArr);
console.log(users);