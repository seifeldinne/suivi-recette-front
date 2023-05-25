import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Feedback} from 'app/models/feedback/feedback.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FeedbackService {
    private baseUrlFeedback = 'http://localhost:8080/feedback/';

    constructor(private http: HttpClient) {
    }

    getFeedbackList(): Observable<Feedback[]> {
        return this.http.get<any>(`${this.baseUrlFeedback}` + 'list-feedback');

    }

    createFeedback(domaine: Feedback): Observable<Feedback> {
        return this.http.post(`${this.baseUrlFeedback}` + 'save-feedback', domaine);
    }
}
