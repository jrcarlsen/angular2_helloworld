import {Injectable} from 'angular2/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class CourseService {
//    constructor(@Inject(Http) private http: Http) { 
//    }

    getCourses(): string[] {
        return ['Course 1', 'Course 2', 'Course 3', 'Course 4', 'Course 5'];
    }
}
