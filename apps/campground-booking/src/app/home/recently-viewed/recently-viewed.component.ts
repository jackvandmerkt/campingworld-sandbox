import { Component } from "@angular/core";

@Component({
    selector: 'recently-viewed',
    templateUrl: './recently-viewed.component.html'
})
export class RecentlyViewedComponent {
    data = [{
        'id': '930000529',
        'parkName': 'Campground Park Name on Three Lines',
        'city': 'Chicago',
        'st': 'IL'
    },
    {
        'id': '930000530',
        'parkName': 'Campground Park Name',
        'city': 'Chicago',
        'st': 'IL'
    },
    {
        'id': '930000531',
        'parkName': 'Campground Park Name on Three Lines',
        'city': 'San Fransico',
        'st': 'CA'

    },
    {
        'id': '930000532',
        'parkName': 'Campground Park Name',
        'city': 'Bloomington',
        'st': 'IN'
    },
    {
        'id': '930000533',
        'parkName': 'Campground Park Name on Three Lines',
        'city': 'Three Rivers',
        'st': 'MI'
    },
    {
        'id': '930000534',
        'parkName': 'Campground Park Name',
        'city': 'Indianapolis',
        'st': 'IN'
    }
]
    constructor() {

    }
}