import {Component} from 'angular2/core';
import {Artist} from './artist';

@Component({
    selector: 'artist-details',
    templateUrl: 'partials/artistdetails.html',
    inputs: ['artist'],
    style: ['artist-details.css']
})

export class ArtistDetailsComponent {}