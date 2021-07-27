import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
	selector: 'app-course-list',
	templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

	courses: Course[] = [];

	ngOnInit(): void{
		this.courses = [
			{
				id: 1,
				name: 'Angular',
				imageUrl: '',
				price: 99.99,
				code: 'XPS-8796',
				duration: 120,
				rating: 4.4,
				releaseDate: 'December, 2, 2020'
			},
			{
				id: 2,
				name: 'CSS',
				imageUrl: '',
				price: 49.99,
				code: 'XPS-8296',
				duration: 80,
				rating: 4,
				releaseDate: 'May, 4, 2020'
			}
		]
	}


}
