/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Login.view.login.LoginCheckController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.logincheck',

    onLoginClick: function() {
        var loginForm = this.lookupReference('loginform');
        var uname = loginForm.getForm().findField('username').value;
        var passw = loginForm.getForm().findField('password').value;
        this.checkUser(uname,passw);
    },
    
    checkUser: function(username,password) {
        var me = this;
        var loginForm = this.lookupReference('loginform');
        var prop = Ext.create('Common_d.Property');
        
        Ext.Ajax.request({
            url: prop.getUrllogin() + '/Status()',
            //async: false,
            method: 'GET',
//            method: 'POST',
            timeout: 2000,
            disableCaching: false,
            username: username,
            password: password,
            //params: {
            //    argin: aaa
            //},
            success: function (response, opts) {
                me.getView().destroy();
                if (typeof dbg !== 'undefined') {
                    var obj = Ext.decode(response.responseText);
                    console.log(obj);
                }
                localStorage.setItem("login",opts.username);
                localStorage.setItem("password",opts.password);
            },
            failure: function (response, opts) {
                loginForm.getForm().findField('username').setValue('');
                loginForm.getForm().findField('password').setValue('');
            },
            callback: function (options, success, response) {
                if (success)
                    window.location.reload();
            }
        });        
    },
});