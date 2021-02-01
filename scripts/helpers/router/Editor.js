class Editor extends AbstractView {
    constructor(props) {
        super(props);
        this.setTitle('Editor')
        this.editor = document.createElement('ehhOutput');
        this.entity = new Entity(actionEditor, this.editor);
    }

     getHtml() {

        return this.entity.entity;
    }
    registerListeners(){
        const model = new Entity(this.editor, null),
            view = new EntityView(model, {
                'buttons': document.getElementsByTagName('toolbar')[0].children,
                'editor': document.getElementsByTagName('ehhoutput')[0].children[1],
                'document': document,
                'bottom': document.getElementsByTagName('bottombar')[0].children,
                'signUp':document.getElementById('sign'),
                'login':document.getElementById('log')
            }),
            controller = new process(view, model);
    }

}
