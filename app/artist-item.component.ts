import {Component} from 'angular2/core';

@Component ({
    selector: 'artist-item',
    templateUrl: 'partials/artistitem.html',
    style: ['artist-item.css'],
    inputs: ['artist']
})

export class ArtistItemComponent {}