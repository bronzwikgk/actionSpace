var actionEditor = {
        div: [{
            name: 'button',
            type: 'button',
            innerText: 'Sign Up',
            id: 'sign'
        }, {
            name: 'button',
            type: 'button',
            innerText: 'Login ',
            id: 'log'
        }],
        style: '/*min-height : 200px;*/ width: max-content; border-top: 0px; padding: 21px; overflow: auto; display:grid',
        sideNav: {
            class: 'sidenav',
            id: 'sidenav',
            div: []
        },
        actionView: [

            {
                name: 'button',
                type: 'button',
                class: 'action-view-button',
                innerHTML: '<i class="fas fa-bars"></i> File'
            }, {
                name: 'div',
                type: 'div',
                id: 'dropdown-menu',
                class: 'dropdown-menu',
                div: [
                    {
                        name: 'a',
                        href: "javascript:;",
                        type: 'button',
                        id: 'newfile',
                        innerText: 'New File'
                    }, {
                        name: 'a',
                        href: "javascript:;",
                        type: 'a',
                        id: 'openfile',
                        innerText: 'Open File'

                    }, {

                        name: 'a',
                        href: "javascript:;",
                        type: 'a',
                        id: 'savefile',
                        innerText: 'Save File'
                    }, {

                        name: 'a',
                        href: "javascript:;",
                        type: 'a',
                        id:'export',
                        innerText: 'Export'
                    },
                    {

                        name: 'a',
                        href: "javascript:;",
                        type: 'a',
                        id:'import',
                        innerText: 'Import'
                    }
                ]
            }

        ],
        toolBar:
            [
                {
                    name: 'button',
                    type: 'div',
                    class: 'topbar-button',
                    'innerHTML': '<i class="fas fa-align-right"></i>',
                    'data-cmd': 'justifyRight'
                },
                {
                    name: 'button',
                    type: 'div',
                    class: 'topbar-button',
                    'innerHTML': '<i class="fas fa-align-left"></i>',
                    'data-cmd': 'justifyLeft'
                },
                {
                    name: 'button',
                    type: 'button',
                    class: 'topbar-button',
                    'innerHTML': '<i class="fas fa-align-center"></i>',
                    'data-cmd': 'justifyCenter'
                },
                {
                    name: 'button',
                    type: 'button',
                    class: 'topbar-button',
                    'innerHTML': '<i class="fas fa-align-justify"></i>',
                    'data-cmd': 'justifyFull'
                },
                {
                    name: 'button',
                    type: 'button',
                    class: 'topbar-button',
                    'innerHTML': '<i class="fas fa-bold"></i>',
                    'data-cmd': 'Bold'
                },
                {
                    name: 'button',
                    type: "button",
                    class: 'topbar-button',
                    'innerHTML': '<i class="fas fa-italic"></i>',
                    "data-cmd": 'italic'

                }, {
                name: 'button',
                type: "button",
                class: 'topbar-button',
                'innerHTML': '<i class="fas fa-underline"></i>',
                "data-cmd": 'underline'

            },
                {
                    name: 'button',
                    type: "button",
                    class: 'topbar-button',
                    'innerHTML': '<i class="fas fa-list-ul"></i>',
                    "data-cmd": 'insertUnorderedList'

                }, {
                name: 'button',
                type: "button",
                class: 'topbar-button',
                'innerHTML': '<i class="fas fa-list-ol"></i>',
                "data-cmd": 'insertOrderedList'
            }, {
                name: 'button',
                type: "button",
                class: 'topbar-button',
                'innerHTML': '<i class="fas fa-link"></i>',
                "data-cmd": 'createLink'
            }, {

                name: 'button',
                type: "button",
                class: 'topbar-button',
                'innerHTML': '<i class="fas fa-code"></i>',
                "data-cmd": 'showCode'
            }, {
                name: 'button',
                type: "button",
                class: 'topbar-button',
                'innerHTML': '<i class="fas fa-redo"></i>',
                "data-cmd": 'redo'
            }, {
                name: 'button',
                type: "button",
                class: 'topbar-button',
                'innerHTML': '<i class="fas fa-undo"></i>',
                "data-cmd": 'undo'
            }
            ],
        actionEditorBlock:
            [
                {
                    name: 'div',
                    class: 'actionEditor-block',
                    id: 'actionEditor-block',
                    lineNumbers: true,
                    //mimeMode: ['html', 'richText', 'json', 'css', 'javascript'],
                    //output: ['self', 'output'],
                    state: 'idle',
                    divBlock: [
                        {
                            name: 'div',
                            contentEditable: true,
                            class: 'div-block ',
                            lineNumbers: true,
                            innerText: "Write whatever you can think of...",
                            //mimeMode: ['html', 'richText', 'json', 'css', 'javascript'],
                            //output: ['self', 'output'],
                            state: 'idle',
                        },
                    ]

                }

            ],
        bottomBar:
            [
                {
                    name: 'button',
                    type: 'div',
                    class: 'topbar-button',
                    'innerHTML': '<i class="fas fa-heading  "></i>',
                    'data-cmd': 'addHeading'
                },
                {
                    name: 'button',
                    type: 'div',
                    class: 'topbar-button',
                    'innerHTML': '<i class="fas fa-paragraph"></i>',
                    'data-cmd': 'para'
                }, {
                name: 'button',
                type: 'div',
                class: 'topbar-button',
                'innerHTML': '<i class="fas fa-save"></i>',
                'data-cmd': 'save'
            }, {
                name: 'button',
                type: 'div',
                class: 'topbar-button',
                'innerHTML': '<i class="fas fa-sync"></i>',
                'data-cmd': 'reload'
            }, {
                name: "input",
                accept: "application/json",
                type: 'file',
                "data-cmd": 'loadJson'
            }
            ]
    }
;
//this to be deleted and validated with attributes of live elements on runtime
var htmlAttributesList = ['name', 'label', 'onclick', 'lineNumbers', 'class', 'id', 'text', 'title', 'content', 'value', 'type', 'data-cmd'];


var loginForm = {
    form: [
        {
            name: 'input',
            type: 'text',
            id: 'username',
        },

        {
            name: 'input',
            type: 'password',
            id: 'password'
        }, {
            name: 'button',
            type: 'button',
            innerText: 'Login',
            id: 'login'
        }

    ]
}

var signUpForm = {
    form: [
        {
            name: 'input',
            type: 'text',
            id: 'username',
        },

        {
            name: 'input',
            type: 'password',
            id: 'password'
        }, {
            name: 'button',
            type: 'button',
            innerText: 'Sign Up',
            id: 'signup'
        }

    ]
}
