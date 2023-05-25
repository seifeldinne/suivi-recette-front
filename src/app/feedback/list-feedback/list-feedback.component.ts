import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Feedback} from 'app/models/feedback/feedback.model';
import {FeedbackService} from 'app/service/feedback/feedback.service';
import {AddFeedbackComponent} from '../add-feedback/add-feedback/add-feedback.component';

@Component({
    selector: 'app-maps',
    templateUrl: './list-feedback.component.html',
    styleUrls: ['./list-feedback.component.css']
})
export class ListFeedbackComponent implements OnInit {
    feedback: Feedback[];
    displayedColumns: string[] = ['nomSeance', 'description', 'action'];

    dataSource = new MatTableDataSource<Feedback>();
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private feedbackService: FeedbackService, private domaineDialog: MatDialog) {
    }

    ngOnInit() {
        this.getListOfFeedBack();
    }

    getListOfFeedBack() {
        this.dataSource.paginator = this.paginator;
        this.feedbackService.getFeedbackList().subscribe(data => {
            this.dataSource.data = data;
            console.log(data);
        })
    }

    addFeedBack() {
        const dialogRef = this.domaineDialog.open(AddFeedbackComponent, {});
        dialogRef.afterClosed().subscribe({
            next: (val) => {
                if (val) {
                    this.getListOfFeedBack();
                }
            },
        });
    }
}


