import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { Message } from './models/message.model';
@Component({
    selector: 'validation-summary',
    templateUrl: './validation-summary.component.html',
    styleUrls: ['./validation-summary.component.css'],
    inputs: ['resources', 'formObject', 'siblingForms', 'message']
})
export class ValidationSummaryComponent implements OnInit {
    public resources;
    public formObject;
    public siblingForms;
    public message: Message;
    @Output() messageReset: EventEmitter<string> = new EventEmitter<string>(true);;
    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    hasError() {
        let returnFlag: boolean = false;
        if (this.message && this.message.messageType && this.message.messageType > 0) {
            if (this.siblingForms) {
                this.siblingForms.forEach(f => {
                    if (f.dirty) {
                        this.messageReset.emit();
                    }
                });
            }
            if (this.formObject.dirty) {
                this.messageReset.emit();
            }
        }

        if (this.formObject.invalid && this.formObject.dirty) {
            this.getKeys(this.formObject.controls).forEach((key) => {
                if (this.formObject.controls[key].dirty && this.formObject.controls[key].touched && this.formObject.controls[key].errors) {
                    returnFlag = true;
                    return;
                }
            });
        }

        return returnFlag || (this.message && this.message.messageType && this.message.messageType === 1);
    }

    hasSuccessMessage() {
        return this.message && this.message.messageType && this.message.messageType === 2;
    }

    getKeys(object: any): Array<string> {
        if (!object) return [];
        return Object.keys(object);
    }

    getResource(key: string, validator: string) {
        return this.resources[key + "_" + validator + "_message"] ? this.resources[key + "_" + validator + "_message"] : key + " is " + validator;
    }
    navigateToRoute() {
        this.router.navigate([this.message.redirectUrl]);
        return false;
    }
}
