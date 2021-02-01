class SignUp extends AbstractView {
    constructor(props) {
        super(props);
        this.setTitle('Sign Up')

        this.form = document.createElement('form');
        this.entity = new Entity(signUpForm, this.form);
    }

     getHtml() {
        return this.entity.entity;
    }
    registerListeners(){

        const formModel=new Entity(this.entity,null),
            view=new formView(formModel,{
                'signup':document.getElementById('signup'),
                'username':document.getElementById('username'),
                'password':document.getElementById('password'),
            }),
            controller=new formController(view,formModel)
    }

}
