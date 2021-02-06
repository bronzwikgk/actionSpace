
window.onload = () => {
loadActionEditor()
}


function loadActionEditor(){
    var ehhAppOutput = document.createElement('ehhOutput');

    var temp = new Entity(actionEditor, ehhAppOutput);

    document.getElementsByTagName('body')[0].appendChild(temp.entity);
    console.log("all set and done");
    const model = new Entity(temp, null),
        view = new EntityView(model, {
            'buttons': document.getElementsByTagName('toolbar')[0].children,
            'editor': document.getElementsByTagName('ehhoutput')[0].children[1],
            'document': document,
            'bottom': document.getElementsByTagName('bottombar')[0].children,
            'signUp':document.getElementById('sign'),
            'login':document.getElementById('log'),
            'sidebar':document.getElementById('sidenav'),
            'actionview':document.getElementById('dropdown-menu')
        }),
        controller = new process(view, model);
}

function loadSignUpForm(){

const form=document.createElement('form');

    var entity=new Entity(signUpForm,form)
    // console.log(entity.entity)
    document.getElementsByTagName('body')[0].appendChild(entity.entity);

    const formModel=new Entity(entity,null),
            view=new formView(formModel,{
                'signup':document.getElementById('signup'),
                'username':document.getElementById('username'),
                'password':document.getElementById('password'),
            }),
        controller=new formController(view,formModel)
}

function loadLoginForm(){

    const form=document.createElement('form');

    var entity=new Entity(loginForm,form)
    document.getElementsByTagName('body')[0].appendChild(entity.entity);
    const formModel=new Entity(entity,null),
        view=new formView(formModel,{
            'login':document.getElementById('login'),
            'username':document.getElementById('username'),
            'password':document.getElementById('password'),
        }),
        controller=new formController(view,formModel)
}
