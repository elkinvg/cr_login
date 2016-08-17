/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Login.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Login',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    views : [
        'Login.view.login.LoginCheck',
        'Login.view.main.Main'        
    ],    
    
    launch: function () {
        // TODO - Launch the application
        
        // It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
        var login, passw;

        // Check to see the current value of the localStorage key
        login = localStorage.getItem("login");
        passw = localStorage.getItem("password");
        if (login!==null || passw!==null) {
            localStorage.setItem('TutorialLoggedIn', true);
            loggedIn = "true";
        }

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        Ext.widget(loggedIn ? 'app-main' : 'logincheck');
    },
//
//    onAppUpdate: function () {
//        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
//            function (choice) {
//                if (choice === 'yes') {
//                    window.location.reload();
//                }
//            }
//        );
//    }
});
