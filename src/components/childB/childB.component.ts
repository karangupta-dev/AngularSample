import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'childB',
    template: `<p>Hi There</p>`,
    styles: [`
        p{
            color:red;
        } 
    `]
})
export class ChildBComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { 
        console.log("B is initializd");
    }
}
