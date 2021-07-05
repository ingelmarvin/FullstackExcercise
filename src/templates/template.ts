class Template {
    content: HTMLElement = document.createElement("div");
    addTemplateToId(id: string) {
        document.getElementById(id)!.appendChild(this.content);
    }
    addTemplateToBody() {
        document.body.appendChild(this.content);
    }
}