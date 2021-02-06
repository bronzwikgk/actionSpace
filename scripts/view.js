class EventEmitter {
    constructor() {
        this._events = {};
    }

    on(evt, listener) {
        (this._events[evt] || (this._events[evt] = [])).push(listener);
        return this;
    }

    emit(evt, arg) {
        (this._events[evt] || []).slice().forEach(lsn => lsn(arg));
    }
}

class EntityView extends EventEmitter {
    constructor(model, elements) {
        super();
        this.model = model;
        this.elements = elements;
        let buttons = this.elements.buttons;
        for (let i = 0; i < buttons.length; ++i) {
            buttons[i].addEventListener('click', () => {
                let cmd = buttons[i].getAttribute('data-cmd');
                if (cmd === "createLink") {
                    this.emit("createLink", cmd);
                } else {
                    this.emit("other", cmd);
                    console.log(cmd);
                }
                if (cmd === "showCode") {
                    this.emit("showCode");
                }
            })
        }

        let bottomButton = this.elements.bottom;
        for (let i = 0; i < bottomButton.length; ++i) {
            bottomButton[i].addEventListener('click', () => {

                let cmd = bottomButton[i].getAttribute('data-cmd');
                if (cmd === 'addHeading') {
                    this.emit("addHeading");
                } else if (cmd === "para") {
                    this.emit("addPara");
                } else if (cmd === "save") {
                    this.emit("save");
                } else if (cmd === "reload") {
                    this.emit("reload");
                }
            })
        }
        // console.log(bottomButton[4]);
        bottomButton[4].addEventListener('change', (event) => {
            // console.log("he")
            this.emit("loadJson", event);
        })

        this.elements.signUp.addEventListener('click', () => {
            this.emit('signup');
        })
        this.elements.login.addEventListener('click', () => {
            this.emit('login')
        })

        this.elements.sidebar.addEventListener('click', (e) => {
            let fileName = e.target.innerText;
            this.emit('openFile', fileName)

        })

        this.elements.actionview.addEventListener('click', (e) => {
            this.emit('actionview', e)
        })


        this.loadActionView()
    }

    loadActionView(){
        const files={...localStorage}
        for (let file in files){
            let newLink=document.createElement('a')
            newLink.href="javascript:;";
            newLink.type='a';
            newLink.innerText=file
            this.elements.sidebar.appendChild(newLink)
            console.log(file)
        }
    }
    updateDomContent(cmd) {
        if (cmd === "createLink") {
            let url = prompt("Enter Url");
            this.elements.document.execCommand(cmd, true, url); // Since View doesnt perform any action on users data directly, Ideally this should be part of controller class and should be handled by event controller

        } else
            this.elements.document.execCommand(cmd, false, null);
    }

    updateDom(cmd) {

        const headingDiv = document.createElement("div");
        headingDiv.classList.add("div-block");
        headingDiv.contentEditable = "true";
        const editor = document.getElementsByTagName("divblock")[0];
        editor.appendChild(headingDiv);
        headingDiv.focus();

        if (cmd === "headingBlock") {
            document.execCommand("formatBlock", false, '<h1>');
        } else if (cmd === "paraBlock") {
            document.execCommand("formatBlock", false, '<p>');

        }
    }

    getDom() {
        return this.elements.editor.innerText;
    }

    getDomContent() {
        return this.elements.editor.innerHTML;
    }

    renderLoginForm() {
        const body = document.getElementsByTagName('body')[0];
        while (body.firstChild) {
            body.removeChild(body.firstChild)
        }


        navigateTo('/login')
        router()

    }

    renderSignUp() {
        navigateTo('/signup')
        router()

    }

    updateSideBar(filename) {
        let link = document.createElement('a');
        link.href = "#"
        link.innerText = filename
        this.elements.sidebar.appendChild(link)
    }

    newFile(){
        clearDom()
        loadActionEditor()
    }
}


class formView extends EventEmitter {
    constructor(model, elements) {
        super();
        this.model = model
        this.elements = elements

        console.log(this.elements)


        this.elements.signup?.addEventListener('click', () => {
            let username = this.elements.username.value;
            let password = this.elements.password.value;
            this.emit('signup', {username, password})

        });
        this.elements.login?.addEventListener('click', () => {
            let username = this.elements.username.value;
            let password = this.elements.password.value;
            this.emit('login', {username, password})

        })
    }

}


