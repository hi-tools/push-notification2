importScripts('/firebase-app.js');
importScripts('/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyBJWm5aYrgXV32i5rB67mDrMcfidU2hvbE",
    authDomain: "testfirebase-8377f.firebaseapp.com",
    databaseURL: "https://testfirebase-8377f.firebaseio.com",
    projectId: "testfirebase-8377f",
    storageBucket: "testfirebase-8377f.appspot.com",
    messagingSenderId: "710798760112"
};
firebase.initializeApp(config);

var messaging = firebase.messaging();

//messaging.requestPermission().then(function ()
//{
//    console.log("Permission is Ok", messaging);
//    return messaging.getToken().then(function (token)
//    {
//        console.log("token =>", token);
//    });
//}).catch(function ()
//{
//    console.log("Error");
//});

//messaging.onMessage(function (payload)
//{
//    alert("onMessage 22222222222");
//    console.log(" =>", payload);
//});

//messaging.setBackgroundMessageHandler(function (payload)
//{
//    console.log('[firebase-messaging-sw.js] Received background message ', payload);
//    // Customize notification here
//    var notificationTitle = 'Background Message Title';
//    var notificationOptions = {
//        body: 'Background Message body. 1111111111',
//        icon: '/firebase-logo.png'
//    };

//    return self.registration.showNotification(notificationTitle, notificationOptions);
//});
        //messaging.onMessage(function (payload)
        //{
        //    console.log(" Index.cshtml =>", payload);
        //    var res = document.getElementById("res");
        //    res.innerText = payload.notification.body;
        //});
messaging.setBackgroundMessageHandler(function (payload)
{
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    //alert("Received background message");
    // Customize notification here
    //var notificationTitle = 'تایل جدید';
    //var notificationOptions = {
    //    body: 'بادی جدید',
    //    icon: '/firebase-logo.png'
    //};

    //return self.registration.showNotification(notificationTitle, notificationOptions);
});