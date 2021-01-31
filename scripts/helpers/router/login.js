class Login extends AbstractView {
    constructor(props) {
        super(props);
        this.setTitle('Login')
    }

     getHtml() {
        const form = document.createElement('div');
        let entity = new Entity(loginForm, form);
        return entity.entity;
    }

}
