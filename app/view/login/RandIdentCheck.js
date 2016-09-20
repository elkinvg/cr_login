Ext.define('Login.view.login.RandIdentCheck', {
    extend: 'Ext.window.Window',
    xtype: 'randidentcheck',
    requires: [
        'Login.view.login.RandIdentController',
        'Ext.form.Panel'
    ],
    controller: 'randidentcheck',
    bodyPadding: 10,
    title: 'Идентификация, шаг 2',
    closable: false,
    autoShow: true,
    items: {
        xtype: 'form',
        reference: 'randidentform',
        items: [
            {
                xtype: 'textfield',
                name: 'rand_ident',
                fieldLabel: 'Число Rand_ident',
                allowBlank: false,
//                listeners: {
//                    specialkey: 'pressKeyEnter'
//                },
            },
//            {
//                xtype: 'textfield',
//                name: 'password',
//                inputType: 'password',
//                fieldLabel: 'Пароль',
//                allowBlank: false,
//                listeners: {
//                    specialkey: 'pressKeyEnter'
//                },
//            },
            {
                xtype: 'displayfield',
                name: 'logpassdisp',
                hideEmptyLabel: false,
                value: 'Введите число <br>высланное Вам на email'
            }],
        buttons: [{
                text: 'Ввести',
                formBind: true,
                listeners: {
                    click: 'onCheckClick',
                }
            }]
    }
});


