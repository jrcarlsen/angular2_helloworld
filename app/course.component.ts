import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {CourseService} from './course.service.ts';

@Component({
    selector: 'app',
    templateUrl: 'partials/courses.html',
    providers: [CourseService],
})
class CourseComponent {
    public title: string = 'Courses';
    courses; // = ['Course 1', 'Course 2', 'Course 3', 'Course 4']

    constructor(courseService: CourseService) {
        this.course = courseService.getCourses();
    }
}

bootstrap(CourseComponent, [CourseService]);
