class Validator {
    static setFormAndSettings(form, setting) {
        return new Validator(form, setting);
    }
}

// ����� : �� 3 �� 7
// ������: �� 5

// ��� ������ ������:
// ����� ��������� ���������� ������ � �������� �� ������ / ������

// ��� ������� �� ������ type=submit:
// � ������ ��������� ����������� - ����� success �������
// � ������ ���������� � �������� - ����� error �������
let submitSuccess = () => {
    console.log("������� ����� ��������� �� ������")
}
let submitError = () => {
    console.log("������� ������ ��������� �� ������")
}
let settings = {
    login: { // �������� �������� name
        rules: { // �������
            requiered:true, // ���� ����������� ��� ����������
            minLenghth: 3, // ���. �����
            maxLenghth: 7 // ����. �����
        }
    },
    password: { // password - �������� �������� name
        rules: {
            requiered: true,
            minLenghth:5
        }
    }
};
Validator.setFormAndSettings(document.forms.validator.settings)
    .setSubmitSuccess(submitSuccess)
    .submitError(submitError)
    .run();
