class Login extends AbstractView {
    constructor(props) {
        super(props);
        this.setTitle('Login')
        this.form = document.createElement('div');
        this.entity = new Entity(loginForm, this.form);

    }

     getHtml() {
        return this.entity.entity;

        }
    registerListeners(){
        const formModel=new Entity(this.entity,null),
            view=new formView(formModel,{
                'login':document.getElementById('login'),
                'username':document.getElementById('username'),
                'password':document.getElementById('password'),
            }),
            controller=new formController(view,formModel)
    }
}
