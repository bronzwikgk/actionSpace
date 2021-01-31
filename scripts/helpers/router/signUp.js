class SignUp extends AbstractView {
    constructor(props) {
        super(props);
        this.setTitle('Sign Up')
    }

     getHtml() {
        const form = document.createElement('form');
        let entity = new Entity(signUpForm, form);
        return entity.entity;
    }

}
