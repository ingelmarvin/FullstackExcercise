/// <reference path="maintemplate.ts" />

class TestTemplate extends MainTemplate {
    constructor(name: string){
        super();

        this.content.innerHTML =
        `<p>${name}</p>`;
    }
}

class TestTemplateP extends MainTemplate {
    constructor(name: string){
        super("p");
        this.addClass("test test2")

        this.content.innerHTML =
        `${name}`;
    }
}

class AddProductTemplate extends MainTemplate {
    constructor(){
        super();

        this.content.innerHTML =
        `<form method="post" action="/addProduct">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-check">
          <input type="checkbox" name="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>`;
    }
}