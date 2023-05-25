import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Feedback } from 'app/models/feedback/feedback.model';
import {FeedbackService} from 'app/service/feedback/feedback.service';

@Component({
    selector: 'app-add-feedback',
    templateUrl: './add-feedback.component.html',
    styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {
    feedbackForm: FormGroup;

    constructor(
        private _fb: FormBuilder,
        private feedbackService: FeedbackService,
        private _dialogRef: MatDialogRef<AddFeedbackComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Feedback
    ) {
        this.feedbackForm = this._fb.group({
            nomSeance: '',
            description: '',
        });
    }

    ngOnInit(): void {
    }

    onFormSubmit() {
        if (this.feedbackForm.valid) {
            this.feedbackService.createFeedback(this.feedbackForm.value).subscribe({
                next: (val: any) => {
                    this._dialogRef.close(true);
                },
                error: (err: any) => {
                    console.error(err);
                },
            });
        }
    }
}
