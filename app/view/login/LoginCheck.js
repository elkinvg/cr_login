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
                fieldLabel: 'Username',
                allowBlank: false,
                listeners: {
                    specialkey: 'pressKeyEnter'
                },
            }, {
                xtype: 'textfield',
                name: 'password',
                inputType: 'password',
                fieldLabel: 'Password',
                allowBlank: false,
                listeners: {
                    specialkey: 'pressKeyEnter'
                },
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }
});
