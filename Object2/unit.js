// ������ ������ �������� �������

function Unit(name) {
    // �������� (������� ���������)
    this._health = 10;
    this._attack = 3;
    this._name = name;
    // ��������� ��������
    // let privateProp = "��������� ��������";
}

// Unit.prototype[isAlive]

// �������� �������
Unit.prototype.isAlive = function () {
    return this._health > 0;
};

let unit1 = new Unit("�����");
unit1._health = 90;
unit1.isActive();
let unit2 = new Unit("����");
unit2._health = 50;
unit2.isActive();