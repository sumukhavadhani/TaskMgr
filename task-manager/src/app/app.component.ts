import { Component } from '@angular/core';
declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular4 jQuery Example';
  
  hideParagarph(): void {
    console.log("In Hide Paragraph...");
    $(document).ready(function(){
      $("button").click(function(){
        $("p").hide();
      });
    });
  }
  
  draggableSection(): void {
    $( function() {
      $( "#sortable" ).sortable();
      $( "#sortable" ).disableSelection();
    } );
  }
}
