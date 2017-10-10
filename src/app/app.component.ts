import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'app';
	emails = [
		{email: 'daboss@dundmiff.com', important: true, subject: 'Email Forwards', content: 'I\'m going to forward around like it\'s hot!'},
		{email: 'ppotamus@2xsebben.com', important: false, subject: 'That thing...', content: 'Did you get that thing I sent you?'},
		{email: 'bob.dole@alston.com', important: false, subject: 'BOB DOLE', content: 'bob dole...'},
		{email: 'navi@greatdekutree.com', important: true, subject: 'Hey!', content: 'Listen!'}
	]
}
