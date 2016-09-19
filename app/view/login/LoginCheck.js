Ext.define('Login.view.login.LoginCheck', {
  extend: 'Ext.window.Window',
  xtype: 'logincheck',
  
  requires: [
        'Login.view.login.LoginCheckController',
        'Ext.form.Panel'
  ],
  
    controller: 'logincheck',
    bodyPadding: 10,
    title: 'Login Window',
    closable: false,
    autoShow: true,
    
    items: {
        xtype: 'form',
        reference: 'loginform',
        items: [{
                xtype: 'textfield',
                name: 'username',
                fieldLabel: 'Логин',
                allowBlank: false,
                listeners: {
                    specialkey: 'pressKeyEnter'
                },
            }, {
                xtype: 'textfield',
                name: 'password',
                inputType: 'password',
                fieldLabel: 'Пароль',
                allowBlank: false,
                listeners: {
                    specialkey: 'pressKeyEnter'
                },
        }, {
            xtype: 'displayfield',
            name: 'logpassdisp',
            hideEmptyLabel: false,
            value: 'Введите имя пользователя<br>и пароль'
        }],
        buttons: [{
            text: 'Ввести',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }
});
