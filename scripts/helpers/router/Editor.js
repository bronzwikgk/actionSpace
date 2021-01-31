class Editor extends AbstractView {
    constructor(props) {
        super(props);
        this.setTitle('Editor')
    }

     getHtml() {
        const form = document.createElement('ehhOutput');
        let entity = new Entity(actionEditor, form);
        return entity.entity;
    }

}
