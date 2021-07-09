class MainTemplate {
    content: HTMLElement;

    constructor(elementtype:string="div"){
        this.content = document.createElement(elementtype);
    }
    
    addClass(classname: string){
        this.content.className += classname;
    }
    addTemplateToId(id: string) {
        document.getElementById(id)!.appendChild(this.content);
    }
    addTemplateToBody() {
        document.body.appendChild(this.content);
    }
}