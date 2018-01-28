import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchTerm$ : Subject<string> = new Subject<string>();

  constructor(private router : Router, private route : ActivatedRoute) {
    this.searchTerm$.debounceTime(100)
      .distinctUntilChanged()
      .forEach(term => this.inputEvent(term)).catch();
  }

  ngOnInit() {
  }

  inputEvent(searchString) {
    this.router.navigate(['./'], {queryParams: { query: searchString }, queryParamsHandling: "merge",
      relativeTo: this.route });
  }

}
