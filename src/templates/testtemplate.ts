/// <reference path="template.ts" />

class Testtemplate extends Template {
    constructor(name: string){
        super();

        this.content.innerHTML =
        `<p>${name}</p>`;
    }
}