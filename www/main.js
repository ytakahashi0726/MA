ons.ready(function() {
    console.log("Onsen UI is ready!");
});

function btnClick(){
    var str = document.getElementById('text1').value;
    ons.notification.alert({
        'title':'Alert',
        'message':'Hello,' + str + '!!'
    });
}

function checkChange(){
    var check1 = document.getElementById('check1');
    var val = check1.checked ? 'ON':'OFF';
    document.getElementById('msg').textContent = 'Checkbox is ' + val;
}

function radioChange(){
    var radio1 = document.getElementsByName('radio1');
    var val = radio1.item(0).checked ? 'A':'';
    val = radio1.item(1).checked ? 'B':val;
    document.getElementById('msg').textContent = 'Radio Button is ' + val;
}

function switchChange(){
    var switch1 = document.getElementById('switch1');
    var val = switch1.checked ? 'ON':'OFF';
    document.getElementById('msg').textContent = 'Switch is ' + val;
}

function listClick(event){
    var list1 = document.getElementById('list1');
    var sel = event.target.textContent;
    ons.notification.alert({
        'title':'Alert',
        'message':'you select "' + sel + '"!!'
    });
}

function goOther(){
    var options = {
        animation:'slide',
        onTransitionEnd:function(){}
    };
    var navigator1 = document.getElementById('navigator1');
    navigator1.pushPage('other.html', options);
}

function goBack(){
    var navigator1 = document.getElementById('navigator1');
    navigator1.popPage();
}

ons.ready(function(){
    var options = {
        animation:'slide',
        onTransitionEnd:function(){}
    };
    var navigator1 = document.getElementById('navigator1');
    navigator1.pushPage('page1', options);
});

function goPage(page){
    var options = {
        animation:'slide',
        onTransitionEnd:function(){}
    };
    var navigator1 = document.getElementById('navigator1');
    navigator1.pushPage(page, options);
}