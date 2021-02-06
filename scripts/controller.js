class entityController {

    constructor(ehhView, model) {
        this._model = model;
        this.ehhView = ehhView;
        this.openedItem=""
        ehhView.on("createLink", cmd => this.createLink(cmd));
        ehhView.on("showCode", () => this.showCode());
        ehhView.on("other", command => this.otherActions(command));
        ehhView.on("addHeading", () => {
            this.addHeadingBlock();
        })
        ehhView.on("addPara", () => {
            this.addParaBlock();
        })
        ehhView.on("save", () => {
            this.save();
        })
        ehhView.on("reload", () => {
            this.reload();
        })
        ehhView.on("loadJson", (event) => {
            this.openFile(event);
        })
        ehhView.on('signup', () => {
            this.startSignUp()
        })
        ehhView.on('login', () => {
            this.startLogin()
        })
        ehhView.on('openFile', (filename) => {
            this.loadFile(filename);
        })
        ehhView.on('actionview', (event) => {
            this.handleActionView(event.target)
        })

    }

    handleActionView(target) {

        let action = target.id;

        if (action === "newfile") {
            this.ehhView.newFile()

        } else if (action === "openfile") {



        } else if (action === "savefile") {
            console.log(this.openedItem)
            storageHelper.saveToStorage("local",this.openedItem)

        } else if (action === "export") {

            storageHelper.saveToStorage("hardDrive")
        } else if (action === "import") {
            //TODO
        }

    }

    createLink(cmd) {
        console.log(cmd);
        this.ehhView.updateDomContent(cmd);
    }

    showCode() {
        //TODO(send this to backend)
        alert('check Console');
        let htmlFromEditor = this.ehhView.getDomContent();
        console.log(htmlFromEditor);
    }

    otherActions(command) {
        this.ehhView.updateDomContent(command);
        console.log(`other ${command}`);

    }

    addHeadingBlock() {
        this.ehhView.updateDom("headingBlock");
    }

    addParaBlock() {
        this.ehhView.updateDom("paraBlock");

    }

    save() {

        storageHelper.saveToStorage()
    }

    reload() {

        const body = document.getElementsByTagName('body')[0];
        while (body.firstChild) {
            body.removeChild(body.firstChild)
        }

        loadActionEditor()
    }

    loadFile(filename) {
        actionEditor.actionEditorBlock[0].divBlock=JSON.parse(localStorage.getItem(filename));
        this.openedItem=filename
        console.error(this.openedItem)
        this.ehhView.newFile()
    }

    openFile(event) {
        let storage = new storageHelper
        let fileName = storage.openFile(event)
        this.ehhView.updateSideBar(fileName)
    }

    startSignUp() {
        this.ehhView.renderSignUp()

    }

    startLogin() {
        this.ehhView.renderLoginForm()
    }

}


class process extends entityController {


    static processReq(input, output, key, value) {
        console.log(input);
        if (operate.is(input) === 'Object') {
            // console.log("obj")
            var buffer = process.iterateObj(input, output, key);
        } else if (operate.is(input) === 'Array') {
            // console.log("arr")
            var buffer = process.iterateObj(input, output, key);
        } else if (operate.is(input) === 'String') {

            console.log('String >>>', key, value);
            //Entity.set(input,this.output,key,value);
        }
        return buffer;
    }

    static iterateObj(input, output) {
        for (var key in input) {
            const value = input[key];
            // console.log("found", key, input[key])
            if (operate.is(value) === 'Object') {
                // console.log("Object", output);
                var buffer = Entity.create(input, output, key);
                process.iterateObj(input[key], buffer, key, value)
                Entity.append(buffer, output);
            } else if (operate.is(value) === 'Array') {
                // console.log("foundArray", key)


                var buffer = Entity.create(input, output, key);
                process.iterateArr(input[key], buffer, key, value)
                Entity.append(buffer, output);
                // console.log('Array',key, value, buffer);
            } else if (operate.is(value) === 'String' || operate.is(value) === 'Boolean') {
                // console.log('String',key, value);
                Entity.set(input, output, key, value);
                //Entity.set(input,this.entity,key,value);
            }

        }
        // console.log('Iterate Objoutput',output)
        return output;
    }

    static iterateArr(input, output, key, value, callback, callbackClass) {
        //  console.log("Iterating Array", input, output, key, value);

        for (var i = 0; i < input.length; i++) {
            //console.log("Object found in array", input[i]);

            if (operate.is(input[i]) === 'Object') { //console.log("Object in array",response)

                var response = Entity.create(input[i], output, input[i].name);
                process.iterateObj(input[i], response, input[i].name);
                Entity.append(response, output);

            } else if (operate.is(input[i]) === 'Array') { // console.log("found Array", key, input[key])

            } else if (operate.is(input[i]) === 'String') { //  console.log("found property, Set Attributes in output", key, input[key])

                // Entity.set(input,output,key,input[key])
            } else {

                console.log("stray found")
            }
            //console.log(callbackClass,callback)
            //   console.log(key, input[key])
            //var response = operate.isNotEmpty(callback) ? conductor.conduct(input, output, key, input[key], callback, callbackClass) : null;
            if (operate.isNotEmpty(callback)) {

                //  var response = conductor.conduct(input, output, key, input[key], callback, callbackClass);

            }
        }
        console.log("iterator Array response", response);
        return response;
    }

}


class formController {
    constructor(view, model) {
        this.view = view
        this.model = model
        this.view.on('signup', (data) => {
            this.startSignUpFlow(data)
        })
        this.view.on('login', (data) => {
            this.login(data)
        })
    }

    signUp(data) {
        console.warn(data)
        if (data != null || data !== false) {
            localStorage.setItem(data.username, data.password);
            return true
        } else {
            return false
        }

    }

    login(data) {

        console.log(localStorage.getItem(data.username))
        if (localStorage.getItem(data.username) === data.password) {
            this.renderEditor(true);
        } else {
            alert("wrong id or password")
        }
    }

    checkUserNameExist(data) {
        return {
            exist: !!localStorage.getItem(data.username),
            data
        };
    }

    initiateSignUp(exist) {
        console.log(exist)
        if (exist.exist === false) {
            return exist.data
        } else {
            return null
        }
    }

    renderEditor(exist) {
        if (!exist) {
            alert("username exist")
        }
        const body = document.getElementsByTagName('body')[0];
        while (body.firstChild) {
            body.removeChild(body.firstChild)
        }

        loadActionEditor()
    }

    startSignUpFlow(data) {

        navigateTo('/signup')
        router()
        // var flow = new everyFlow({
        //     param: data,
        //     canBeReStarted: false,
        //     autoRestartOnFailure: false
        // })
        // flow.start(this.checkUserNameExist, this.initiateSignUp, this.signUp, this.renderEditor);
    }
}
